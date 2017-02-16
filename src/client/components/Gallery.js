/**
 * Created by Administrator on 2017/2/12.
 */
import React from "react"
import {addClass, removeClass} from "../utils/ClassOperation"

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            select: 0
        };
    }

    next() {
        this.select(this.state.select++);
    }

    prev() {
        this.select(this.state.select--);
    }

    select(index){
        if(this.props.children){
            var num = this.props.children.length;
            if(index<0){
                this.setState({select:this.props.children.length-1});
            }else{
                this.setState({select : ++this.state.select%num});
            }
        }
    }

    render() {
        var that = this;
        return (
            <div className="w2">
                <div id="w2_slider">
                        {
                            this.props.children && this.props.children.map && this.props.children.map(function (v, i) {
                                return (
                                    <div className = { i == that.state.select ? addClass(v.props.className,"active") : removeClass(v.props.className,"active") }>
                                        { v }
                                    </div>
                                );
                            })
                        }
                </div>
                <span class="control">
                    <a class="prevBtn" onclick={ this.prev }><i>&nbsp;</i></a>
                    <a class="nextBtn" onClick={ this.next }><i>&nbsp;</i></a>
                </span>
            </div>
        )
    }
}

export default Gallery