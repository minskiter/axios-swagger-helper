#! /usr/bin/env node

const Loger = require("./log");
const program = require("commander");
const apigen = require("./apigen");

program
  .command("get [url]")
  .description("get axios vue api from swagger.json")
  .action(async function(url) {
    if (!url) {
      Loger.error(`USAGE api get [url]`);
      process.exit(1);
    }
    await apigen(url);
  });

program.parse(process.argv);
