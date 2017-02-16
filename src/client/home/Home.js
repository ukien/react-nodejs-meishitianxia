/**
 * Created by Administrator on 2017/2/5.
 */
import React from "react"
import $ from "jquery"
import {Tab, Tabs, TabLayout, TabContents, TabContent} from "../components/Tabs"
import Carousel from "../components/Carousel"
import Gallery from "../components/Gallery"

class Home extends React.Component {

    routeTo(pathName) {
        var that = this;
        return function () {
            that.props.router.push({
                pathname: pathName
            });
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            healthNews: null,
            hongPeiNews: null,
            tuijianNews: null,
            rookieFood: null,
            rookieFoodHot: null,
            ingredients: null,
            carousel: null,
        }
    }

    componentDidMount() {
        $.getJSON("/api/maintain/carousel").then(value=> {
            this.setState({carousel: value.msg});
        });
        $.getJSON("/api/foods/recent/hot/20").then(value=> {
            this.setState({rookieFoodHot: value.msg});
        });
        $.getJSON("/api/foods/random/20").then(value=> {
            this.setState({random: value.msg});
        });
        $.getJSON("/api/menu/gallery/9").then(value=> {
            this.setState({gallery: value.msg});
        });
        $.getJSON("/api/maintain/news/health/6").then(value=> {
            this.setState({healthNews: value.msg});
        });
        $.getJSON("/api/maintain/news/hongpei/6").then(value=> {
            this.setState({hongPeiNews: value.msg});
        });
        $.getJSON("/api/maintain/news/tuijian/6").then(value=> {
            this.setState({tuijianNews: value.msg});
        });

        $.getJSON("/api/foods/rookie/20").then(value=> {
            this.setState({rookieFood: value.msg});
        });
        $.getJSON("/api/ingredients/some").then(value=> {
            this.setState({ingredients: value.msg});
        });
    }

    renderCarousel() {
        return (
            <Carousel>
                {
                    this.state.carousel && this.state.carousel.map(function (v, i) {
                        return (<div src={ "http://static.study.com/"+ v.cover}></div>);
                    })
                }
            </Carousel>
        )
    }


    renderUserMenusHot() {
        var gallery = this.state.gallery;
        if (!gallery) {
            return;
        }
        var index = 0;
        var arr = [];
        while (true) {
            var ret = gallery.splice(0, 3);
            if (ret.length == 0) {
                break;
            }
            arr[index++] = ret;
        }
        function render2() {
            var ret = arr.map(function (v, i) {
                var arr2 = [];
                for (var i = 0; i < v.length; i++) {
                    arr2.push(
                        (
                            <li>
                                <h2>
                                    <a>{ v[i].name }</a>
                                </h2>
                                <p>
                                    <span>{  v[i].userName }的菜单&nbsp;&nbsp;</span>
                                    <br/>
                                    {  v[i].introduce }</p>
                            </li>
                        )
                    );
                }
                return (
                    <ul>
                        {
                            arr2
                        }
                    </ul>

                )
            })
            return ret;
        }

        return (
            <Gallery>
                {
                    render2()
                }
            </Gallery>
        )
    }

