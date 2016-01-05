
var React = require('react');
var ReactDom = require('react-dom');

var categoryStore = require("./store").category
var categoryUpdate = require("./action").category
var ItemHeader = require("./itemHeader");
var ItemContent = require("./itemContent");
var ItemRef = require("./itemRef");

var Item = React.createClass({
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
        let data = this.props.data;
        return(
            <div className="item-content">
                <ItemHeader data={data}></ItemHeader>
                <ItemContent data={data}></ItemContent>
                <ItemRef data={data.retweeted_status}></ItemRef>
            </div>
        )
    }
})


module.exports = Item;