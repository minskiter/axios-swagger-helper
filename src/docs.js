const axios = require("axios");
const path = require("path");

module.exports = {
    getDocs: async function (url) {
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
            return require(path.join(process.cwd(), url));
        }
    }
};
