/**
 * Created by xupeng on 15/12/31.
 */
var React = require('react');

var moment = require('moment');
var ItemHeader = React.createClass({

    render(){
        moment.locale('zh-CN');
        let data = this.props.data;

        return(
            <div className="item-header">
                <div className="item-avatar"><img src={data.user.avatar_large}/></div>
                <div className="item-content">
                    <div className="item-user">{data.user.name}</div>
                    <div className="item-info">
                        {moment(data.created_at).fromNow()+"  "}
                        来自<span dangerouslySetInnerHTML={{__html: data.source}}></span>
                    </div>
                </div>
            </div>
        )
    }
})


module.exports = ItemHeader;