/**
 * Created by xupeng on 15/12/11.
 */
var React = require('react');
var ReactDom = require('react-dom');
//var store  = require('./data');

var homeTimelineStore = require("./store").homeTimeline;
var updateHomeTimeline = require("./action").homeTimeline;

var Header = require('./header');
var Item = require('./item');
var sinaApi = require('./services');

var Main = React.createClass({
    getInitialState(){
        return  null
    },
    onStatusChange(storeState){
        this.setState(storeState)
    },
    componentDidMount(){
        if(homeTimelineStore){
            this.unsubscribe = homeTimelineStore.listen(this.onStatusChange);
        }
        updateHomeTimeline();
    },
    componentWillUnmount() {
        this.unsubscribe();
    },
    handleClick(){
        updateHomeTimeline()
    },
    checkPosition(){
        var scrollTop = document.body.scrollTop,

            windowH = window.innerHeight,

            documentH = document.body.getBoundingClientRect(). height,

            nowH = scrollTop  + windowH;

        if( nowH  >= documentH  ){

            updateHomeTimeline()

        }
    },
    render(){
        //alert(JSON.stringify(store));

        if(this.state){
            console.log(this.state);
            let items = [];
            for (let i in this.state){
                console.log(this.state[i].id)
                items.push(<Item key={this.state[i].id} data={this.state[i]}></Item>)
            }
            //let items = this.state.map(function(itemData){
            //    return <Item data={itemData}></Item>
            //});
            return(

                <div className="test" onWheel={this.checkPosition}>
                    {items}
                    <div className="spinner">
                        <div className="rect1"></div>
                        <div className="rect2"></div>
                        <div className="rect3"></div>
                        <div className="rect4"></div>
                        <div className="rect5"></div>
                    </div>
                </div>
            )
        }else{
            return null
        }

    }
})


module.exports = Main;