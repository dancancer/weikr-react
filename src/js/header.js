/**
 * Created by xupeng on 15/12/31.
 */

var React = require('react');
var ReactDom = require('react-dom');

var Header = React.createClass({
    render(){
        return(
            <div className="header-bar">
                <div className="icon avatar"></div>
                <div className="icon home"></div>
                <div className="icon comment"></div>
                <div className="icon favor"></div>
                <div className="icon me"></div>
            </div>
        )
    }
})


module.exports = Header;