#! /usr/bin/env node

const Loger = require("./log");
const program = require("commander");
const file = require("./output")
const docsHelper = require("./docs");

const schemaHelper = require("./tools/schemaResolve");
const apigen = require("./tools/apigen");

const package = require("../package.json");

program
    .version(package.version, '-v,--version')
    .command("get [url]")
    .description("get axios vue api from swagger.json")
    .action(async function (url, program) {
        const savepath = program.Dir || "./";
        if (!url) {
            Loger.error(`USAGE api get [url]`);
            process.exit(1);
        }
        let docs = await docsHelper.getDocs(url);
        let api = apigen(docs);
        let schemas = schemaHelper(docs)
        if (api) {
            file.save(savepath, "api.js", api);
            if (!file.exist(savepath, "config.js")) {
                axios = require('./template/config.js')
                file.save(savepath, "config.js", axios);
            }
        }
        if (schemas) {
            file.save(savepath, "model.js", schemas);
        }
    }).option('-d,-dir [path]', 'custom dir path');

program.parse(process.argv);
