/**
 * Created by xupeng on 15/12/11.
 */
var React = require('react');
var ReactDom = require('react-dom');

var categoryStore = require("./store").category
var categoryUpdate = require("./action").category

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
        return(
            <div className="test">
                {this.state.list ? this.state.list.map( i => <div key={i} >{i}</div>) : ""}
                {this.state.errMsg ? this.state.errMsg : ""}
                <br/>
                <button onClick={this.handleClick}>更新列表</button>
            </div>
        )
    }
})


module.exports = Main;