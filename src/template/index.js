module.exports = `/* eslint-disable */
// More information: https://github.com/minskiter/openapijs
import axios from './config'
import {CancelTokenSource} from 'axios'
{{models}}

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
)`;
