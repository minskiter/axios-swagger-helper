import ax from 'axios'
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
)
export class Permission {
  
  /**
  * @summary 添加角色
  * @param {string} [Name] 名称
  * @param {string} [Prop] 属性
  */
  static async AddRole(Name,Prop){
    return await new Promise((resolve,reject)=>{
      axios({
        method:'post',
        url:'/api/role',
        data:{Name,Prop},
        params:{},
        headers:{
          "Content-Type":"application/json"
        }
      })
      .then(res=>{
        resolve(res.data)
      }).catch(err=>{
        reject(err.response.data)
      })
    })
  }
  
  /**
  * @summary 删除指定角色
  * @param {string} [RoleId] 角色GUID
  */
  static async RemoveRole(RoleId){
    return await new Promise((resolve,reject)=>{
      axios({
        method:'delete',
        url:'/api/role/'+RoleId+'',
        data:{},
        params:{},
        headers:{
          "Content-Type":""
        }
      })
      .then(res=>{
        resolve(res.data)
      }).catch(err=>{
        reject(err.response.data)
      })
    })
  }
  
  /**
  * @summary 更新角色
  * @param {string} [RoleId] 用户名GUID
  * @param {string} [Name] 名称
  * @param {string} [Prop] 属性
  */
  static async UpdateRole(RoleId,Name,Prop){
    return await new Promise((resolve,reject)=>{
      axios({
        method:'put',
        url:'/api/role/'+RoleId+'',
        data:{Name,Prop},
        params:{},
        headers:{
          "Content-Type":"application/json"
        }
      })
      .then(res=>{
        resolve(res.data)
      }).catch(err=>{
        reject(err.response.data)
      })
    })
  }
  
  /**
  * @summary 获取所有角色
  * @param {string} [LastKey] 角色最后的关键GUID
  * @param {integer} [Length] 查询长度
  */
  static async GetRoles(LastKey,Length){
    return await new Promise((resolve,reject)=>{
      axios({
        method:'get',
        url:'/api/roles',
        data:{},
        params:{LastKey,Length},
        headers:{
          "Content-Type":""
        }
      })
      .then(res=>{
        resolve(res.data)
      }).catch(err=>{
        reject(err.response.data)
      })
    })
  }
  
  /**
  * @summary 添加权限管理
  * @param {string} [Object] 权限控制的对象
  * @param {string} [Url] 权限的URL
  * @param {string} [Prop] 权限的属性
  * @param {string} [Scope] 权限的作用域
  */
  static async AddPermission(Object,Url,Prop,Scope){
    return await new Promise((resolve,reject)=>{
      axios({
        method:'post',
        url:'/api/permission',
        data:{Object,Url,Prop,Scope},
        params:{},
        headers:{
          "Content-Type":"application/json"
        }
      })
      .then(res=>{
        resolve(res.data)
      }).catch(err=>{
        reject(err.response.data)
      })
    })
  }
  
  /**
  * @summary 更新权限配置
  * @param {string} [PermissionId] 权限的GUID
  * @param {string} [Object] 权限控制的对象
  * @param {string} [Url] 权限的URL
  * @param {string} [Prop] 权限的属性
  * @param {string} [Scope] 权限的作用域
  */
  static async UpdatePermission(PermissionId,Object,Url,Prop,Scope){
    return await new Promise((resolve,reject)=>{
      axios({
        method:'put',
        url:'/api/permission/'+PermissionId+'',
        data:{Object,Url,Prop,Scope},
        params:{},
        headers:{
          "Content-Type":"application/json"
        }
      })
      .then(res=>{
        resolve(res.data)
      }).catch(err=>{
        reject(err.response.data)
      })
    })
  }
  
  /**
  * @summary 删除对应的权限，谨慎使用
  * @param {string} [PermissionId] 权限的GUID
  */
  static async RemovePermission(PermissionId){
    return await new Promise((resolve,reject)=>{
      axios({
        method:'delete',
        url:'/api/permission/'+PermissionId+'',
        data:{},
        params:{},
        headers:{
          "Content-Type":""
        }
      })
      .then(res=>{
        resolve(res.data)
      }).catch(err=>{
        reject(err.response.data)
      })
    })
  }
  
  /**
  * @summary 获取权限集
  * @param {string} [LastKey] 
  * @param {integer} [Length] 
  * @param {string} [Scope] 
  * @param {string} [Prop] 
  * @param {integer} [IsValid] 
  * @param {string} [CreateUser] 
  * @param {string} [UrlFilter] 
  */
  static async GetPermissions(LastKey,Length,Scope,Prop,IsValid,CreateUser,UrlFilter){
    return await new Promise((resolve,reject)=>{
      axios({
        method:'get',
        url:'/api/permissions',
        data:{},
        params:{LastKey,Length,Scope,Prop,IsValid,CreateUser,UrlFilter},
        headers:{
          "Content-Type":""
        }
      })
      .then(res=>{
        resolve(res.data)
      }).catch(err=>{
        reject(err.response.data)
      })
    })
  }
  