    renderArticleCards() {
        var that = this;
        return (
            <div className="w3 clear">
                <TabLayout className="w3_1 w3live">
                    <Tabs className="ui_title ui_title_wrap">
                        <Tab className="on"><a href="javascript:void(0);">健康</a></Tab>
                    </Tabs>
                    <TabContents>
                        <TabContent className="live active">
                            <ul className="tuijian">
                                {
                                    this.state.healthNews && this.state.healthNews.map && this.state.healthNews.map(function (v, i) {
                                        return (
                                            <li onClick={ that.routeTo("/article/"+v.id) }>
                                                <a title={v.title}>{v.title}</a></li>);
                                    })
                                }
                            </ul>
                        </TabContent>
                    </TabContents>


                </TabLayout>
                <TabLayout className="w3_2 w3live">
                    <Tabs className="ui_title_wrap ui_title">
                        <Tab className="on"><a href="javascript:void(0);">烘焙</a></Tab>
                    </Tabs>
                    <TabContents>
                        <TabContent className="live active">
                            <ul className="tuijian">
                                {
                                    this.state.hongPeiNews && this.state.hongPeiNews.map && this.state.hongPeiNews.map(function (v, i) {
                                        return (
                                            <li onClick={ that.routeTo("/article/"+v.id) }>
                                                <a title={v.title}>{v.title}</a></li>);
                                    })
                                }

                            </ul>
                        </TabContent>
                    </TabContents>

                </TabLayout>
                <div className="w3_3">
                    <div className="ui_title">
                        <div className="ui_title_wrap">
                            <h2 className="on">为您推荐</h2>
                        </div>
                    </div>
                    <div className="live active">
                        <ul className="tuijian">
                            {
                                this.state.tuijianNews && this.state.tuijianNews.map && this.state.tuijianNews.map(function (v, i) {
                                    return (
                                        <li onClick={ that.routeTo("/article/"+v.id) }><a
                                            title={v.title}>{v.title}</a></li>);
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

    renderNewMenus() {
        var that = this;
        return (
            <div className="w5">
                <TabLayout>
                    <Tabs className="ui_title ui_title_wrap clear">
                        <Tab className="on"><a href="javascript:void(0);">新秀菜谱</a></Tab>
                        <Tab><a href="javascript:void(0);">一周热门</a></Tab>
                        <Tab><a href="javascript:void(0);">最受欢迎的家常菜</a></Tab>
                    </Tabs>
                    <TabContents className="tab-list clear mt10 on">
                        <TabContent className="tab active">
                            <ul className="big4_list">
                                {
                                    this.state.rookieFood && this.state.rookieFood.map(function (v, i) {
                                        return (
                                            <li onClick = { that.routeTo("/food/"+v.id) }>
                                                <a title={ v.name }>
                                                    <i>
                                                        <img alt={ v.name } className="imgLoad"
                                                             src={ "http://static.study.com/"+v.cover }
                                                        />
                                                    </i>
                                                    <p>{ v.name }</p>
                                                </a>
                                                <a title="zeychou"
                                                   className="u">{ v.nickname }</a>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </TabContent>
                        <TabContent className="tab">
                            <ul className="big4_list">
                                {
                                    this.state.rookieFoodHot && this.state.rookieFoodHot.map(function (v, i) {
                                        return (
                                            <li onClick = { that.routeTo("/food/"+v.id) }>
                                                <a title={ v.name }>
                                                    <i>
                                                        <img alt={ v.name } className="imgLoad"
                                                             src={ "http://static.study.com/"+v.cover }
                                                        />
                                                    </i>
                                                    <p>{ v.name }</p>
                                                </a>
                                                <a title="zeychou"
                                                   className="u">{ v.nickname }</a>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </TabContent>
                        <TabContent className="tab">
                            <ul className="big4_list">
                                {
                                    this.state.random && this.state.random.map(function (v, i) {
                                        return (
                                            <li onClick = { that.routeTo("/food/"+v.id) }>
                                                <a title={ v.name }>
                                                    <i>
                                                        <img alt={ v.name } className="imgLoad"
                                                             src={ "http://static.study.com/"+v.cover }
                                                        />
                                                    </i>
                                                    <p>{ v.name }</p>
                                                </a>
                                                <a title="zeychou"
                                                   className="u">{ v.nickname }</a>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </TabContent>
                    </TabContents>
                </TabLayout>
            </div>
        )
    }

    renderIngredients() {
        return (
            <div className="w4">
                <div className="ui_title">
                    <div className="ui_title_wrap">
                        <h2 className="on"><a title="时令食材" href="http://www.meishichina.com/YuanLiao/" target="_blank">时令食材</a>
                        </h2>
                    </div>
                </div>
                <div className="tui_c">
                    <ul>
                        {
                            this.state.ingredients && this.state.ingredients.map(function (v, i) {
                                return (
                                    <li><a title={v.name}><img
                                        className="imgLoad" src={"http://static.study.com/" + v.pic}
                                    />白菜</a><span>{v.category}</span>
                                    </li>
                                );
                            })
                        }

                    </ul>
                </div>
            </div>

        )
    }

    render() {
        return (
            <div>
                {
                    this.renderCarousel()
                }
                {
                    this.renderArticleCards()
                }
                {
                    this.renderNewMenus()
                }
                {
                    this.renderIngredients()
                }
            </div>

        )
    }
}

export default Home