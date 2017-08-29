
var React = require('react');
var PicContent = require('./picContent');
var ItemContent = React.createClass({
    render(){
        let data = this.props.data;
        return(
            <div className="item-content">
                <div className="text-content">{data.text}</div>
                <PicContent data={data.pic_urls}></PicContent>
            </div>
        )
    }
})


module.exports = ItemContent;