#! /usr/bin/env node

const Loger = require("./log");
const program = require("commander");
const apigen = require("./apigen");
const file = require("./output")

const package = require("../package.json");

program
    .version(package.version, '-v,--version')
    .command("get [url]")
    .description("get axios vue api from swagger.json")
    .action(async function (url, program) {
        if (!url) {
            Loger.error(`USAGE api get [url]`);
            process.exit(1);
        }
        let content = await apigen(url);
        if (content) {
            let dir = program.Dir || "./";
            file.save(dir, "api.js", content);
            if (!await file.exist(dir, "axios.js")) {
                axios = require('./template/axios.js')
                file.save(dir, "axios.js", axios);
            }
        }
    }).option('-d,-dir [path]', 'custom dir path');

program.parse(process.argv);
