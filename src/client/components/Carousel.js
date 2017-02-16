/**
 * Created by Administrator on 2017/2/11.
 */
import React from "react"
import { addClass,removeClass } from "../utils/ClassOperation"

class Carousel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            select:0
        };
        this.timer = null;
    }

    componentDidMount(){
        if(this.props.autoStart!==false){
            this.start();
        }
    }

    start(){
        var that = this;
        clearInterval(this.timer);
        this.timer = setInterval(function () {
            that.select(that.state.select)
        },3000);
    }

    stop(){
        clearInterval(this.timer);
    }

    next(){
        select(this.state.select++);
    }

    prev(){
        select(this.state.select--);
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

    render(){
        var that = this;
        return (
            <div className="w1">
                <div id="home_index_slider">
                    <ul>
                        {
                            this.props.children&&this.props.children.map(function (v,i) {
                                return (
                                    <li className = { i == that.state.select ? addClass(v.props.className,"active") : removeClass(v.props.className,"active") }>
                                        <a>
                                            <img src={v.props.src}/>
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}
export default Carousel