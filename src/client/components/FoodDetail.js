/**
 * Created by Administrator on 2017/2/12.
 */
import React from "react"
import $ from "jquery"

class FoodDetail extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            food:null
        }
    }

    componentDidMount(){
        this.getData();
    }

    componentDidUpdate (prevProps) {
        this.getData();
    }
    getData(){
        var id = this.props.params.id;
        var that = this;
        if(id)
        {
            $.getJSON("/api/foods/id/"+id).then((value)=>{
                that.setState({ food:value.msg[0] });
            });
        }
    }

    renderShiCai(list){
        if(!list){
            return;
        }
        var ingredients = eval("("+list+")");
        return ingredients.ingredients.map(function (v,i) {
            return (
            <li>
                <span className="category_s1">
                <a><b>{ v }</b></a>
                </span>
                <span className="category_s2">{ ingredients.account[i] }</span>
            </li>
            )
        })


    }

    renderSteps(list){
        if(!list){
            return;
        }
        var steps = eval("("+list+")");
        return steps.steps.map(function (v,i) {
            return (<li>
                <div className="recipeStep_img">
                    <img src={ "http://static.study.com/"+ steps.stepImgs[i] }/>
                </div>
                <div className="recipeStep_word">
                    <div className="recipeStep_num">{i}</div>
                    {v}
                </div>
            </li>)
        })
    }

    render(){
        var food = this.state.food;
        return (

            <div className="wrap">
              {
                food &&(<div className="w clear">
                <div className="space_left">
                    <div className="userTop clear">
                        <h1 className="recipe_De_title"><a href="#" id="recipe_title"
                                                           title={ food.name }>{ food.name }</a></h1>
                    </div>
                    <div className="space_box_home">
                        <div className="recipDetail">
                            <div className="recipe_De_imgBox" id="recipe_De_imgBox">
                                <a className="J_photo" title={ food.name + "的做法"}><span></span>
                                    <img src={ "http://static.study.com/"+food.diagrams } alt={ food.name + "的做法"}/>
                                </a>
                            </div>
                            <blockquote className="block_txt" id="block_txt">
                                <div id="block_txt1"><span className="txt_tart">“</span>{ food.description }<span
                                    className="txt_end">” </span>
                                </div>
                            </blockquote>
                            <div className="mo mt20">
                                <h3>食材明细</h3>
                            </div>
                            <div className="recipeCategory_sub_R clear">
                                <ul>
                                    {
                                        this.renderShiCai(food.ingredients)
                                    }

                                </ul>
                            </div>
                            <div className="recipeCategory_sub_R mt30 clear">
                                <ul>
                                    <li>
                                                        <span className="category_s1">
                                                        <a title="酸辣" href="#" target="_blank">酸辣</a>
                                                        </span>
                                        <span className="category_s2">口味</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="mo mt20">
                                <h3>{ food.name + "的做法"}步骤</h3>
                            </div>
                            <div className="recipeStep">
                                <ul>
                                    {
                                        this.renderSteps(food.steps)
                                    }
                                </ul>
                            </div>
                            <div className="mo">
                                <h3>小窍门</h3>
                            </div>
                            <div className="recipeTip">
                                淘宝掌柜家还要放洋葱、韭菜切碎一起腌制的，我没加
                            </div>
                            <div className="recipeArction mt10 clear">
                                <ul className="collect_da">
                                    <li className="lik"><a title="喜欢" href="#" className="J_lik"
                                                           data=""><i></i><span></span>喜欢</a></li>
                                    <li className="fav"><a title="收藏" href="#" className="J_fav"
                                                           data=""><i></i><span></span>收藏</a></li>
                                    <li className="col"><a title="加入菜单" href="#" className="J_col"
                                                           data=""><i></i>加入菜单</a></li>
                                    <li className="shar"><a title="分享到微信" href="#" className="J_s4"
                                                            data="bds_weixin"><i></i>微信</a></li>
                                    <li className="shar"><a title="分享到QQ好友" href="#" className="J_s2"
                                                            data="bds_sqq"><i></i>QQ好友</a></li>
                                    <li className="shar"><a title="分享到QQ空间" href="#" className="J_s3"
                                                            data="bds_qzone"><i></i>QQ空间</a></li>
                                    <li className="shar"><a title="分享到新浪微博" href="#" className="J_s1"
                                                            data="bds_tsina"><i></i>新浪微博</a></li>
                                </ul>
                                <div className="bdsharebuttonbox" id="bdshare">
                                    <a title="分享到新浪微博" href="#" className="bds_tsina" id="bds_tsina"
                                       data-cmd="tsina"></a>
                                    <a title="分享到QQ空间" href="#" className="bds_qzone" id="bds_qzone"
                                       data-cmd="qzone"></a>
                                    <a title="分享到QQ好友" href="#" className="bds_sqq" id="bds_sqq" data-cmd="sqq"></a>
                                    <a data-cmd="weixin" id="bds_weixin" className="bds_weixin" href="#"></a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>)
             }
            </div>

        )
    }
}
export default FoodDetail;