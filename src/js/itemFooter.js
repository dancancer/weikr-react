/**
 * Created by xupeng on 15/12/31.
 */
var React = require('react');

var ItemFooter = React.createClass({

    render(){
        let data = this.props.data;

        return(
            <div className="item-footer">
                <div>收藏</div>
                <div>转发{data.reposts_count}</div>
                <div>评论{data.comments_count}</div>
                <div>赞{data.attitudes_count}</div>
            </div>
        )
    }
})


module.exports = ItemFooter;