const docsHelper = require("./docs");
const loger = require("./log");
const path = require("path");
const render = require("./render");
const fs = require("fs");
const uppercamelcase = require("uppercamelcase");

let apis = {};

async function decode(docs) {
  let paths = docs.paths;
  if (paths) {
    for (let path in paths) {
      for (let method in paths[path]) {
        let json = paths[path][method];
        let className = json.tags
          ? json.tags[0]
            ? json.tags[0]
            : "common"
          : "common";
        if (!apis[className]) {
          apis[className] = {};
        }
        let api = {
          path: path.replace(/{/g, "'+").replace(/}/g, "+'"),
          method: method,
          query: [],
          parameters: [],
          data: [],
          contentType: "",
          summary: json.summary
        };
        if (!json.operationId) {
          loger.error("operationId undefined.Please contact backend...");
          process.exit(1);
        }
        // repeat operationId
        let id = 1;
        while (apis[className][json.operationId]) {
          json.operationId += id;
          ++id;
        }
        // decode query or path params
        if (json.parameters) {
          for (let key in json.parameters) {
            let parameter = json.parameters[key];
            let parm = {
              name: parameter.name,
              type: parameter.schema ? parameter.schema.type : "object",
              summary: parameter.description ? parameter.description : ""
            };
            api.parameters.push(parm);
            if (parameter.in == "query") {
              api.query.push(parm);
            } else if (parameter.in == "path") {
              let rgx = new RegExp("\\'\\+" + parm.name + "\\+\\'", "gi");
              api.path = api.path.replace(
                rgx,
                "'+" + uppercamelcase(parm.name) + "+'"
              );
              let lowerRex = new RegExp("\\'\\+" + parm.name.toLowerCase() + "\\+\\'", "gi");
              api.path = api.path.replace(
                lowerRex,
                "'+" + uppercamelcase(parm.name) + "+'"
              );
            }
          }
        }
        // decode form or body data
        if (json.requestBody) {
          let parameter = json.requestBody.content;
          if (!parameter) continue;
          for (let content in parameter) {
            let item = parameter[content];
            if (content == "multipart/form-data") {
              api.contentType = content;
              let parameter = item.schema;
              if (!parameter) continue;
              parameter = parameter.properties;
              if (!parameter) continue;
              for (let item in parameter) {
                let parm = {
                  name: item,
                  type: parameter[item].type ? parameter[item].type : "object",
                  summary: parameter[item].description
                    ? parameter[item].description
                    : ""
                };
                api.parameters.push(parm);
                api.data.push(parm);
              }
            } else if (content == "application/json") {
              api.contentType = content;
              let parameter = item.schema;
              let ref = parameter.$ref.split("/");
              parameter = docs;
              for (let index in ref) {
                let key = ref[index];
                if (key != "#") parameter = parameter[key];
              }

              parameter = parameter.properties;
              if (!parameter) continue;
              for (let item in parameter) {
                let parm = {
                  name: item,
                  type: parameter[item].type ? parameter[item].type : "object",
                  summary: parameter[item].description
                    ? parameter[item].description
                    : ""
                };
                api.parameters.push(parm);
                api.data.push(parm);
              }
            } else {
              continue;
            }
          }
        }
        apis[className][json.operationId] = api;
      }
    }
  } else {
    loger.error("Document missing api");
    process.exit(1);
  }
}

const actionT = require("./template/action");
const classT = require("./template/class");
const indexT = require("./template/index");

async function gen(apis) {
  let apiContent = [indexT];
  for (let className in apis) {
    let functions = [];
    let controller = apis[className];
    for (let methodName in controller) {
      loger.info((className + "." + methodName).green);
      let action = controller[methodName];
      let comment = [];
      comment.push("  * @summary " + action.summary);
      for (let index in action.parameters) {
        let item = action.parameters[index];
        comment.push(
          "  * @param {" +
            item.type +
            "} [" +
            uppercamelcase(item.name) +
            "] " +
            item.summary
        );
      }
      comment = comment.join("\n");
      let paramsName = [];
      for (let index in action.parameters) {
        paramsName.push(uppercamelcase(action.parameters[index].name));
      }
      paramsName = paramsName.join(",");
      let dataName = [];
      for (let index in action.data) {
        dataName.push(uppercamelcase(action.data[index].name));
      }
      dataName = dataName.join(",");
      let queryName = [];
      for (let index in action.query) {
        queryName.push(uppercamelcase(action.query[index].name));
      }
      let apiT = render(actionT, {
        comment,
        methodName,
        paramsName,
        dataName,
        queryName,
        url: action.path,
        method: action.method,
        contentType: action.contentType
      });
      functions.push(apiT);
    }
    functions = functions.join("\n");
    apiContent.push(
      render(classT, {
        className,
        functions
      })
    );
  }
  apiContent = apiContent.join("\n");
  return apiContent;
  fs.writeFile(path.join(process.cwd(), "./api.js"), apiContent, () => {
    loger.info("[DONE] Success!".green);
  });
}

module.exports = async function(url) {
  let docs = await docsHelper.getDocs(url);
  await decode(docs);
  return await gen(apis);
};
