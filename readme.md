# This repository is no longer maintained
see typescript https://github.com/minskiter/auto-openapi 

### Open Api 3.0 Auto Gen Js Axios Client Code

![](https://img.shields.io/npm/v/axios-swagger-helper?style=flat-square)
![](https://img.shields.io/npm/dw/axios-swagger-helper?style=flat-square)

#### What is axios-swagger-helper?
1. Automatically export from swagger.json(OPEN API 3)

2. The example of file:

   - dir

     ![image](https://z3.ax1x.com/2021/10/02/4bbt2T.png)

   - api file (auto generate)

   ![Snipaste 2021 10 02 21 31 59](https://z3.ax1x.com/2021/10/02/4bb1Vs.png)

   - custom config(config.js)

     ![image](https://z3.ax1x.com/2021/10/02/4bbDaR.png)

   - global types(Vue):

     ![image](https://z3.ax1x.com/2021/10/02/4bbOsg.png)

     

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

> Template:
>
> [Swagger Docs Url]: http://localhost:5000/swagger/v1/swagger.json
>
> Problem: 
> something decode fail...
> [image]

#### CHANGE LOG  

> [2021-3-20] v0.0.44
>
> 1. UploadProgress Callback Function  
> 2. DownloadProgress Callback Function  
>
> [2021-3-6]  v0.0.42  
>
> 1. Import userModel  
> 2. Format parameter type {userModel.*}   
>
> [2021-3-5]  v0.0.41   
>
> 1. Add model classes file
> 2. Rename axios.js config.js
> 3. Add import models resolve 
> 4. [Update Warning] Model.js will change the old parameters, please use the class instead

