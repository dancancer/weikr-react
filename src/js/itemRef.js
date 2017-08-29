/**
 * Created by xupeng on 15/12/31.
 */
var React = require('react');
var PicContent = require('./picContent');
var ItemRef = React.createClass({
    render(){
        let data = this.props.data;
        if(data){

            return(
                <div className="item-ref-content">
                    <div className="text-content">{"@"+data.user.name + ":"+ data.text}</div>
                    <PicContent data={data.pic_urls}></PicContent>
                </div>
            )
        }else{
            return null;
        }
    }
})


module.exports = ItemRef;