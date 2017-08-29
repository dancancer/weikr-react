'use strict';
/* Controllers */
angular.module('myApp.controllers', [])
    .controller('optionCtrl',['$scope','$http','sinaApi',function($scope,$http,sinaApi) {
        $scope.appid = "";
        $scope.access_token = localStorage.access_token;
        $scope.uid=localStorage.uid;
        $scope.oAuthPath = "";
        $scope.user=[];
        $scope.maxid=null;
        $scope.isloading = false;
        $scope.timeline = new Array();
        $scope.authorize = function(){
            localStorage.timeline = [];
            localStorage.scrollTop = 0;
            localStorage.maxid = null;
            localStorage.access_token = null;
            localStorage.uid = null;
            $scope.oAuthPath = 'https://api.weibo.com/oauth2/authorize?client_id='+sinaApi.config.oauth_key+'&redirect_uri=https://api.weibo.com/oauth2/default.html&response_type=code';

            window.open($scope.oAuthPath);
        };

        $scope.newWindow = function(){
            function _get_open_window_args(width, height) {
                width = 520;
                height = 600;
                var left = (window.screen.availWidth - width) / 2;
                var win_args = {width: width, height: height, left: left, top: 30, toolbar: 'no', menubar: 'no', location: 'no', resizable: 'no', scrollbars: 'yes', status: 'yes'};
                var args_str = '';
                for (var k in win_args) {
                    args_str += k + '=' + win_args[k] + ',';
                }
                return args_str.substring(0, args_str.length - 1);
            }
            var url = 'longtxt.html';
            chrome.tabs.create({"url":url,"selected":true}, function(tab){
            });
//            window.open(url, '_blank', _get_open_window_args(600,600));
        }
        $scope.revokeoauth2 = function(){
            var param = '?access_token='+$scope.access_token;
            $http({method:'GET', url: 'https://api.weibo.com/oauth2/revokeoauth2'+param}).
                success(function(data, status) {
                    localStorage.access_token = null;
                    localStorage.uid = null;
                    $scope.user = null;
                    localStorage.user=null;
                    localStorage.timeline = null;
                    localStorage.scrollTop = 0;
                    localStorage.maxid = null;
                }).
                error(function(data, status) {
                });
        };
        chrome.tabs.onUpdated.addListener(
            function (tabId, changeInfo, tab) {
                if (changeInfo.status === 'loading' && tab.url.indexOf(sinaApi.config.oauth_callback + '?code=') === 0 ) {
                    var pin = tab.url;
                    if (pin.indexOf('=') > 0) {
                        pin = pin.substring(pin.indexOf('=')+1);
                    }
                    $scope.$apply($scope.appid = pin);;
                    chrome.tabs.remove(tabId);
                    $scope.gettoken();
                }
            }
        );
        $scope.gettoken = function(){
            var param = '&code='+$scope.appid;
            var path = 'https://api.weibo.com/oauth2/access_token?client_id='+sinaApi.config.oauth_key+
                '&client_secret='+sinaApi.config.oauth_secret+
                '&grant_type=authorization_code&redirect_uri=https://api.weibo.com/oauth2/default.html';
            $http({method:'POST',url: path+param}).
                success(function(data, status) {
                    $scope.$apply($scope.access_token = data.access_token);
                    $scope.$apply($scope.uid = data.uid);
                    localStorage.access_token = data.access_token;
                    localStorage.uid = data.uid;
                    localStorage.current_user_name = data.screen_name;
                    $scope.getuserinfo();
                }).
                error(function(data, status) {
                    $scope.data = data || "Request failed";
                    $scope.status = status;
                });
        };
        $scope.getuserinfo = function(uid){
            var param = '?access_token='+$scope.access_token+'&uid='+$scope.uid;
            $http({method:'GET', url: sinaApi.config.host+sinaApi.config.user_show+param}).
                success(function(data, status) {
                    $scope.user = [];
                    $scope.user.push(data);
                    localStorage.user = JSON.stringify($scope.user);
                }).
                error(function(data, status) {
                    $scope.data = data || "Request failed";
                    $scope.status = status;
                });
        };
        if($scope.access_token!=undefined&$scope.uid!=undefined){
            $scope.getuserinfo($scope.uid);
        }
    }]);


var Example = (function() {
    "use strict";
    var elem,
        hideHandler,
        that = {};
    that.init = function(options) {
        elem = options.selector;
    };
    that.show = function(text) {
        clearTimeout(hideHandler);
        $(elem).find("span").html(text);
        $(elem).delay(200).fadeIn().delay(3000).fadeOut();
    };
    return that;
}());
