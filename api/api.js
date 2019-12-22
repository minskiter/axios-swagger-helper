import ax from 'axios'
import qs from 'qs'
let axios = ax.create()

axios.interceptors.request.use(
  config=>{
    if ((config.method==='post' || config.method==='put') 
    && config.headers['Content-Type'].includes('x-www-form-urlencoded')){
      config.data = qs.stringify(config.data)
    }
    return config
  },
  error=>{
    return Promise.reject(error)
  }
)

export class Blog {


/**
 * @summary 发帖
 * @param callback {function|null} 回调函数
 * @param id {string} 
 * @param title {string} 
 * @param contain {string} 
 * @param student {object} student
 * @param viewed {string} 
 * @param comment {string} 
 * @param publish_time {string} 
 * @param update_time {string} 
 * @param tag {number} 
 * @param comments {Array} 
 * @param commentCount {number} 
 * @returns Promise {}
 * @author Alever Lai
 */
static async SendBlog(id,title,contain,student,viewed,comment,publish_time,update_time,tag,comments,commentCount,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'post',
      url:'/Blog/SendBlog',
      data:{id,title,contain,student,viewed,comment,publish_time,update_time,tag,comments,commentCount,},
      params:{},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 


/**
 * @summary 获得帖子的数量
 * @param callback {function|null} 回调函数
 * @param tag {number} tag为类别
 * @returns Promise {}
 * @author Alever Lai
 */
static async GetBlogCount(tag,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'get',
      url:'/Blog/GetBlogCount',
      data:{tag,},
      params:{tag,},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 


/**
 * @summary 获取帖子详情
 * @param callback {function|null} 回调函数
 * @param id {string} blog的id
 * @returns Promise {}
 * @author Alever Lai
 */
static async GetBlog(id,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'get',
      url:'/Blog/GetBlog',
      data:{id,},
      params:{id,},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 


/**
 * @summary 删除我的帖子
 * @param callback {function|null} 回调函数
 * @param id {string} blog的id
 * @returns Promise {}
 * @author Alever Lai
 */
static async DeleteBlog(id,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'get',
      url:'/Blog/DeleteBlog',
      data:{id,},
      params:{id,},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 


/**
 * @summary 修改我的帖子
 * @param callback {function|null} 回调函数
 * @param id {string} blog的id
 * @param title {string} 标题
 * @param contain {string} 内容
 * @param tag {number} 类别
 * @returns Promise {}
 * @author Alever Lai
 */
static async ReviseBlog(id,title,contain,tag,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'post',
      url:'/Blog/ReviseBlog',
      data:{id,title,contain,tag,},
      params:{},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 


/**
 * @summary 获得我发布的贴子
 * @param callback {function|null} 回调函数
 * @param studentId {string} 学生Id
 * @param order {string} 排序方式0为降序,1为升序
 * @param pageNum {number} 页码
 * @param pageSize {number} 每页数量
 * @returns Promise {}
 * @author Alever Lai
 */
static async ListMyBlog(studentId,order,pageNum,pageSize,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'get',
      url:'/Blog/ListMyBlog',
      data:{studentId,order,pageNum,pageSize,},
      params:{studentId,order,pageNum,pageSize,},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 


/**
 * @summary 获得某帖子的评论列表
 * @param callback {function|null} 回调函数
 * @param blogId {number} blog的id
 * @param pageNum {number} 页码
 * @param pageSize {number} 每页数量
 * @param order {number} 序方式0为降序,1为升序
 * @returns Promise {}
 * @author Alever Lai
 */
static async ListComment(blogId,pageNum,pageSize,order,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'get',
      url:'/Blog/ListComment',
      data:{blogId,pageNum,pageSize,order,},
      params:{blogId,pageNum,pageSize,order,},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 


/**
 * @summary 
 * @param callback {function|null} 回调函数
 * @param tag {number} 
 * @param order {number} 
 * @param pageNum {number} 
 * @param pageSize {number} 
 * @returns Promise {}
 * @author Alever Lai
 */
static async ListBlog(tag,order,pageNum,pageSize,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'get',
      url:'/Blog/ListBlog',
      data:{tag,order,pageNum,pageSize,},
      params:{tag,order,pageNum,pageSize,},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 


/**
 * @summary 帖子被查看次数
 * @param callback {function|null} 回调函数
 * @param id {string} 
 * @returns Promise {}
 * @author Alever Lai
 */
static async Viewed(id,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'get',
      url:'/Blog/Viewed',
      data:{id,},
      params:{id,},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 


/**
 * @summary 评论或者回复
 * @param callback {function|null} 回调函数
 * @param id {string} 
 * @param contain {string} 
 * @param uid {string} 
 * @param blog {string} 
 * @param cid {string} 
 * @param touser {string} 
 * @param publish_time {string} 
 * @returns Promise {}
 * @author Alever Lai
 */
static async SendComment(id,contain,uid,blog,cid,touser,publish_time,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'post',
      url:'/Blog/SendComment',
      data:{id,contain,uid,blog,cid,touser,publish_time,},
      params:{},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 


/**
 * @summary 删除评论或回复
 * @param callback {function|null} 回调函数
 * @param id {string} 
 * @returns Promise {}
 * @author Alever Lai
 */
static async DeleteBlogComment(id,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'get',
      url:'/Blog/DeleteBlogComment',
      data:{id,},
      params:{id,},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 

}

export class Contest {


/**
 * @summary 添加比赛
 * @param callback {function|null} 回调函数
 * @param name {string} 
 * @param type {string} 
 * @param avatar {string} 
 * @param description {string} 
 * @returns Promise {}
 * @author Alever Lai
 */
static async AddContest(name,type,avatar,description,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'post',
      url:'/Contest/AddContest',
      data:{name,type,avatar,description,},
      params:{},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 


/**
 * @summary 修改比赛
 * @param callback {function|null} 回调函数
 * @param id {number} 
 * @param type {string} 
 * @param avatar {string} 
 * @param description {string} 
 * @returns Promise {}
 * @author Alever Lai
 */
static async ReviseContest(id,type,avatar,description,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'post',
      url:'/Contest/ReviseContest',
      data:{id,type,avatar,description,},
      params:{},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 


/**
 * @summary 批量删除比赛
 * @param callback {function|null} 回调函数
 * @param idList {Array} 
 * @returns Promise {}
 * @author Alever Lai
 */
static async DeleteContestList(idList,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'post',
      url:'/Contest/DeleteContestList',
      data:{idList,},
      params:{},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 


/**
 * @summary 删除比赛
 * @param callback {function|null} 回调函数
 * @param id {number} 
 * @returns Promise {}
 * @author Alever Lai
 */
static async DeleteContest(id,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'get',
      url:'/Contest/DeleteContest',
      data:{id,},
      params:{id,},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 


/**
 * @summary 获取所有比赛
 * @param callback {function|null} 回调函数
 * @returns Promise {}
 * @author Alever Lai
 */
static async ListContest(callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'get',
      url:'/Contest/ListContest',
      data:{},
      params:{},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 


/**
 * @summary 添加比赛属性
 * @param callback {function|null} 回调函数
 * @param name {string} 
 * @param description {string} 
 * @returns Promise {}
 * @author Alever Lai
 */
static async AddContestProperty(name,description,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'post',
      url:'/Contest/AddContestProperty',
      data:{name,description,},
      params:{},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 


/**
 * @summary 删除比赛属性
 * @param callback {function|null} 回调函数
 * @param name {string} 
 * @returns Promise {}
 * @author Alever Lai
 */
static async DeleteContestProperty(name,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'get',
      url:'/Contest/DeleteContestProperty',
      data:{name,},
      params:{name,},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 


/**
 * @summary 修改比赛属性
 * @param callback {function|null} 回调函数
 * @param name {string} 
 * @param description {string} 
 * @returns Promise {}
 * @author Alever Lai
 */
static async ReviseContestProperty(name,description,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'post',
      url:'/Contest/ReviseContestProperty',
      data:{name,description,},
      params:{},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 


/**
 * @summary 获取所有比赛属性
 * @param callback {function|null} 回调函数
 * @returns Promise {}
 * @author Alever Lai
 */
static async ListContestProperties(callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'get',
      url:'/Contest/ListContestProperties',
      data:{},
      params:{},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 


/**
 * @summary 设置比赛权限
 * @param callback {function|null} 回调函数
 * @param cid {number} 
 * @param pids {Array} 
 * @param statuses {Array} 
 * @param starts {Array} 
 * @param ends {Array} 
 * @returns Promise {}
 * @author Alever Lai
 */
static async SetContestPermission(cid,pids,statuses,starts,ends,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'post',
      url:'/Contest/SetContestPermission',
      data:{cid,pids,statuses,starts,ends,},
      params:{},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 


/**
 * @summary 获取一个比赛具体信息
 * @param callback {function|null} 回调函数
 * @param id {string} 
 * @returns Promise {}
 * @author Alever Lai
 */
static async GetContestInfo(id,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'get',
      url:'/Contest/GetContestInfo',
      data:{id,},
      params:{id,},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 


/**
 * @summary 报名比赛
 * @param callback {function|null} 回调函数
 * @param cid {number} 
 * @param teamName {string} 
 * @param worksName {string} 
 * @param teacher {string} 
 * @param topic {string} 
 * @param snoes {Array} 
 * @param members {Array} 
 * @returns Promise {}
 * @author Alever Lai
 */
static async Apply(cid,teamName,worksName,teacher,topic,snoes,members,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'post',
      url:'/Contest/Apply',
      data:{cid,teamName,worksName,teacher,topic,snoes,members,},
      params:{},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 


/**
 * @summary 获取当前用户比赛报名信息
 * @param callback {function|null} 回调函数
 * @returns Promise {}
 * @author Alever Lai
 */
static async GetApplyInfo(callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'get',
      url:'/Contest/GetApplyInfo',
      data:{},
      params:{},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 


/**
 * @summary 获取报名了一个比赛的报名表
 * @param callback {function|null} 回调函数
 * @param cid {string} 
 * @returns Promise {}
 * @author Alever Lai
 */
static async ListAppliesInfo(cid,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'get',
      url:'/Contest/ListAppliesInfo',
      data:{cid,},
      params:{cid,},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 


/**
 * @summary 获取报名了一个比赛的用户列表
 * @param callback {function|null} 回调函数
 * @param cid {number} 
 * @returns Promise {}
 * @author Alever Lai
 */
static async ListUserApply(cid,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'get',
      url:'/Contest/ListUserApply',
      data:{cid,},
      params:{cid,},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 


/**
 * @summary 删除报名信息
 * @param callback {function|null} 回调函数
 * @param id {string} 
 * @returns Promise {}
 * @author Alever Lai
 */
static async DeleteApply(id,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'get',
      url:'/Contest/DeleteApply',
      data:{id,},
      params:{id,},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 


/**
 * @summary 批量删除报名
 * @param callback {function|null} 回调函数
 * @param idList {Array} 
 * @returns Promise {}
 * @author Alever Lai
 */
static async DeleteApplyList(idList,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'post',
      url:'/Contest/DeleteApplyList',
      data:{idList,},
      params:{},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 


/**
 * @summary 发送邮件通知
 * @param callback {function|null} 回调函数
 * @param title {string} 
 * @param contain {string} 
 * @param idList {Array} 
 * @returns Promise {}
 * @author Alever Lai
 */
static async SendNotice(title,contain,idList,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'post',
      url:'/Contest/SendNotice',
      data:{title,contain,idList,},
      params:{},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 


/**
 * @summary 导出比赛报名表
 * @param callback {function|null} 回调函数
 * @param idList {Array} 
 * @returns Promise {}
 * @author Alever Lai
 */
static async ExcelApplyInfo(idList,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'post',
      url:'/Contest/ExcelApplyInfo',
      data:{idList,},
      params:{},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 

}

export class Login {


/**
 * @summary 注册
 * @param callback {function|null} 回调函数
 * @param id {string} 
 * @param name {string} 
 * @param nickname {string} 
 * @param pwd {string} 
 * @param avatar {string} 
 * @param gender {string} 
 * @param email {string} 
 * @param mobile {string} 
 * @param apply_time {string} 
 * @param process {string} 
 * @param qq {string} 
 * @param code {string} 验证码
 * @returns Promise {}
 * @author Alever Lai
 */
static async Apply(id,name,nickname,pwd,avatar,gender,email,mobile,apply_time,process,qq,code,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'post',
      url:'/Login/Apply',
      data:{id,name,nickname,pwd,avatar,gender,email,mobile,apply_time,process,qq,code,},
      params:{},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 


/**
 * @summary 注册获取验证码
 * @param callback {function|null} 回调函数
 * @param email {string} 邮箱
 * @returns Promise {}
 * @author Alever Lai
 */
static async GetCode(email,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'get',
      url:'/Login/GetCode',
      data:{email,},
      params:{email,},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 


/**
 * @summary 登录
 * @param callback {function|null} 回调函数
 * @param id {string} 用户名
 * @param pwd {string} 密码
 * @returns Promise {}
 * @author Alever Lai
 */
static async Login(id,pwd,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'post',
      url:'/Login/Login',
      data:{id,pwd,},
      params:{},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 


/**
 * @summary Token登陆API
 * @param callback {function|null} 回调函数
 * @param id {string} 用户名/邮箱
 * @param pwd {string} 密码
 * @returns Promise {}
 * @author Alever Lai
 */
static async TokenLogin(id,pwd,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'post',
      url:'/Login/TokenLogin',
      data:{id,pwd,},
      params:{},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 


/**
 * @summary 服务外包与软件设计实验室RSA公钥///请勿在任何场合对外公开私钥///
 * @param callback {function|null} 回调函数
 * @returns Promise {}
 * @author Alever Lai
 */
static async SOSDPublicKey(callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'get',
      url:'/Login/SOSDPublicKey',
      data:{},
      params:{},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 


/**
 * @summary 请求开放式登录验证///
 * @param callback {function|null} 回调函数
 * @param client_id {string} 内网后端返回这次内网登录的client_id
 * @returns Promise {}
 * @author Alever Lai
 */
static async GetOAuthLogin(client_id,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'get',
      url:'/Login/GetOAuthLogin',
      data:{client_id,},
      params:{client_id,},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 


/**
 * @summary 回传请求开放式登录///此接口在本网站执行并会自动重定向至目标网站///
 * @param callback {function|null} 回调函数
 * @param id {string} 
 * @param pwd {string} 
 * @returns Promise {}
 * @author Alever Lai
 */
static async ResponseOAuthLogin(id,pwd,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'post',
      url:'/Login/ResponseOAuthLogin',
      data:{id,pwd,},
      params:{},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 

}

export class Member {


/**
 * @summary 加入实验室
 * @param callback {function|null} 回调函数
 * @param id {string} 
 * @param uid {string} 
 * @param dir1 {string} 
 * @param dir2 {string} 
 * @param adjust {string} 
 * @param introduction {string} 
 * @param works {string} 
 * @param applicate_time {string} 
 * @param student {object} student
 * @returns Promise {}
 * @author Alever Lai
 */
static async JoinLab(id,uid,dir1,dir2,adjust,introduction,works,applicate_time,student,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'post',
      url:'/Member/JoinLab',
      data:{id,uid,dir1,dir2,adjust,introduction,works,applicate_time,student,},
      params:{},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 


/**
 * @summary 修改纳新信息
 * @param callback {function|null} 回调函数
 * @param id {string} 
 * @param uid {string} 
 * @param dir1 {string} 
 * @param dir2 {string} 
 * @param adjust {string} 
 * @param introduction {string} 
 * @param works {string} 
 * @param applicate_time {string} 
 * @param student {object} student
 * @returns Promise {}
 * @author Alever Lai
 */
static async ReviseApplyInfo(id,uid,dir1,dir2,adjust,introduction,works,applicate_time,student,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'post',
      url:'/Member/ReviseApplyInfo',
      data:{id,uid,dir1,dir2,adjust,introduction,works,applicate_time,student,},
      params:{},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 


/**
 * @summary 获取当前用户的纳新信息
 * @param callback {function|null} 回调函数
 * @returns Promise {}
 * @author Alever Lai
 */
static async GetApplyInfo(callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'get',
      url:'/Member/GetApplyInfo',
      data:{},
      params:{},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 


/**
 * @summary 获取实验室分组
 * @param callback {function|null} 回调函数
 * @returns Promise {}
 * @author Alever Lai
 */
static async GetGroups(callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'get',
      url:'/Member/GetGroups',
      data:{},
      params:{},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 


/**
 * @summary 添加实验室成员
 * @param callback {function|null} 回调函数
 * @param id {string} 
 * @param avatar {string} 
 * @param name {string} 
 * @param grade {string} 
 * @param major {string} 
 * @param groupType {string} 
 * @param tour {Array} 
 * @param motto {string} 
 * @param introduction {string} 
 * @param toWhere {string} 
 * @returns Promise {}
 * @author Alever Lai
 */
static async AddMember(id,avatar,name,grade,major,groupType,tour,motto,introduction,toWhere,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'post',
      url:'/Member/AddMember',
      data:{id,avatar,name,grade,major,groupType,tour,motto,introduction,toWhere,},
      params:{},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 


/**
 * @summary 删除实验室成员
 * @param callback {function|null} 回调函数
 * @param id {string} 
 * @returns Promise {}
 * @author Alever Lai
 */
static async DeleteMember(id,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'get',
      url:'/Member/DeleteMember',
      data:{id,},
      params:{id,},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 


/**
 * @summary 修改实验室成员信息
 * @param callback {function|null} 回调函数
 * @param id {string} 
 * @param avatar {string} 
 * @param name {string} 
 * @param grade {string} 
 * @param major {string} 
 * @param groupType {string} 
 * @param tour {Array} 
 * @param motto {string} 
 * @param introduction {string} 
 * @param toWhere {string} 
 * @returns Promise {}
 * @author Alever Lai
 */
static async ReviseMember(id,avatar,name,grade,major,groupType,tour,motto,introduction,toWhere,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'post',
      url:'/Member/ReviseMember',
      data:{id,avatar,name,grade,major,groupType,tour,motto,introduction,toWhere,},
      params:{},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 


/**
 * @summary 修改权限
 * @param callback {function|null} 回调函数
 * @param id {string} 
 * @param prop {string} 
 * @returns Promise {}
 * @author Alever Lai
 */
static async Authority(id,prop,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'post',
      url:'/Member/Authority',
      data:{id,prop,},
      params:{},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 


/**
 * @summary 添加老师
 * @param callback {function|null} 回调函数
 * @param id {string} 
 * @param avatar {string} 
 * @param name {string} 
 * @param introduction {string} 
 * @param publish_time {string} 
 * @returns Promise {}
 * @author Alever Lai
 */
static async AddTeacher(id,avatar,name,introduction,publish_time,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'post',
      url:'/Member/AddTeacher',
      data:{id,avatar,name,introduction,publish_time,},
      params:{},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 


/**
 * @summary 删除老师
 * @param callback {function|null} 回调函数
 * @param id {string} 
 * @returns Promise {}
 * @author Alever Lai
 */
static async DeleteTeacher(id,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'get',
      url:'/Member/DeleteTeacher',
      data:{id,},
      params:{id,},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 


/**
 * @summary 修改老师信息
 * @param callback {function|null} 回调函数
 * @param id {string} 
 * @param avatar {string} 
 * @param name {string} 
 * @param introduction {string} 
 * @param publish_time {string} 
 * @returns Promise {}
 * @author Alever Lai
 */
static async ReviseTeacher(id,avatar,name,introduction,publish_time,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'post',
      url:'/Member/ReviseTeacher',
      data:{id,avatar,name,introduction,publish_time,},
      params:{},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 


/**
 * @summary 获取实验室所有成员
 * @param callback {function|null} 回调函数
 * @returns Promise {}
 * @author Alever Lai
 */
static async ListMember(callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'get',
      url:'/Member/ListMember',
      data:{},
      params:{},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 


/**
 * @summary 获取实验老师列表
 * @param callback {function|null} 回调函数
 * @returns Promise {}
 * @author Alever Lai
 */
static async ListTeacher(callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'get',
      url:'/Member/ListTeacher',
      data:{},
      params:{},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 


/**
 * @summary 批量删除纳新信息
 * @param callback {function|null} 回调函数
 * @param idList {Array} 
 * @returns Promise {}
 * @author Alever Lai
 */
static async DeleteApplyPersonList(idList,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'post',
      url:'/Member/DeleteApplyPersonList',
      data:{idList,},
      params:{},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 


/**
 * @summary 批量删除成员信息
 * @param callback {function|null} 回调函数
 * @param idList {Array} 
 * @returns Promise {}
 * @author Alever Lai
 */
static async DeleteMemberList(idList,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'post',
      url:'/Member/DeleteMemberList',
      data:{idList,},
      params:{},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 


/**
 * @summary 获取纳新报名列表
 * @param callback {function|null} 回调函数
 * @returns Promise {}
 * @author Alever Lai
 */
static async ListApplyPerson(callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'get',
      url:'/Member/ListApplyPerson',
      data:{},
      params:{},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 


/**
 * @summary 导出纳新报名表
 * @param callback {function|null} 回调函数
 * @param idList {Array} 
 * @returns Promise {}
 * @author Alever Lai
 */
static async ExcelApplyInfo(idList,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'post',
      url:'/Member/ExcelApplyInfo',
      data:{idList,},
      params:{},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 


/**
 * @summary 发送邮件通知
 * @param callback {function|null} 回调函数
 * @param title {string} 
 * @param contain {string} 
 * @param idList {Array} 
 * @returns Promise {}
 * @author Alever Lai
 */
static async SendNotice(title,contain,idList,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'post',
      url:'/Member/SendNotice',
      data:{title,contain,idList,},
      params:{},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 

}

export class Test {


/**
 * @summary 
 * @param callback {function|null} 回调函数
 * @returns Promise {}
 * @author Alever Lai
 */
static async GetIP(callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'get',
      url:'/api/Test',
      data:{},
      params:{},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 

}

export class User {


/**
 * @summary 修改密码
 * @param callback {function|null} 回调函数
 * @param p_old {string} 旧密码
 * @param p_new {string} 新密码
 * @returns Promise {}
 * @author Alever Lai
 */
static async ChangePassword(p_old,p_new,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'post',
      url:'/User/ChangePassword',
      data:{p_old,p_new,},
      params:{},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 


/**
 * @summary 忘记密码获取验证码
 * @param callback {function|null} 回调函数
 * @param email {string} 邮箱
 * @returns Promise {}
 * @author Alever Lai
 */
static async GetCode(email,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'get',
      url:'/User/GetCode',
      data:{email,},
      params:{email,},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 


/**
 * @summary 忘记密码
 * @param callback {function|null} 回调函数
 * @param email {string} 邮箱
 * @param p_new {string} 新密码
 * @param code {string} 
 * @returns Promise {}
 * @author Alever Lai
 */
static async ForgetPassword(email,p_new,code,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'post',
      url:'/User/ForgetPassword',
      data:{email,p_new,code,},
      params:{},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 


/**
 * @summary 设置用户信息
 * @param callback {function|null} 回调函数
 * @param sno {string} 
 * @param major {string} 
 * @param id {string} 
 * @param name {string} 
 * @param nickname {string} 
 * @param pwd {string} 
 * @param avatar {string} 
 * @param gender {string} 
 * @param email {string} 
 * @param mobile {string} 
 * @param apply_time {string} 
 * @param process {string} 
 * @param qq {string} 
 * @returns Promise {}
 * @author Alever Lai
 */
static async SetUserInfo(sno,major,id,name,nickname,pwd,avatar,gender,email,mobile,apply_time,process,qq,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'post',
      url:'/User/SetUserInfo',
      data:{sno,major,id,name,nickname,pwd,avatar,gender,email,mobile,apply_time,process,qq,},
      params:{},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 


/**
 * @summary 获取个人报名信息///
 * @param callback {function|null} 回调函数
 * @returns Promise {}
 * @author Alever Lai
 */
static async GetMyJoinInfo(callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'get',
      url:'/User/myjoininfo',
      data:{},
      params:{},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 


/**
 * @summary 获取用户信息
 * @param callback {function|null} 回调函数
 * @returns Promise {}
 * @author Alever Lai
 */
static async GetUserInfo(callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'get',
      url:'/User/GetUserInfo',
      data:{},
      params:{},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 


/**
 * @summary 获取头像
 * @param callback {function|null} 回调函数
 * @returns Promise {text/plain,application/json,text/json}
 * @author Alever Lai
 */
static async GetAvatar(callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'get',
      url:'/User/GetAvatar',
      data:{},
      params:{},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 


/**
 * @summary 根据id获取用户头像///
 * @param callback {function|null} 回调函数
 * @param id {string} 
 * @returns Promise {text/plain,application/json,text/json}
 * @author Alever Lai
 */
static async GetAvatarById(id,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'get',
      url:'/User/GetAvatarById',
      data:{id,},
      params:{id,},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 


/**
 * @summary 修改头像
 * @param callback {function|null} 回调函数
 * @param avatar {string} 头像文件
 * @returns Promise {}
 * @author Alever Lai
 */
static async ChangeAvatar(avatar,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'post',
      url:'/User/ChangeAvatar',
      data:{avatar,},
      params:{},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 


/**
 * @summary 设置邮箱
 * @param callback {function|null} 回调函数
 * @param email {string} 邮箱
 * @returns Promise {}
 * @author Alever Lai
 */
static async SetEmail(email,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'post',
      url:'/User/SetEmail',
      data:{email,},
      params:{},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 


/**
 * @summary 设置手机
 * @param callback {function|null} 回调函数
 * @param mobile {string} 手机
 * @returns Promise {}
 * @author Alever Lai
 */
static async SetMobile(mobile,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'post',
      url:'/User/SetMobile',
      data:{mobile,},
      params:{},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 


/**
 * @summary 获取用户角色
 * @param callback {function|null} 回调函数
 * @returns Promise {}
 * @author Alever Lai
 */
static async GetUserRole(callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'get',
      url:'/User/GetUserRole',
      data:{},
      params:{},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 


/**
 * @summary 登出
 * @param callback {function|null} 回调函数
 * @returns Promise {}
 * @author Alever Lai
 */
static async Logout(callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'get',
      url:'/User/Logout',
      data:{},
      params:{},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 


/**
 * @summary 获取全局用户信息
 * @param callback {function|null} 回调函数
 * @returns Promise {}
 * @author Alever Lai
 */
static async ListUser(callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'get',
      url:'/User/ListUser',
      data:{},
      params:{},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 


/**
 * @summary 获取用户权限
 * @param callback {function|null} 回调函数
 * @param id {string} 
 * @returns Promise {}
 * @author Alever Lai
 */
static async GetAuth(id,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'get',
      url:'/User/GetAuth',
      data:{id,},
      params:{id,},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 


/**
 * @summary 通过id获取用户信息
 * @param callback {function|null} 回调函数
 * @param id {string} 
 * @returns Promise {}
 * @author Alever Lai
 */
static async GetUserInfoOAuth(id,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'get',
      url:'/User/GetUserInfoOAuth',
      data:{id,},
      params:{id,},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 


/**
 * @summary 导入EXCEL,返回用户的列表
 * @param callback {function|null} 回调函数
 * @param file {File} 
 * @returns Promise {}
 * @author Alever Lai
 */
static async ImportUserList(file,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'post',
      url:'/User/ImportUserList',
      data:{file,},
      params:{},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 


/**
 * @summary 
 * @param callback {function|null} 回调函数
 * @param id {string} 
 * @param name {string} 
 * @param nickname {string} 
 * @param pwd {string} 
 * @param avatar {string} 
 * @param gender {string} 
 * @param email {string} 
 * @param mobile {string} 
 * @param apply_time {string} 
 * @param process {string} 
 * @param qq {string} 
 * @param type {string} 
 * @returns Promise {}
 * @author Alever Lai
 */
static async addUser(id,name,nickname,pwd,avatar,gender,email,mobile,apply_time,process,qq,type,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'post',
      url:'/User/addUser',
      data:{id,name,nickname,pwd,avatar,gender,email,mobile,apply_time,process,qq,type,},
      params:{},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 

}

export class Works {


/**
 * @summary 添加作品
 * @param callback {function|null} 回调函数
 * @param id {string} 
 * @param time {string} 
 * @param place {string} 
 * @param worksName {string} 
 * @param award {string} 
 * @param teamName {string} 
 * @param members {Array} 
 * @param avatar1 {string} 
 * @param avatar2 {string} 
 * @param type {string} 
 * @returns Promise {}
 * @author Alever Lai
 */
static async AddWorks(id,time,place,worksName,award,teamName,members,avatar1,avatar2,type,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'post',
      url:'/Works/AddWorks',
      data:{id,time,place,worksName,award,teamName,members,avatar1,avatar2,type,},
      params:{},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 


/**
 * @summary 删除作品
 * @param callback {function|null} 回调函数
 * @param id {string} 
 * @returns Promise {}
 * @author Alever Lai
 */
static async DeleteWorks(id,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'get',
      url:'/Works/DeleteWorks',
      data:{id,},
      params:{id,},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 


/**
 * @summary 修改作品
 * @param callback {function|null} 回调函数
 * @param id {string} 
 * @param time {string} 
 * @param place {string} 
 * @param worksName {string} 
 * @param award {string} 
 * @param teamName {string} 
 * @param members {Array} 
 * @param avatar1 {string} 
 * @param avatar2 {string} 
 * @param type {string} 
 * @returns Promise {}
 * @author Alever Lai
 */
static async ReviseWorks(id,time,place,worksName,award,teamName,members,avatar1,avatar2,type,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'post',
      url:'/Works/ReviseWorks',
      data:{id,time,place,worksName,award,teamName,members,avatar1,avatar2,type,},
      params:{},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 


/**
 * @summary 获取所有作品
 * @param callback {function|null} 回调函数
 * @returns Promise {}
 * @author Alever Lai
 */
static async ListWorks(callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'get',
      url:'/Works/ListWorks',
      data:{},
      params:{},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 


/**
 * @summary 批量删除作品
 * @param callback {function|null} 回调函数
 * @param idList {Array} 
 * @returns Promise {}
 * @author Alever Lai
 */
static async DeleteWorksList(idList,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'post',
      url:'/Works/DeleteWorksList',
      data:{idList,},
      params:{},
      headers:{
        "Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"
      }
    })
    .then(res=>{
      resolve(res.data)
      if (callback!=null){
        callback(res.data)
      }
    }).catch(err=>{
      reject(err)
    })
  })
}
 

}

