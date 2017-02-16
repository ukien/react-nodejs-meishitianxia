/**
 * Created by Administrator on 2017/2/7.
 */
import React from "react"
import {Router,Route,hashHistory,IndexRoute} from "react-router"
import {NavLink} from "../components/NavLink"
import { Tabs,Tab,TabLayout,TabContents,TabContent } from "../components/Tabs"
import $ from "jquery"


class Recipe extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = {
            soupList : null,
            mainFood : null,
            bake : null,
            selfMake : null
        }
    }

    componentDidMount(){
        $.getJSON("/api/foods/type/bake").then((value) => {
            this.setState({bake:value.msg});
        });
        $.getJSON("/api/foods/type/main_food").then((value) => {
            this.setState({mainFood:value.msg});
        });
        $.getJSON("/api/foods/type/self_make").then((value) => {
            this.setState({selfMake:value.msg});
        });
        $.getJSON("/api/foods/type/soup").then((value) => {
            this.setState({soupList:value.msg});
        });
    }

    routeTo(pathName) {
        var that = this;
        return function () {
            that.props.router.push({
                pathname: pathName
            });
        }
    }

    render(){
        var that = this;
        return (
            <TabLayout>
                    <Tabs className="nav_wrap2">
                        <Tab className="item">汤羹</Tab>
                        <Tab className="item">主食</Tab>
                        <Tab className="item">烘焙</Tab>
                        <Tab className="item">自制食材</Tab>
                    </Tabs>
                    <TabContents className="tab-list">
                        <TabContent className="tab">
                            <div className="ui_newlist_1 get_num" id="J_list">
                                <ul>
                                    {
                                        this.state.soupList&&this.state.soupList.map(function (v,i) {
                                            return (
                                                <li data-id="306452">
                                                    <div className="pic">
                                                        <img width="180" height="180"
                                                             onClick={ that.routeTo("/food/"+v.id) }
                                                             src={ "http://static.study.com/"+v.cover }
                                                             className="imgLoad" style={{ display :  'block' }} />
                                                    </div>
                                                    <div className="detail">
                                                        <h2>
                                                            <a onClick={ that.routeTo("/food/"+v.id) }>{ v.name }</a>
                                                        </h2>
                                                        <p className="subline"><a>小瑶的美食</a>
                                                        </p>
                                                        <p className="subcontent">原料：猪脚、姜、致美斋甜醋、陈醋。</p>
                                                        <div className="substatus clear">
                                                            <span className="get_nums" style={{ display :  'none' }} >519人收藏，66027次阅读</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </TabContent>
                        <TabContent className="tab">
                            <div className="ui_newlist_1 get_num" id="J_list">
                                <ul>
                                    {
                                        this.state.mainFood&&this.state.mainFood.map(function (v,i) {
                                            return (
                                                <li data-id="306452">
                                                    <div className="pic">
                                                        <img width="180" height="180"
                                                             onClick={ that.routeTo("/food/"+v.id) }
                                                             src={ "http://static.study.com/"+v.cover }
                                                             className="imgLoad" style={{ display :  'block' }} />
                                                    </div>
                                                    <div className="detail">
                                                        <h2>
                                                            <a onClick={ that.routeTo("/food/"+v.id) }>{ v.name }</a>
                                                        </h2>
                                                        <p className="subline"><a>小瑶的美食</a>
                                                        </p>
                                                        <p className="subcontent">原料：猪脚、姜、致美斋甜醋、陈醋。</p>
                                                        <div className="substatus clear">
                                                            <span className="get_nums" style={{ display :  'none' }} >519人收藏，66027次阅读</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </TabContent>

                        <TabContent className="tab">
                            <div className="ui_newlist_1 get_num" id="J_list">
                                <ul>
                                    {
                                        this.state.bake&&this.state.bake.map(function (v,i) {
                                            return (
                                                <li data-id="306452">
                                                    <div className="pic">
                                                        <img width="180" height="180"
                                                             src={ "http://static.study.com/"+v.cover }
                                                             onClick={ that.routeTo("/food/"+v.id) }
                                                             className="imgLoad" style={{ display :  'block' }} />
                                                    </div>
                                                    <div className="detail">
                                                        <h2>
                                                            <a onClick={ that.routeTo("/food/"+v.id) }>{ v.name }</a>
                                                        </h2>
                                                        <p className="subline"><a>小瑶的美食</a>
                                                        </p>
                                                        <p className="subcontent">原料：猪脚、姜、致美斋甜醋、陈醋。</p>
                                                        <div className="substatus clear">
                                                            <span className="get_nums" style={{ display :  'none' }} >519人收藏，66027次阅读</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </TabContent>
                        <TabContent className="tab">
                            <div className="ui_newlist_1 get_num" id="J_list">
                                <ul>
                                    {
                                        this.state.selfMake&&this.state.selfMake.map(function (v,i) {
                                            return (
                                                <li data-id="306452">
                                                    <div className="pic">
                                                        <img width="180" height="180"
                                                             onClick={ that.routeTo("/food/"+v.id) }
                                                             src={ "http://static.study.com/"+v.cover }
                                                             className="imgLoad" style={{ display :  'block' }} />
                                                    </div>
                                                    <div className="detail">
                                                        <h2>
                                                            <a onClick={ that.routeTo("/food/"+v.id) }>{ v.name }</a>
                                                        </h2>
                                                        <p className="subline"><a>小瑶的美食</a>
                                                        </p>
                                                        <p className="subcontent">原料：猪脚、姜、致美斋甜醋、陈醋。</p>
                                                        <div className="substatus clear">
                                                            <span className="get_nums" style={{ display :  'none' }} >519人收藏，66027次阅读</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </TabContent>
                    </TabContents>

            </TabLayout>
        )
    }
}

export default Recipe