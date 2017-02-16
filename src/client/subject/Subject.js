/**
 * Created by Administrator on 2017/2/7.
 */
import React from "react"
import { Tab,Tabs,TabLayout,TabContent,TabContents } from '../components/Tabs'
import $ from "jquery"

class Subject extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            foods:null,
            kitchen:null,
            ingredients:null
        }
    }


    componentDidMount(){
        $.getJSON("/api/subject/zhuti").then(value=> {
            this.setState({foods:value.msg}) ;
        });
        $.getJSON("/api/subject/kitchen").then(value=> {
            this.setState({kitchen:value.msg}) ;
        });
        $.getJSON("/api/subject/ingredients").then(value=> {
            this.setState({ingredients:value.msg}) ;
        });

    }


    render(){
        return (
            <div>
                <TabLayout>
                    <Tabs className="w nav_wrap2">
                            <Tab>主题美食</Tab>
                            <Tab>厨电专题</Tab>
                            <Tab>食材专题</Tab>
                    </Tabs>
                    <TabContents className="tab-list">
                        <TabContent className="tab">
                            <ul className="w clear zhen_listing_index clear mt10">
                                {
                                    this.state.foods&&this.state.foods.map(function (v,i) {
                                        return (
                                            <li>
                                                <i>
                                                    <img src={"http://static.study.com/"+v.cover} className="imgLoad"/>
                                                </i>
                                                <p>{v.name}</p>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </TabContent>
                        <TabContent className="tab">
                            <ul className="w clear zhen_listing_index clear mt10">
                                {
                                    this.state.kitchen&&this.state.kitchen.map(function (v,i) {
                                        return (
                                            <li>
                                                <i>
                                                    <img src={"http://static.study.com/"+v.cover} className="imgLoad"/>
                                                </i>
                                                <p>{v.name}</p>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </TabContent>
                        <TabContent className="tab">
                            <ul className="w clear zhen_listing_index clear mt10">
                                {
                                    this.state.ingredients&&this.state.ingredients.map(function (v,i) {
                                        return (
                                            <li>
                                                <i>
                                                    <img src={"http://static.study.com/"+v.cover} className="imgLoad"/>
                                                </i>
                                                <p>{v.name}</p>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </TabContent>
                    </TabContents>

                </TabLayout>
                <div className="ui-page mt10">
                    <div className="ui-page-inner clear">
                        <a className='now_page'>1</a>
                        <a href="http://www.meishichina.com/mofang/page/2/">2</a>
                        <a href="http://www.meishichina.com/mofang/page/3/">3</a>
                        <a href="http://www.meishichina.com/mofang/page/4/">4</a>
                        <a href="http://www.meishichina.com/mofang/page/5/">5</a>
                        <span>...</span>
                        <a href="http://www.meishichina.com/mofang/page/2/">下一页</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Subject