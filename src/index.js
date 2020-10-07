import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";

import store from "./store";
import App from './components/app/app';
import { BookstoreServiceProvider } from "./components/bookstore-service-conext/bookstore-service-context";
import { BrowserRouter as Router } from "react-router-dom";
import ErrorBoundary from "./components/error-boundary/error-boundary";
import BookstoreServices from "./services/bookstore-services";

import './index.css';





const bookstoreService = new BookstoreServices();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <BookstoreServiceProvider value={bookstoreService}>
                <Router>
                    <App/>
                </Router>
            </BookstoreServiceProvider>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('root')
);

