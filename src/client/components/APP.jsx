/**
 * Created by Administrator on 2017/2/6.
 */
import React from "react"
import {connect} from "react-redux"
import {Router, Route, hashHistory,IndexRoute} from "react-router"
import Nav from "./Nav"
import Home from "../home/Home"
import Recipe from "../recipe/Recipe"
import Subject from "../subject/Subject"
import Article from "../components/Article"
import Food from "../components/FoodDetail"

class APP extends React.Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={ Nav }>
                    <IndexRoute component={ Home } />
                    <Route path="/recipe" component={ Recipe }/>
                    <Route path="/subject" component={ Subject }/>
                    <Route path="/article/:id" component={ Article }/>
                    <Route path="/food/:id" component={ Food }/>
                </Route>
            </Router>
        )
    }
}

function mapStateToProps(state) {
    return {
        carousel: state.get("carousel")
    }
}


export const ConnectedApp = connect(mapStateToProps)(APP);

export default APP;