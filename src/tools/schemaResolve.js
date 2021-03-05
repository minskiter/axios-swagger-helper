'use strict'

const classT = require("../template/class");
let render = require("../render")

const propertyT = `   
    /**
     * {{summary}}
     * @type {{{type}}}
     */
    {{name}}={{value}}
`;

const defaultValue = {
    string: `undefine`,
    array: `undefine`,
    integer: `undefine`
}

const jsType = require("./swaggerType")

let typeSet = new Set();

// "StringStringValuesKeyValuePair": {
//     "type": "object",
//     "properties": {
//         "key": {
//             "type": "string",
//             "nullable": true,
//             "readOnly": true
//         },
//         "value": {
//             "type": "array",
//             "items": {
//                 "type": "string"
//             },
//             "readOnly": true
//         }
//     },
//     "additionalProperties": false
// },
function schemaGen(schema) {
    let props = "";
    if (schema.type && schema.type == "object") {
        for (let propertyName in schema.properties) {
            let property = schema.properties[propertyName]
            if (property.type) {
                props += render(propertyT, {
                    type: jsType[property.type],
                    summary: property.description == null ? "" : property.description,
                    name: propertyName,
                    value: defaultValue[property.type]
                })
            } else if (property.$ref) {
                let className = property.$ref.split("/").slice(-1)[0]
                props += render(propertyT, {
                    type: className,
                    summary: "",
                    name: propertyName,
                    value: `{}`
                })
            }
        }
    }
    return props
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