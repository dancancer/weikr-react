/**
 * Created by xupeng on 15/12/31.
 */
var React = require('react');

var ItemRef = React.createClass({
    render(){
        let data = this.props.data;
        if(data){

            return(
                <div className="item-ref-content">
                    <div className="text-content">{data.text}</div>
                    <div className="pic-content"></div>
                </div>
            )
        }else{
            return null;
        }
    }
})


module.exports = ItemRef;