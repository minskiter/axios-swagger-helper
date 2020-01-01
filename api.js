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

export class Daily {


/**
 * @summary 获取签到排名，按从大到小排序返回[user权限]
 * @param {function} [callback] 回调函数
 * @param {string} CurTime -   查询的时间
 * @param {string} range - ^(Month|Week)$  查询的范围/Week/Month
 * @returns {Promise} application/json
 * @author minskiter
 */
static async GetTopCheckIn(CurTime,range,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'get',
      url:'/Daily/GetTopCheckIn',
      data:{CurTime,range,},
      params:{CurTime,range,},
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
 * @summary 从excel表中导入签到数据[org权限]
 * @param {function} [callback] 回调函数
 * @param {File} file -   EXCEL文件,后缀名必须是xls或者xlsx
 * @returns {Promise} application/json
 * @author minskiter
 */
static async CheckInByExcel(file,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'post',
      url:'/Daily/CheckInByExcel',
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
 * @summary 添加新的值日记录[org权限]
 * @param {function} [callback] 回调函数
 * @param {number} uid -  1-9223372036854780000 用户的uid
 * @param {string} time -   值日的时间
 * @returns {Promise} application/json
 * @author minskiter
 */
static async NewAttendance(uid,time,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'post',
      url:'/Daily/NewAttendance',
      data:{uid,time,},
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
 * @summary 获取一周的值日表[user权限]
 * @param {function} [callback] 回调函数
 * @param {string} curTime -   当前的时间
 * @returns {Promise} application/json
 * @author minskiter
 */
static async GetAttendance(curTime,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'get',
      url:'/Daily/GetAttendance',
      data:{curTime,},
      params:{curTime,},
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
 * @summary 取消值日[org权限]
 * @param {function} [callback] 回调函数
 * @param {string} id -   值日的id
 * @returns {Promise} application/json
 * @author minskiter
 */
static async CancerAttendance(id,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'post',
      url:'/Daily/CancerAttendance',
      data:{id,},
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
 * @summary 工作位安排[org权限]
 * @param {function} [callback] 回调函数
 * @param {number} uid -  0-9223372036854780000 
 * @param {string} spacename -   
 * @returns {Promise} application/json
 * @author minskiter
 */
static async ArrangeWorkSpace(uid,spacename,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'post',
      url:'/Daily/ArrangeWorkSpace',
      data:{uid,spacename,},
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
 * @summary 取消工作位安排
 * @param {function} [callback] 回调函数
 * @param {string} spacename -   工作位的名称
 * @returns {Promise} application/json
 * @author minskiter
 */
static async CancerWorkSpace(spacename,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'post',
      url:'/Daily/CancerWorkSpace',
      data:{spacename,},
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
 * @summary 获取工作位安排[user权限]
 * @param {function} [callback] 回调函数
 * @returns {Promise} application/json
 * @author minskiter
 */
static async GetWorkSpace(callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'get',
      url:'/Daily/GetWorkSpace',
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
 * @summary 会议室预约[user权限]
 * @param {function} [callback] 回调函数
 * @param {string} starttime -   一天的开始时间
 * @param {string} endtime -   一天的结束时间
 * @param {string} dealline -   预约截至时间
 * @param {string} reason - ^.+$  会议室预约的用途
 * @param {number} [interval=1] - 预约间隔天数
 * @returns {Promise} application/json
 * @author minskiter
 */
static async ReserveMeeting(starttime,endtime,dealline,reason,interval,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'post',
      url:'/Daily/ReserveMeeting',
      data:{starttime,endtime,dealline,reason,interval,},
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
 * @summary 获取会议室预约记录[user权限]
 * @param {function} [callback] 回调函数
 * @param {string} startDay -   开始的时间
 * @param {string} endDay -   结束的时间
 * @param {number} [status] - 状态 0 为成功预约  1 为无效预约, 2 管理员同意的预约，3 为管理员拒绝的预约
 * @returns {Promise} application/json
 * @author minskiter
 */
static async GetMeeting(startDay,endDay,status,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'get',
      url:'/Daily/GetMeeting',
      data:{startDay,endDay,status,},
      params:{startDay,endDay,status,},
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
 * @summary 获取会议室记录[user权限]
 * @param {function} [callback] 回调函数
 * @param {string} term - ^2\d{3}0[1-2]{1}$  学期
 * @param {number} week -  1-28 周数
 * @param {number} [status] - 状态 0 为成功预约  1 为无效预约, 2 管理员同意的预约，3 为管理员拒绝的预约
 * @returns {Promise} application/json
 * @author minskiter
 */
static async GetMeetingByWeek(term,week,status,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'get',
      url:'/Daily/GetMeetingByWeek',
      data:{term,week,status,},
      params:{term,week,status,},
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
 * @summary 同意会议室预约[org权限]
 * @param {function} [callback] 回调函数
 * @param {number} id -  1-9223372036854780000 会议预约记录的ReserveID
 * @returns {Promise} application/json
 * @author minskiter
 */
static async AgreeMeetingReserve(id,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'post',
      url:'/Daily/AgreeMeetingReserve',
      data:{id,},
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
 * @summary 拒绝会议室预约[org权限]
 * @param {function} [callback] 回调函数
 * @param {number} id -  1-9223372036854780000 会议预约记录的ReserveID
 * @returns {Promise} application/json
 * @author minskiter
 */
static async RejectMeetingReserve(id,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'post',
      url:'/Daily/RejectMeetingReserve',
      data:{id,},
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
 * @summary 会议室预约的取消[user权限]
 * @param {function} [callback] 回调函数
 * @param {number} id -  1-9223372036854780000 会议室预约记录的ReserverID
 * @returns {Promise} application/json
 * @author minskiter
 */
static async CancerMeeting(id,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'post',
      url:'/Daily/CancerMeeting',
      data:{id,},
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
 * @summary 取消单个会议[user权限]
 * @param {function} [callback] 回调函数
 * @param {number} id -  1-9223372036854780000 单个会议的ID，注意这里不是ReserveID
 * @returns {Promise} application/json
 * @author minskiter
 */
static async CancerSingleMeeting(id,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'post',
      url:'/Daily/CancerSingleMeeting',
      data:{id,},
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
 * @summary 添加卫生记录(管理员添加)  (MANAGE)
 * @param {function} [callback] 回调函数
 * @param {number} uid -  1-2147483647 负责人
 * @param {string} term - ^2\d{3}0[1-2]{1}$  当前学期 201802
 * @param {number} week -  1-28 相对于当前学期的周数（int类型）
 * @returns {Promise} application/json
 * @author minskiter
 */
static async AddSweep(uid,term,week,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'post',
      url:'/Daily/AddSweep',
      data:{uid,term,week,},
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
 * @summary 根据学期查询卫生区安排
 * @param {function} [callback] 回调函数
 * @param {string} term - ^2\d{3}0[1-2]{1}$  
 * @returns {Promise} application/json
 * @author minskiter
 */
static async GetSweep(term,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'get',
      url:'/Daily/GetSweep',
      data:{term,},
      params:{term,},
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
 * @summary 根据eid删除卫生区值日记录（isvalid属性置为1）
 * @param {function} [callback] 回调函数
 * @param {number} eid -  1-9223372036854780000 
 * @returns {Promise} application/json
 * @author minskiter
 */
static async DeleteEvent(eid,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'post',
      url:'/Daily/DeleteEvent',
      data:{eid,},
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
 * @summary 添加一条请假记录        (USER)
 * @param {function} [callback] 回调函数
 * @param {string} begintime -   
 * @param {string} endtime -   
 * @param {string} reason -   请假理由
 * @returns {Promise} application/json
 * @author minskiter
 */
static async AskForLeave(begintime,endtime,reason,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'post',
      url:'/Daily/AskForLeave',
      data:{begintime,endtime,reason,},
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
 * @summary 管理员是否同意请假       (MANAGE)
 * @param {function} [callback] 回调函数
 * @param {number} eid -  0-9223372036854780000 
 * @param {number} isvalid -  0-3 2表示同意，3表示拒绝
 * @returns {Promise} application/json
 * @author minskiter
 */
static async Responses(eid,isvalid,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'post',
      url:'/Daily/Responses',
      data:{eid,isvalid,},
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
 * @summary 用户端取消请假
 * @param {function} [callback] 回调函数
 * @param {number} eid -  0-9223372036854780000 事件的id
 * @returns {Promise} application/json
 * @author minskiter
 */
static async CancerLeave(eid,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'post',
      url:'/Daily/CancerLeave',
      data:{eid,},
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
 * @summary 返回所有请假记录    (COMMON)
 * @param {function} [callback] 回调函数
 * @param {string} start -   
 * @param {string} end -   
 * @param {number} status -  0-3 
 * @returns {Promise} application/json
 * @author minskiter
 */
static async GetLeaves(start,end,status,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'get',
      url:'/Daily/GetLeaves',
      data:{start,end,status,},
      params:{start,end,status,},
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
 * @summary 请求外网登陆(暂时直接返回sign签名，将该sign复制到回应api就可以进行登陆)
 * @param {function} [callback] 回调函数
 * @returns {Promise} 
 * @author minskiter
 */
static async RequestOAuth(callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'get',
      url:'/Login/RequestOAuth',
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
 * @summary 回应开放接口[匿名权限]
 * @param {function} [callback] 回调函数
 * @param {string} id -   用户的id
 * @param {string} login_status -   登陆的状态
 * @param {string} access_key -   授权码
 * @param {string} is_student - ^(true|false)$  是否是学生
 * @param {string} is_head - ^(true|false)$  是否是教师
 * @param {string} is_org - ^(true|false)$  是否为管理员
 * @param {string} is_member - ^(true|false)$  
 * @returns {Promise} 
 * @author minskiter
 */
static async ResponseOAuth(id,login_status,access_key,is_student,is_head,is_org,is_member,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'post',
      url:'/Login/ResponseOAuth',
      data:{id,login_status,access_key,is_student,is_head,is_org,is_member,},
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
 * @summary 获取当前用户的角色[匿名权限]
 * @param {function} [callback] 回调函数
 * @returns {Promise} 
 * @author minskiter
 */
static async GetUserRole(callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'get',
      url:'/Login/GetUserRole',
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
 * @summary 获取当前用户外网的UID[匿名权限]
 * @param {function} [callback] 回调函数
 * @returns {Promise} 
 * @author minskiter
 */
static async GetUserUID(callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'get',
      url:'/Login/GetUserUID',
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
 * @summary 获取当前用户内网的ID[匿名权限]
 * @param {function} [callback] 回调函数
 * @returns {Promise} 
 * @author minskiter
 */
static async GetUserID(callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'get',
      url:'/Login/GetUserID',
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
 * @summary 添加新的用户[org权限]
 * @param {function} [callback] 回调函数
 * @param {string} name -   姓名
 * @param {string} no -   学号/工号
 * @param {string} [phone] - 手机号码
 * @returns {Promise} 
 * @author minskiter
 */
static async AddUser(name,no,phone,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'post',
      url:'/Login/AddUser',
      data:{name,no,phone,},
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
 * @summary 获取内网所有的用户
 * @param {function} [callback] 回调函数
 * @returns {Promise} 
 * @author minskiter
 */
static async GetAllUser(callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'get',
      url:'/Login/GetAllUser',
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

export class Utils {


/**
 * @summary 获取datetime对应的学期和周数[匿名权限]
 * @param {function} [callback] 回调函数
 * @param {string} datetime -   标准时间格式
 * @returns {Promise} application/json
 * @author minskiter
 */
static async GetTermAndWeeks(datetime,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'get',
      url:'/Utils/GetTermAndWeeks',
      data:{datetime,},
      params:{datetime,},
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
 * @summary 获取学期和周数对应的事件[匿名权限]
 * @param {function} [callback] 回调函数
 * @param {string} term - ^2\d{3}0[1-2]{1}$  学期
 * @param {number} week -  1-28 周数
 * @param {Boolean} [isStart=true] - 周的起始true或者结束false
 * @returns {Promise} application/json
 * @author minskiter
 */
static async GetDateTime(term,week,isStart,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'get',
      url:'/Utils/GetDateTime',
      data:{term,week,isStart,},
      params:{term,week,isStart,},
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
 * @summary 获取校历的所有学期[匿名权限]
 * @param {function} [callback] 回调函数
 * @returns {Promise} application/json
 * @author minskiter
 */
static async GetAllTerm(callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'get',
      url:'/Utils/GetAllTerm',
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
 * @summary 获取当前学期的周数[匿名权限]
 * @param {function} [callback] 回调函数
 * @param {string} term - ^2\d{3}0[1-2]{1}$  学期
 * @returns {Promise} application/json
 * @author minskiter
 */
static async GetAllWeek(term,callback){
  return await new Promise((resolve,reject)=>{
    axios({
      method:'get',
      url:'/Utils/GetAllWeek',
      data:{term,},
      params:{term,},
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
