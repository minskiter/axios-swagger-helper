module.exports = `  
  /**
{{comment}}
  */
  static async {{methodName}}({{paramsName}}){
    return await new Promise((resolve,reject)=>{
      axios({
        method:'{{method}}',
        url:'{{url}}',
        data:{{{dataName}}},
        params:{{{queryName}}},
        headers:{
          "Content-Type":"{{contentType}}"
        },
        responseType:"{{responseType}}"
      })
      .then(res=>{
        if (res.config.responseType=="blob"){
          resolve(new Blob([res.data],{
            type: res.headers["content-type"].split(";")[0]
          }))
        }else{
          resolve(res.data);
        }
      }).catch(err=>{
        reject(err.response.data);
      })
    })
  }`;
