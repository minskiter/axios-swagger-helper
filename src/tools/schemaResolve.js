'use strict'

const classT = require("../template/class");
const render = require("../render")
const jsType = require("./swaggerType")

const propertyT = `   
    /**
     * {{summary}}
     * @type {{{type}}}
     */
    {{name}}={{value}}`;

const defaultValue = {
    string: `undefine`,
    array: `undefine`,
    integer: `undefine`
}

const paramsT = `     * @param {{{type}}} {{name}} {{summary}}`


function schemaGen(schema) {
    let props = "";
    let constructFunc = []
    let assigns = []
    let params = []
    if (schema.type && schema.type == "object") {
        for (let propertyName in schema.properties) {
            constructFunc.push(`${propertyName} = undefine`)
            assigns.push(`this.${propertyName} = ${propertyName}`)
            let property = schema.properties[propertyName]
            if (property.type) {
                let obj = {
                    type: jsType[property.type],
                    summary: property.description == null ? "" : property.description,
                    name: propertyName,
                    value: defaultValue[property.type]
                }
                props += render(propertyT, obj)
                params.push(render(paramsT, obj))
            } else if (property.$ref) {
                let className = property.$ref.split("/").slice(-1)[0]
                let obj = {
                    type: className,
                    summary: "",
                    name: propertyName,
                    value: `undefine`
                }
                props += render(propertyT, obj)
                params.push(render(paramsT, obj))
            }
        }
    }
    return `
    /**
     *
${params.join("\n")}
     */ 
    constructor(${constructFunc.join(",")}){
        ${assigns.join("\n        ")}
    }
    ${props}
    `
}

function schemaResolver(docs) {
    let classes = {}
    for (let schemaName in docs.components.schemas) {
        let schema = docs.components.schemas[schemaName]
        classes[schemaName] = render(classT, {
            className: schemaName,
            functions: schemaGen(schema)
        })
    }
    var content = ""
    for (let className in classes) {
        content += classes[className] + '\n';
    }
    return content
}

module.exports = schemaResolver;