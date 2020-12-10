### Open Api 3.0 Auto Gen Js Axios Client Code

![](https://img.shields.io/npm/v/axios-swagger-helper?style=flat-square)
![](https://img.shields.io/npm/dw/axios-swagger-helper?style=flat-square)

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