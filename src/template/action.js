module.exports = `  
  /**
{{comment}}
  */
  static async {{methodName}}({{paramsName}}){
    return await new Promise((resolve,reject)=>{
      let responseType = "{{responseType}}";
      let options = {
        method:'{{method}}',
        url:'{{url}}',
        data:{{{dataName}}},
        params:{{{queryName}}},
        headers:{
          "Content-Type":"{{contentType}}"
        }
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
  }`;
