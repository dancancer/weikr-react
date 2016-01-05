/**
 * Created by xupeng on 15/12/11.
 */
var React = require('react');
var ReactDom = require('react-dom');

var categoryStore = require("./store").category;
var categoryUpdate = require("./action").category;

var Header = require('./header');
var Item = require('./item');

var Main = React.createClass({
    getInitialState(){
        return  {list:["love","peace","bluesky"]}
    },
    onStatusChange(storeState){
        this.setState(storeState)
    },
    componentDidMount(){
        this.unsubscribe = categoryStore.listen(this.onStatusChange);
    },
    componentWillUnmount() {
        this.unsubscribe();
    },
    handleClick(){
        categoryUpdate()
    },
    render(){
        let itemData = {
            "created_at": "Thu Dec 31 12:07:43 +0800 2015",
            "id": 3926084133511432,
            "mid": "3926084133511432",
            "idstr": "3926084133511432",
            "text": "丽格秋海棠，汁液有毒，适宜放在室内，别吃就行",
            "source_allowclick": 0,
            "source_type": 1,
            "source": "<a href=\"http://app.weibo.com/t/feed/4JpANe\" rel=\"nofollow\">微博搜索</a>",
            "favorited": false,
            "truncated": false,
            "in_reply_to_status_id": "",
            "in_reply_to_user_id": "",
            "in_reply_to_screen_name": "",
            "pic_urls": [],
            "geo": null,
            "user": {
                "id": 1195054531,
                "idstr": "1195054531",
                "class": 1,
                "screen_name": "博物杂志",
                "name": "博物杂志",
                "province": "11",
                "city": "5",
                "location": "北京 朝阳区",
                "description": "我是一本博物学科普杂志，订阅杂志请去淘宝网搜索“中国国家地理旗舰店”",
                "url": "http://blog.sina.com.cn/bowu",
                "profile_image_url": "http://tp4.sinaimg.cn/1195054531/50/5736491132/1",
                "cover_image": "http://ww1.sinaimg.cn/crop.1.0.980.300/473b15c3jw1e6pxyi46ndj20r908c7au.jpg",
                "cover_image_phone": "http://ww3.sinaimg.cn/crop.0.0.640.640.640/6ce2240djw1e9oao0dwofj20hs0hsjxc.jpg",
                "profile_url": "bowu",
                "domain": "bowu",
                "weihao": "",
                "gender": "m",
                "followers_count": 2268905,
                "friends_count": 113,
                "pagefriends_count": 1,
                "statuses_count": 6788,
                "favourites_count": 1277,
                "created_at": "Fri Aug 28 16:14:52 +0800 2009",
                "following": true,
                "allow_all_act_msg": true,
                "geo_enabled": true,
                "verified": true,
                "verified_type": 3,
                "remark": "",
                "ptype": 0,
                "allow_all_comment": true,
                "avatar_large": "http://tp4.sinaimg.cn/1195054531/180/5736491132/1",
                "avatar_hd": "http://ww4.sinaimg.cn/crop.0.0.180.180.1024/473b15c3jw8evsr8qo07sj2050050wey.jpg",
                "verified_reason": "博物杂志官方微博",
                "verified_trade": "",
                "verified_reason_url": "",
                "verified_source": "",
                "verified_source_url": "",
                "verified_state": 0,
                "verified_level": 3,
                "verified_reason_modified": "",
                "verified_contact_name": "",
                "verified_contact_email": "",
                "verified_contact_mobile": "",
                "follow_me": false,
                "online_status": 0,
                "bi_followers_count": 100,
                "lang": "zh-cn",
                "star": 0,
                "mbtype": 12,
                "mbrank": 3,
                "block_word": 0,
                "block_app": 1,
                "credit_score": 80,
                "user_ability": 4,
                "cardid": "star_710",
                "urank": 29
            },
            "retweeted_status": {
                "created_at": "Thu Dec 31 09:03:00 +0800 2015",
                "id": 3926037651733684,
                "mid": "3926037651733684",
                "idstr": "3926037651733684",
                "text": "@博物杂志 卖花的说这是仙客来，朋友说这是海棠，不适宜放室内养。请博物君品鉴一下下！下下！下！！[嘻嘻]",
                "textLength": 100,
                "source_allowclick": 0,
                "source_type": 1,
                "source": "<a href=\"http://app.weibo.com/t/feed/3G5oUM\" rel=\"nofollow\">iPhone 5s</a>",
                "favorited": false,
                "truncated": false,
                "in_reply_to_status_id": "",
                "in_reply_to_user_id": "",
                "in_reply_to_screen_name": "",
                "pic_urls": [
                    {
                        "thumbnail_pic": "http://ww3.sinaimg.cn/thumbnail/6906a75cjw1ezik8wxrqpj21w02iohdu.jpg",
                        "$$hashKey": "1BH"
                    },
                    {
                        "thumbnail_pic": "http://ww1.sinaimg.cn/thumbnail/6906a75cjw1ezikahxvkjj21w02iohdu.jpg",
                        "$$hashKey": "1BI"
                    }
                ],
                "thumbnail_pic": "http://ww3.sinaimg.cn/thumbnail/6906a75cjw1ezik8wxrqpj21w02iohdu.jpg",
                "bmiddle_pic": "http://ww3.sinaimg.cn/bmiddle/6906a75cjw1ezik8wxrqpj21w02iohdu.jpg",
                "original_pic": "http://ww3.sinaimg.cn/large/6906a75cjw1ezik8wxrqpj21w02iohdu.jpg",
                "geo": null,
                "user": {
                    "id": 1762043740,
                    "idstr": "1762043740",
                    "class": 1,
                    "screen_name": "我要活得比你久",
                    "name": "我要活得比你久",
                    "province": "400",
                    "city": "16",
                    "location": "海外 其他",
                    "description": "孤岛求生最难的问题是单身。",
                    "url": "",
                    "profile_image_url": "http://tp1.sinaimg.cn/1762043740/50/5737901706/0",
                    "profile_url": "stefania7",
                    "domain": "stefania7",
                    "weihao": "",
                    "gender": "f",
                    "followers_count": 70,
                    "friends_count": 500,
                    "pagefriends_count": 1,
                    "statuses_count": 1578,
                    "favourites_count": 20,
                    "created_at": "Mon Jun 14 18:08:31 +0800 2010",
                    "following": false,
                    "allow_all_act_msg": false,
                    "geo_enabled": true,
                    "verified": false,
                    "verified_type": -1,
                    "remark": "",
                    "ptype": 0,
                    "allow_all_comment": true,
                    "avatar_large": "http://tp1.sinaimg.cn/1762043740/180/5737901706/0",
                    "avatar_hd": "http://ww3.sinaimg.cn/crop.0.0.640.640.1024/6906a75cjw8ewbmq8t91jj20hs0hsgm2.jpg",
                    "verified_reason": "",
                    "verified_trade": "",
                    "verified_reason_url": "",
                    "verified_source": "",
                    "verified_source_url": "",
                    "follow_me": false,
                    "online_status": 0,
                    "bi_followers_count": 11,
                    "lang": "zh-cn",
                    "star": 0,
                    "mbtype": 0,
                    "mbrank": 0,
                    "block_word": 0,
                    "block_app": 0,
                    "credit_score": 80,
                    "user_ability": 0,
                    "urank": 21
                },
                "annotations": [
                    {
                        "client_mblogid": "iPhone-18F5597A-4855-4976-870A-46B79EC2679E"
                    },
                    {
                        "mapi_request": true
                    }
                ],
                "reposts_count": 20,
                "comments_count": 9,
                "attitudes_count": 5,
                "isLongText": false,
                "mlevel": 0,
                "visible": {
                    "type": 0,
                    "list_id": 0
                },
                "biz_feature": 4294967300,
                "darwin_tags": [],
                "userType": 0
            },
            "reposts_count": 18,
            "comments_count": 111,
            "attitudes_count": 96,
            "isLongText": false,
            "mlevel": 0,
            "visible": {
                "type": 0,
                "list_id": 0
            },
            "biz_feature": 0,
            "darwin_tags": [],
            "rid": "5_0_1_2666869164071161446",
            "userType": 0,
            "cardid": "star_710"
        };

        return(

            <div className="test">
                <Header></Header>
                <Item data={itemData}></Item>
            </div>
        )
    }
})


module.exports = Main;