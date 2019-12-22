import * as api from './api'
import fs from 'fs'
import path from 'path'

let data=fs.readFileSync(path.join(__dirname,'../test.xlsx'),'binary')

async function main(){

await api.Login.Login('minskiter','yfy491098969').then(data=>{
  console.log(data)
})


await api.User.ImportUserList(data).then(data=>{
  console.log(data)
}).catch(err=>{
  console.log(err)
})

}

main()