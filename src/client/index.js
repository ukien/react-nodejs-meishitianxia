import { render } from "react-dom"
import React from "react"
import { Provider } from "react-redux"
import { createStore,applyMiddleware } from "redux"
import Home from "./home/Home"
import ConnectedApp from "./components/APP"

import reducer from "./reducer"
import { getInitialState } from "./store"
var store = createStore(reducer,getInitialState())

document.addEventListener("DOMContentLoaded",function () {
    var element = document.getElementById("app");
    render(
        <Provider store={store}>
            <ConnectedApp></ConnectedApp>
        </Provider>
    ,element);
});