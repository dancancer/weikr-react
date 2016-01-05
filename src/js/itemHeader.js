/**
 * Created by xupeng on 15/12/31.
 */
var React = require('react');

var ItemHeader = React.createClass({
    render(){
        let data = this.props.data;

        return(
            <div className="item-header">
                <div className="item-avatar">{data.user.avatar_hd}</div>
                <div className="item-user">{data.user.name}</div>
                <div className="item-info">{data.created_at}</div>
            </div>
        )
    }
})


module.exports = ItemHeader;