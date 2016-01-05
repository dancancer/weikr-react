
var React = require('react');

var ItemContent = React.createClass({
    contentHandler(){

    },
    render(){
        let data = this.props.data;
        return(
            <div className="item-content">
                <div className="text-content">{data.text}</div>
                <div className="pic-content"></div>
            </div>
        )
    }
})


module.exports = ItemContent;