# Swgger Json 自动化生成 axios 请求函数

# Usage

yarn add axios-swagger-helper -D
or npm install -D axios-swagger-helper

# Dev

- git clone https://github.com/minskiter/openapijs.git # clone this repo
- yarn # install dependencies
- yarn dev # debug 

- have fun

# 所依赖的json必须符合是标准的RESTFUL WEB API

### 对于dotnet core web api
1. 必须指定responseType
2. 如果需要用formdata必须指定[fromform],query同需指定

### 此工具处于beta阶段，只满足自用需求，未能适配所有情况，有任何新需求欢迎提出issue