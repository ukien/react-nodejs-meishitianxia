/**
 * Created by Administrator on 2017/2/7.
 */
import React from "react"
import NavLink from "./NavLink"
import { IndexLink } from "react-router"

class Nav extends React.Component{
    render(){
        return (
            <div>
                <div className="w logo_wrap2">
                    <div className="logo_inner left">
                        <a href="http://www.meishichina.com/" title="美食天下">美食天下</a>
                    </div>
                    <div className="logo_search right">
                        <form id="form_search" action="http://home.meishichina.com/search/" method="post">
                            <div className="searchBox J_search"><a href="javascript:;" title="搜索" className="search_Btn J_searchBTN right" id="search">搜索</a><input type="text" id="q" className="search_Text J_searchTxt right gay" data-first="on"/>
                            </div>
                        </form>
                    </div>
                    <div className="logo_nav">
                        <IndexLink to="/">首页</IndexLink>
                        <NavLink to="/recipe">菜谱</NavLink>
                        <NavLink to="/subject">专题</NavLink>
                    </div>
                </div>
                <div className="wrap">
                    <div className="w clear">
                        {this.props.children}
                    </div>
                </div>
            </div>
    )
    }
}

export default Nav