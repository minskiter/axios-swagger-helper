### Open Api 3.0 Auto Gen Js Axios Client Code

![](https://img.shields.io/npm/v/axios-swagger-helper?style=flat-square)
![](https://img.shields.io/npm/dw/axios-swagger-helper?style=flat-square)

#### What is axios-swagger-helper?
1. Automatically export from swagger.json(OPEN API 3)
2. Example of exported file
model.js
``` js
export class WeatherForecast {
   
    /**
     * 
     * @type {String}
     */
    date=undefine
   
    /**
     * 
     * @type {Number}
     */
    temperatureC=undefine
   
    /**
     * 
     * @type {Number}
     */
    temperatureF=undefine
   
    /**
     * 
     * @type {String}
     */
    summary=undefine

}
export class Query {
   
    /**
     * 
     * @type {Number}
     */
    page=undefine
   
    /**
     * 
     * @type {Number}
     */
    size=undefine

}

```
api.js
``` js
/* eslint-disable */
// More information: https://github.com/minskiter/openapijs
import axios from './config'
import {CancelTokenSource} from 'axios'
import {WeatherForecast,Query} from './model.js'


axios.interceptors.request.use(
  config => {
    if (
      config.headers["Content-Type"].includes("x-www-form-urlencoded") ||
      config.headers["Content-Type"].includes("multipart/form-data")
    ) {
      let formData = new FormData();
      for (let item in config.data) {
        if (config.data[item])
        if (
          typeof config.data[item] == "object" &&
          Array.isArray(config.data[item])
        ){  
          for (let index in config.data[item]){
              let i = config.data[item][index];
              formData.append(item,i);
          }
        }
        else formData.append(item, config.data[item]);
      }
      config.data = formData;
    }
    return config;
  },
  error=>{
    return Promise.reject(error)
  }
)
export class WeatherForecast {
 
  /**
  * @summary 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  */
  static async Get(cancelSource){
    return await new Promise((resolve,reject)=>{
      let responseType = "text";
      let options = {
        method:'get',
        url:'/WeatherForecast',
        data:{},
        params:{},
        headers:{
          "Content-Type":""
        },
        cancelToken:cancelSource?.token
      }
      if (responseType != "json"){
        options.responseType = responseType;
      }
      axios(options)
      .then(res=>{
        if (res.config.responseType=="blob"){
          resolve(new Blob([res.data],{
            type: res.headers["content-type"].split(";")[0]
          }))
        }else{
          resolve(res.data);
          return res.data
        }
      }).catch(err=>{
        if (err.response.data)
          reject(err.response.data)
        else
          reject(err.response);
      })
    })
  }
 
  /**
  * @summary 
  * @param {String} [file] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  */
  static async GetFileName(file,cancelSource){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/WeatherForecast',
        data:{file},
        params:{},
        headers:{
          "Content-Type":"multipart/form-data"
        },
        cancelToken:cancelSource?.token
      }
      if (responseType != "json"){
        options.responseType = responseType;
      }
      axios(options)
      .then(res=>{
        if (res.config.responseType=="blob"){
          resolve(new Blob([res.data],{
            type: res.headers["content-type"].split(";")[0]
          }))
        }else{
          resolve(res.data);
          return res.data
        }
      }).catch(err=>{
        if (err.response.data)
          reject(err.response.data)
        else
          reject(err.response);
      })
    })
  }
 
  /**
  * @summary 
  * @param {Query} [query] 
  * @param {CancelTokenSource} [cancelSource] Axios Cancel Source 对象，可以取消该请求
  */
  static async PostTest(query,cancelSource){
    return await new Promise((resolve,reject)=>{
      let responseType = "json";
      let options = {
        method:'post',
        url:'/WeatherForecast/test',
        data:query,
        params:{},
        headers:{
          "Content-Type":"application/json"
        },
        cancelToken:cancelSource?.token
      }
      if (responseType != "json"){
        options.responseType = responseType;
      }
      axios(options)
      .then(res=>{
        if (res.config.responseType=="blob"){
          resolve(new Blob([res.data],{
            type: res.headers["content-type"].split(";")[0]
          }))
        }else{
          resolve(res.data);
          return res.data
        }
      }).catch(err=>{
        if (err.response.data)
          reject(err.response.data)
        else
          reject(err.response);
      })
    })
  }
}
```

#### INSTALL
``` sh
yarn global add axios-swagger-helper
# npm install -g axios-swagger-helper
```

use single project
``` sh
yarn add -D axios-swagger-helper
# npm install -D axios-swagger-helper
```
package.json
``` json
{
    "scripts":{
        "api":"api-cli get https://example.com/swagger/v1/swagger.json -d ./api"
    }
}
```

#### USAGE

``` sh
# Global
api-cli get {url} -d {output_dir}
```

#### Devlopment

- git clone https://github.com/minskiter/openapijs.git # clone this repo
- yarn # install dependencies
- yarn dev # debug 

#### Issues

Template:
[Swagger Docs Url]: http://localhost:5000/swagger/v1/swagger.json

Problem: 
something decode fail...
[image]

#### CHANGE LOG
[2021-3-5]  v0.0.41
1. Add model classes file
2. Rename axios.js config.js
3. Add import models resolve 
4. [Update Warning] Model.js will change the old parameters, please use the class instead