  /**
  * @summary 绑定角色权限
  * @param {string} [RoleId] 角色
  * @param {string} [PermissionId] 权限
  */
  static async BindRolePermission(RoleId,PermissionId){
    return await new Promise((resolve,reject)=>{
      axios({
        method:'post',
        url:'/api/role/'+RoleId+'/permission/'+PermissionId+'',
        data:{},
        params:{},
        headers:{
          "Content-Type":""
        }
      })
      .then(res=>{
        resolve(res.data)
      }).catch(err=>{
        reject(err.response.data)
      })
    })
  }
  
  /**
  * @summary 解绑用户权限
  * @param {string} [RoleId] 角色的GUID
  * @param {string} [PermissionId] 权限的GUID
  */
  static async UnbindRolePermission(RoleId,PermissionId){
    return await new Promise((resolve,reject)=>{
      axios({
        method:'delete',
        url:'/api/role/'+RoleId+'/permission/'+PermissionId+'',
        data:{},
        params:{},
        headers:{
          "Content-Type":""
        }
      })
      .then(res=>{
        resolve(res.data)
      }).catch(err=>{
        reject(err.response.data)
      })
    })
  }
  
  /**
  * @summary 绑定用户角色
  * @param {string} [UserId] 用户GUID
  * @param {string} [RoleId] 角色GUID
  * @param {string} [Prop] 属性（可选）
  */
  static async BindUserRole(UserId,RoleId,Prop){
    return await new Promise((resolve,reject)=>{
      axios({
        method:'post',
        url:'/api/user/'+UserId+'/role/'+RoleId+'',
        data:{},
        params:{Prop},
        headers:{
          "Content-Type":""
        }
      })
      .then(res=>{
        resolve(res.data)
      }).catch(err=>{
        reject(err.response.data)
      })
    })
  }
  
  /**
  * @summary 解绑用户角色
  * @param {string} [UserId] 用户GUID
  * @param {string} [RoleId] 角色GUID
  */
  static async UnBindUserRole(UserId,RoleId){
    return await new Promise((resolve,reject)=>{
      axios({
        method:'delete',
        url:'/api/user/'+UserId+'/role/'+RoleId+'',
        data:{},
        params:{},
        headers:{
          "Content-Type":""
        }
      })
      .then(res=>{
        resolve(res.data)
      }).catch(err=>{
        reject(err.response.data)
      })
    })
  }
  
  /**
  * @summary 获取角色的权限集
  * @param {string} [RoleId] 
  */
  static async GetRolePermissions(RoleId){
    return await new Promise((resolve,reject)=>{
      axios({
        method:'get',
        url:'/api/role/'+RoleId+'/permissions',
        data:{},
        params:{},
        headers:{
          "Content-Type":""
        }
      })
      .then(res=>{
        resolve(res.data)
      }).catch(err=>{
        reject(err.response.data)
      })
    })
  }
  
  /**
  * @summary 获取指定用户的权限
  * @param {string} [UserId] 
  */
  static async GetUserRole(UserId){
    return await new Promise((resolve,reject)=>{
      axios({
        method:'get',
        url:'/api/user/'+UserId+'/roles',
        data:{},
        params:{},
        headers:{
          "Content-Type":""
        }
      })
      .then(res=>{
        resolve(res.data)
      }).catch(err=>{
        reject(err.response.data)
      })
    })
  }
  
  /**
  * @summary 获取用户当前的角色
  */
  static async GetCurrentUserRoles(){
    return await new Promise((resolve,reject)=>{
      axios({
        method:'get',
        url:'/api/user/roles',
        data:{},
        params:{},
        headers:{
          "Content-Type":""
        }
      })
      .then(res=>{
        resolve(res.data)
      }).catch(err=>{
        reject(err.response.data)
      })
    })
  }
}
export class User {
  
  /**
  * @summary 用户登陆 5次失败需要邮箱验证，10失败需要等待60s
  * @param {string} [Identity] 身份标识
  * @param {string} [Password] 密码
  * @param {string} [VerifyCode] 登陆验证码{登陆失败一定次数}
  */
  static async Login(Identity,Password,VerifyCode){
    return await new Promise((resolve,reject)=>{
      axios({
        method:'post',
        url:'/api/user/session',
        data:{Identity,Password,VerifyCode},
        params:{},
        headers:{
          "Content-Type":"application/json"
        }
      })
      .then(res=>{
        resolve(res.data)
      }).catch(err=>{
        reject(err.response.data)
      })
    })
  }
  
