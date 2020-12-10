const fs = require("fs");
const path = require("path");
const loger = require("./log");

module.exports = {
    save: async function (dir, filename, content) {
        if (dir.startsWith(".")) {
            dir = path.join(process.cwd(), dir);
        }
        // 如果文件夹不存在
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }
        dir = path.join(dir, filename);
        fs.writeFileSync(dir, content);
        loger.info(`${filename} Created!`);
    },
    exist: async function (dir, filename) {
        if (dir.startsWith(".")) {
            dir = path.join(process.cwd(), dir);
        }
        dir = path.join(dir, filename)
        return fs.existsSync(dir);
    }
};
