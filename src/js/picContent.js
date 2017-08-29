var React = require('react');
var LayeredComponentMixin = require('@ali/rc-layeredmask-mixin');


var PicContent = React.createClass({
    mixins: [LayeredComponentMixin],
    getInitialState: function () {
        return {
            index: 0,
            isMaskShow: false
        };
    },
    showLarge(i){
        this.setState({isMaskShow: true, index: i});
    },
    nextPic(){
        let max = 0;
        if (this.props.data && this.props.data.length) {
            max = this.props.data.length - 1;
        }
        let _index = this.state.index;
        _index++;
        if (_index > max) {
            _index = 0
        }
        this.setState({index: _index});
    },
    prePic(){
        let _index = this.state.index;
        let max = 0;
        if (this.props.data && this.props.data.length) {
            max = this.props.data.length - 1;
        }
        if (_index === 0) {
            _index = max;
        } else {
            _index--;
        }
        this.setState({index: _index});
    },
    close(){
        this.setState({isMaskShow:false});
    },
    renderLayer(){
        let data = this.props.data;
        let that = this;
        if (data[this.state.index]) {
            let imgSrc = data[this.state.index].thumbnail_pic.replace("thumbnail", "mw1024");
            return <div className="pic-large-content">
                <div className="pic-large-top">
                    <span onClick={that.prePic}>pre</span>
                    <span onClick={that.nextPic}>next</span>
                    <span>original</span>
                    <span onClick={that.close}>close</span>
                </div>
                <div className="pic-large-nav">
                    <div className="icon left" onClick={that.prePic}></div>
                    <div className="icon close" onClick={that.close}></div>
                    <div className="icon right" onClick={that.nextPic}></div>
                </div>
                <image src={imgSrc}/>

            </div>
        }

    },
    render(){
        let data = this.props.data;
        let that = this;
        let picCount = data.length;
        if (data && data.length > 0) {
            let i = -1
            let picsDom = data.map(function (pic) {
                i++;
                let picUrl = pic.thumbnail_pic.replace("thumbnail", "or180");
                let className = "square-pic";
                if(picCount === 1){
                    picUrl = pic.thumbnail_pic.replace("thumbnail", "or360");
                    className = "single-pic";

                }

                let style = {
                    backgroundImage: "url(" + picUrl + ")"
                }
                if(picCount === 1){
                    return <div className="single-pic-content"><img className={className} data-index={i} onClick={that.showLarge.bind(that,i)}
                                key={pic.$$hashKey} src={picUrl}></img></div>
                }else{
                    return <div className={className} data-index={i} onClick={that.showLarge.bind(that,i)}
                                key={pic.$$hashKey} style={style}></div>
                }

            });
            let contentClassName = "pic-content";
            if(picCount === 4){
                contentClassName = "pic-content four"
            }
            return (
                <div className={contentClassName}>
                    {picsDom}
                </div>
            )
        } else {
            return null;
        }

    }
})


module.exports = PicContent;