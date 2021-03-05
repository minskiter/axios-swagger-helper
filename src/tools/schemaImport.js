const importT = require("../template/importClass")
const render = require("../render")

function importModels(docs){
    let classes = []
    for (let className in docs.components.schemas) {
        classes.push(className)
    }
    classes = classes.join(",")
    return render(importT, { classes, path: "./model.js" })
}

module.exports = importModels;