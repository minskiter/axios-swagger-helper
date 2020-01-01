let docs = "";
const render = require("./render");
const fs = require("fs");
const path = require("path");
const uppercamelcase = require("uppercamelcase");
const axios = require("axios");

process.addListener("exit", function(code) {
  console.log();
});

async function getDocs(url) {
  if (url.includes("http"))
    return await new Promise((resolve, reject) => {
      axios
        .get(url)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err.data);
        });
    });
  else {
    return require(url);
  }
}

async function main(url) {
  let jsonUrl = process.argv[2] || url;
  if (jsonUrl.includes('http')) {
    await getDocs(jsonUrl)
      .then(res => {
        docs = res;
        console.log(docs);
      })
      .catch(err => {
        console.log(err);
      });
  }else{
    docs = require(jsonUrl)
  }

  let content = `import ax from 'axios'
import qs from 'qs'
let axios = ax.create()

axios.interceptors.request.use(
  config=>{
    if ((config.method==='post' || config.method==='put') 
    && config.headers['Content-Type'].includes('x-www-form-urlencoded')){
      config.data = qs.stringify(config.data)
    }
    return config
  },
  error=>{
    return Promise.reject(error)
  }
)
`;

  const baseUrl = "";

  const types = {
    Integer: "number",
    String: "string",
    Object: "object"
  };

  let template = {
    comment: `/**
{{summary}}
{{params}}
{{return}}
{{author}}
/`,
    class: `
export class {{className}} {
{{functions}}
}
`,
    function: `

{{comment}}
static async {{methodName}}({{paramsName}}callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'{{method}}',
      url:'{{url}}',
      data:{{{paramsName}}},
      params:{{{queryName}}},
      headers:{
        "Content-Type":"{{contentType}}"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 
`
  };

  let apiClass = {};

  for (let key in docs.paths) {
    let api;
    for (let method in docs.paths[key]) {
      let apiJson = docs.paths[key][method];
      api = {
        method,
        summary: " @summary " + (apiJson.summary || ""),
        url: key,
        return: " @returns " + `{Promise} ${apiJson.produces || ""}`,
        author: " @author " + (docs.info.contact.name || " api-docs-script"),
        params: ` @param {function} [callback] 回调函数\n`,
        paramsName: "",
        contentType: "application/x-www-form-urlencoded; charset=utf-8;"
      };
      // 判断参数
      for (let index in apiJson.parameters) {
        let parm = apiJson.parameters[index];
        // 复杂对象
        if (parm.name.includes(".")) {
          let objName = parm.name.split(".")[0];
          if (api.paramsName.includes(objName)) {
            continue; //已经存在则跳过
          }
          (parm.name = objName),
            (parm.type = "object"),
            (parm.description = objName);
        }
        if (parm.required){
          api.params += ` @param {${types[
            uppercamelcase(parm.type)
          ] || uppercamelcase(parm.type)}} ${parm.name} - ${parm.type=='string'?parm.pattern || '':''} ${parm.type=='integer'?parm.minimum+'-'+parm.maximum:''} ${parm.description || ""}\n`;
        }
        else{
          api.params += ` @param {${types[
            uppercamelcase(parm.type)
          ] || uppercamelcase(parm.type)}} [${parm.name}${parm.default?'='+parm.default:''}] - ${parm.description || ""}\n`;
        }
        api.paramsName += parm.name + ",";
        if (parm.in == "query") {
          api.contentType = "application/x-www-form-urlencoded; charset=utf-8;";
        } else if (parm.in == "formData" || parm.in == "body") {
          if (parm.in == "formData") {
            api.contentType =
              "application/x-www-form-urlencoded; charset=utf-8;";
          } else {
            api.contentType = "application/json; charset=utf-8;";
          }
        }
      }
      api.params = api.params.replace(/\n$/, "");
      if (method == "get" || method == "delete") {
        api.queryName = api.paramsName;
      } else {
        api.queryName = "";
      }
      api.comment = render(template.comment, api).replace(/\n/g, "\n *");
      api.className = apiJson.tags[0];
      api.methodName = apiJson.operationId;
      api.url = key;
      api.function = render(template.function, api);
      if (!(api.className in apiClass)) {
        apiClass[api.className] = {
          functions: "",
          className: api.className
        };
      }
      apiClass[api.className].functions += api.function;
    }
    // console.log(apiClass)
    // return ;
  }


  for (let key in apiClass) {
    content += render(template.class, apiClass[key]);
  }

  fs.writeFile(path.join(__dirname,'./api.js'),content,()=>{
    console.log('api.js create success!')
  })
}

main('./test.json');

export default function(url) {
  main(url);
}