  /**
  * @summary 发送登陆验证码
  * @param {string} [Email] 用户邮箱
  */
  static async GetLoginCode(Email){
    return await new Promise((resolve,reject)=>{
      axios({
        method:'get',
        url:'/api/user/session/'+Email+'/code',
        data:{},
        params:{},
        headers:{
          "Content-Type":""
        }
      })
      .then(res=>{
        resolve(res.data)
      }).catch(err=>{
        reject(err.response.data)
      })
    })
  }
  
  /**
  * @summary 用户注册
  * @param {string} [UserName] 用户名
  * @param {string} [Password] 密码
  * @param {string} [NickName] 昵称
  * @param {string} [Email] 邮箱
  * @param {string} [Phone] 手机号码
  * @param {string} [VerifyCode] 验证码
  */
  static async Register(UserName,Password,NickName,Email,Phone,VerifyCode){
    return await new Promise((resolve,reject)=>{
      axios({
        method:'post',
        url:'/api/user',
        data:{UserName,Password,NickName,Email,Phone,VerifyCode},
        params:{},
        headers:{
          "Content-Type":"application/json"
        }
      })
      .then(res=>{
        resolve(res.data)
      }).catch(err=>{
        reject(err.response.data)
      })
    })
  }
  
  /**
  * @summary 获取当前的用户信息
  */
  static async GetCurrentInfo(){
    return await new Promise((resolve,reject)=>{
      axios({
        method:'get',
        url:'/api/user',
        data:{},
        params:{},
        headers:{
          "Content-Type":""
        }
      })
      .then(res=>{
        resolve(res.data)
      }).catch(err=>{
        reject(err.response.data)
      })
    })
  }
  
  /**
  * @summary 更改当前用户的信息
  * @param {string} [NickName] 昵称
  * @param {string} [Gender] 性别 male,female,secret
  * @param {string} [Phone] 手机号码
  */
  static async UpdateCurrentUser(NickName,Gender,Phone){
    return await new Promise((resolve,reject)=>{
      axios({
        method:'put',
        url:'/api/user',
        data:{NickName,Gender,Phone},
        params:{},
        headers:{
          "Content-Type":"application/json"
        }
      })
      .then(res=>{
        resolve(res.data)
      }).catch(err=>{
        reject(err.response.data)
      })
    })
  }
  
  /**
  * @summary 获取验证码
  * @param {string} [Email] 邮箱
  */
  static async RegisterCode(Email){
    return await new Promise((resolve,reject)=>{
      axios({
        method:'get',
        url:'/api/user/'+Email+'/code',
        data:{},
        params:{},
        headers:{
          "Content-Type":""
        }
      })
      .then(res=>{
        resolve(res.data)
      }).catch(err=>{
        reject(err.response.data)
      })
    })
  }
  
  /**
  * @summary 设置头像
  * @param {string} [File] 
  */
  static async SetCurrentAvatar(File){
    return await new Promise((resolve,reject)=>{
      axios({
        method:'post',
        url:'/api/user/avatar',
        data:{File},
        params:{},
        headers:{
          "Content-Type":"multipart/form-data"
        }
      })
      .then(res=>{
        resolve(res.data)
      }).catch(err=>{
        reject(err.response.data)
      })
    })
  }
  
  /**
  * @summary 获取当前用户的头像
  */
  static async GetCurrentAvatar(){
    return await new Promise((resolve,reject)=>{
      axios({
        method:'get',
        url:'/api/user/avatar',
        data:{},
        params:{},
        headers:{
          "Content-Type":""
        }
      })
      .then(res=>{
        resolve(res.data)
      }).catch(err=>{
        reject(err.response.data)
      })
    })
  }
  
  /**
  * @summary 获取用户的头像
  * @param {string} [UserId] 用户的GUID
  */
  static async GetAvatar(UserId){
    return await new Promise((resolve,reject)=>{
      axios({
        method:'get',
        url:'/api/user/'+UserId+'/avatar',
        data:{},
        params:{},
        headers:{
          "Content-Type":""
        }
      })
      .then(res=>{
        resolve(res.data)
      }).catch(err=>{
        reject(err.response.data)
      })
    })
  }
  
  /**
  * @summary 设置用户的状态
  * @param {string} [UserId] 用户的GUID
  * @param {integer} [Status] 0 正常，1冻结，2封禁
  */
  static async SetUserStatus(UserId,Status){
    return await new Promise((resolve,reject)=>{
      axios({
        method:'put',
        url:'/api/user/'+UserId+'/status',
        data:{},
        params:{Status},
        headers:{
          "Content-Type":""
        }
      })
      .then(res=>{
        resolve(res.data)
      }).catch(err=>{
        reject(err.response.data)
      })
    })
  }
  
