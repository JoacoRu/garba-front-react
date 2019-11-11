import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './styles/index.css';


//Views

import Products from './views/Products';
import Product from './views/Product';
import NotFound from './views/NotFound';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/error" component={NotFound} />
                <Route exact path="/" component={Products} />
                <Route path="/product/:id" component={Product} />
            </Switch>
        </BrowserRouter>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));