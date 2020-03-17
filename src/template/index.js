module.exports = `import ax from 'axios'
let axios = ax.create()

axios.interceptors.request.use(
  config => {
    if (
      config.headers["Content-Type"].includes("x-www-form-urlencoded") ||
      config.headers["Content-Type"].includes("multipart/form-data")
    ) {
      let formData = new FormData();
      for (let item in config.data) {
        if (
          typeof config.data[item] == "object" &&
          config.data[item].length > 0
        )
          for (let i of config.data[item]) formData.append(item, i);
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