  /**
  * @summary 删除用户，谨慎使用
  * @param {string} [UserId] 
  */
  static async DeleteUser(UserId){
    return await new Promise((resolve,reject)=>{
      axios({
        method:'delete',
        url:'/api/user/'+UserId+'',
        data:{},
        params:{},
        headers:{
          "Content-Type":""
        }
      })
      .then(res=>{
        resolve(res.data)
      }).catch(err=>{
        reject(err.response.data)
      })
    })
  }
  
  /**
  * @summary 更改用户的信息
  * @param {string} [UserId] 用户的GUID
  * @param {string} [NickName] 昵称
  * @param {string} [Gender] 性别 male,female,secret
  * @param {string} [Phone] 手机号码
  */
  static async UpdateUser(UserId,NickName,Gender,Phone){
    return await new Promise((resolve,reject)=>{
      axios({
        method:'put',
        url:'/api/user/'+UserId+'',
        data:{NickName,Gender,Phone},
        params:{},
        headers:{
          "Content-Type":"application/json"
        }
      })
      .then(res=>{
        resolve(res.data)
      }).catch(err=>{
        reject(err.response.data)
      })
    })
  }
  
  /**
  * @summary 获取所有用户
  * @param {string} [LastKey] 最后一次的GUID
  * @param {integer} [Length] 数据范围
  * @param {string} [Gender] 性别
  * @param {string} [ApplyDate] 注册日期
  * @param {string} [NickName] 昵称
  * @param {integer} [Status] 用户状态
  */
  static async GetUsers(LastKey,Length,Gender,ApplyDate,NickName,Status){
    return await new Promise((resolve,reject)=>{
      axios({
        method:'get',
        url:'/api/users',
        data:{},
        params:{LastKey,Length,Gender,ApplyDate,NickName,Status},
        headers:{
          "Content-Type":""
        }
      })
      .then(res=>{
        resolve(res.data)
      }).catch(err=>{
        reject(err.response.data)
      })
    })
  }
  
  /**
  * @summary 修改当前账户的密码
  * @param {string} [OldPassword] 原来的密码
  * @param {string} [NewPassword] 新的密码
  */
  static async UpdatePassword(OldPassword,NewPassword){
    return await new Promise((resolve,reject)=>{
      axios({
        method:'put',
        url:'/api/user/password',
        data:{OldPassword,NewPassword},
        params:{},
        headers:{
          "Content-Type":"application/json"
        }
      })
      .then(res=>{
        resolve(res.data)
      }).catch(err=>{
        reject(err.response.data)
      })
    })
  }
  
  /**
  * @summary 发送当前用户邮箱验证码
  */
  static async VerifyUser(){
    return await new Promise((resolve,reject)=>{
      axios({
        method:'get',
        url:'/api/user/code',
        data:{},
        params:{},
        headers:{
          "Content-Type":""
        }
      })
      .then(res=>{
        resolve(res.data)
      }).catch(err=>{
        reject(err.response.data)
      })
    })
  }
  
  /**
  * @summary 设置新密码
  * @param {string} [NewPassword] 新的密码
  * @param {string} [Code] 验证码
  */
  static async SetUserPassword(NewPassword,Code){
    return await new Promise((resolve,reject)=>{
      axios({
        method:'put',
        url:'/api/user/newpassword',
        data:{NewPassword,Code},
        params:{},
        headers:{
          "Content-Type":"application/json"
        }
      })
      .then(res=>{
        resolve(res.data)
      }).catch(err=>{
        reject(err.response.data)
      })
    })
  }
  
  /**
  * @summary 忘记密码
  * @param {string} [Email] 
  */
  static async ForgetPasswordByEmail(Email){
    return await new Promise((resolve,reject)=>{
      axios({
        method:'get',
        url:'/api/user/'+Email+'/password',
        data:{},
        params:{},
        headers:{
          "Content-Type":""
        }
      })
      .then(res=>{
        resolve(res.data)
      }).catch(err=>{
        reject(err.response.data)
      })
    })
  }
  
  /**
  * @summary 修改密码
  * @param {string} [Email] 
  * @param {string} [NewPassword] 新的密码
  * @param {string} [Code] 验证码
  */
  static async UpdatePasswordByEmail(Email,NewPassword,Code){
    return await new Promise((resolve,reject)=>{
      axios({
        method:'put',
        url:'/api/user/'+Email+'/password',
        data:{NewPassword,Code},
        params:{},
        headers:{
          "Content-Type":"application/json"
        }
      })
      .then(res=>{
        resolve(res.data)
      }).catch(err=>{
        reject(err.response.data)
      })
    })
  }
}