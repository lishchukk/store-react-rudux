import React from 'react';

import './app.css';
import Header from "../header/header";
import { Route, Switch } from "react-router";
import HomePage from "../pages/home-page/home-page";
import CartPage from "../pages/cart-page/cart-page";


const App = () => {
    return (
        <main role='main' className="container">
            <Header numItems={5} total={210}/>
            <Switch>
                <Route path='/' exact component={HomePage}/>
                <Route path='/card/' exact component={CartPage}/>
            </Switch>


        </main>
    );
};

export default App;
