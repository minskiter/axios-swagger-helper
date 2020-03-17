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
        }
      })
      .then(res=>{
        resolve(res.data)
      }).catch(err=>{
        reject(err)
      })
    })
  }`;
