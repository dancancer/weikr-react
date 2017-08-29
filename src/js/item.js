
var React = require('react');
var ReactDom = require('react-dom');

var ItemHeader = require("./itemHeader");
var ItemContent = require("./itemContent");
var ItemRef = require("./itemRef");
var ItemFooter = require("./itemFooter");

var Item = React.createClass({
    render(){
        let data = this.props.data;
        return(
            <div className="item-main-content">
                <ItemHeader data={data}></ItemHeader>
                <ItemContent data={data}></ItemContent>
                <ItemRef data={data.retweeted_status}></ItemRef>
                <ItemFooter data={data}></ItemFooter>
            </div>
        )
    }
})


module.exports = Item;