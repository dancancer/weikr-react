var Reflux = require("reflux")
var updateCategory = require("./action").category
var co = require("co")
var mtop = require('@ali/lib-mtop')

function getData(){
  let promise = new Promise(function(resolve,reject){
    let apiParam = {
      "api": "mtop.need.search.category",
      "v" : "1.0",
      "data": `{}`
    }
    let p = mtop.request(apiParam)
    p.then(function(mtopRes){
      if (mtopRes.retType == mtop.RESPONSE_TYPE.SUCCESS){
        resolve(mtopRes.data)
      }else{
        reject( new Error("接口错误222(search.category)"))
      }
    }).catch(function(error){
      reject( new Error("网络错误222(search.category)"))
    })
  })
  return promise
}


var categoryStore = Reflux.createStore({
  init(){
    this.listenTo(updateCategory,this.requestMtop)
  },
  requestMtop(){
    let self = this
    co(function* () {
      let data = yield getData()
      self.successfulState(data)
      return data // 这里的返回值成为 co 返回 Promise 的then方法参数
    }).then(function (value) {
      console.log(`result data :  ${value}`)
    }).catch(function (err) {
      console.error(err.stack)      
      self.failedState(err)
    })   
  },
  successfulState(data){
    let categoryNameList = data.categorys.map((i) => i.name)    
    this.trigger({list:categoryNameList})
  },
  failedState(err){
    this.trigger({list:null ,errMsg: err.message})
  }
})

module.exports = {
  category: categoryStore
}