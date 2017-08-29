var Reflux = require("reflux");
var updateHomeTimeline = require("./action").homeTimeline;
var co = require("co");
//var mtop = require('@ali/lib-mtop');
var sinaApi = require('./services');

function getData(maxId){
  let promise = new Promise(function(resolve,reject){
    sinaApi.home_timeline(maxId,function(r){
      resolve(r)
    },function(){
      reject(r)
    })
  })
  return promise
}

var homeTimeLineStore = Reflux.createStore({
  init(){
    this.listenTo(updateHomeTimeline,this.requestData)
  },
  loading:false,
  requestData(){
    let self = this;
    if(!self.loading){
      co(function* () {
        self.loading = true;
        let data = yield getData(self.maxId);
        self.maxId = data.statuses[data.statuses.length -1].id ;
        self.successfulState(data);
        return data; // 这里的返回值成为 co 返回 Promise 的then方法参数
      }).then(function (value) {
        self.loading = false;
        //console.log(`result data :  ${value}`)
      }).catch(function (err) {
        self.loading = false;
        console.error(err.stack);
        self.failedState(err)
      })
    }
  },
  maxId:0,
  homeTimelineList:[],
  successfulState(data){
    this.homeTimelineList = this.homeTimelineList.concat(data.statuses);
    let stateList = this.homeTimelineList;
    this.trigger(stateList)
  },
  failedState(err){
    console.log("error")
  }
})

//
//var categoryStore = Reflux.createStore({
//  init(){
//    this.listenTo(updateHomeTimeline,this.requestMtop)
//  },
//  requestMtop(){
//    let self = this
//    co(function* () {
//      let data = yield getData()
//      self.successfulState(data)
//      return data // 这里的返回值成为 co 返回 Promise 的then方法参数
//    }).then(function (value) {
//      console.log(`result data :  ${value}`)
//    }).catch(function (err) {
//      console.error(err.stack)
//      self.failedState(err)
//    })
//  },
//  successfulState(data){
//    let categoryNameList = data.categorys.map((i) => i.name)
//    this.trigger({list:categoryNameList})
//  },
//  failedState(err){
//    this.trigger({list:null ,errMsg: err.message})
//  }
//})

module.exports = {
  homeTimeline:homeTimeLineStore
}