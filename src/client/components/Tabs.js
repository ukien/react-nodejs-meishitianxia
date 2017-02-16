/**
 * Created by Administrator on 2017/2/7.
 */
import React from "react"
import {addClass, removeClass} from "../utils/ClassOperation"

class _TabLayout extends React.Component {
    constructor(props) {
        super(props);
        var that = this;
        this.state = {select: 0};
        this.callback = (v, i) => {
            that.setState({select: i});
        }
    }

    render() {
        var tabs = this.props.children[0];
        var tabContents = this.props.children[1];
        return (
            <div { ...this.props }>
                <_Tabs { ...tabs.props } select={ this.state.select }
                                         callback={this.callback}>{ tabs.props.children }</_Tabs>
                <_TabContents { ...tabContents.props }
                    select={ this.state.select }>{ tabContents.props.children }</_TabContents>
            </div>
        )
    }
}

class _TabContent extends React.Component {
    render() {
        return (
            <li { ...this.props }>
                {
                    this.props.children
                }
            </li>
        )
    }
}

class _TabContents extends React.Component {
    constructor(props) {
        super(props);
    }

    renderChildren()
    {
        var that = this;
        if(this.props.children instanceof Array)
        {
            return this.props.children.map(function (v,i) {
                return <TabContent { ...v.props } className={that.props.select == i ?  addClass(v.props.className,"active"):removeClass(v.props.className,"active")}>
                    { v.props.children }
                </TabContent>
            })
        }
        return this.props.children;
    }

    render() {
        var that = this;
        return (
            <ul { ...this.props }>
                {
                    this.renderChildren()
                }
            </ul>
        )
    }
}

class _Tab extends React.Component {
    handleClick() {
        var that = this;
        return function (event) {
            var callback = that.props.callback || function () {
                };
            callback(that, that.props.index);
        }
    }

    render() {
        return <li className={this.props.className} onClick={this.handleClick()}>{this.props.children}</li>
    }
}

class _Tabs extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        var children = this.props.children;
        var callback = this.props.callback;
        var that = this;
        return (
            <ul className={this.props.className}>
                {
                    children&&children.map&&children.map(function (v, i) {
                        return (
                            <_Tab index={i} callback={callback}
                                  className={that.props.select == i ?  addClass(v.props.className,"active"):removeClass(v.props.className,"active")}>
                                {v.props.children}
                            </_Tab>
                        )
                    })
                }
                {
                    !children.map && children
                }
            </ul>
        )
    }
}

export const Tab = _Tab;
export const Tabs = _Tabs;
export const TabLayout = _TabLayout;
export const TabContents = _TabContents;
export const TabContent = _TabContent;