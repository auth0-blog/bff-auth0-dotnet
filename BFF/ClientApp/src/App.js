import React, { Component } from 'react';
import { Redirect, Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { User } from './components/User';
import { useAuth } from './context/AuthContext';

import './custom.css'

const App = () => {

    const { isAuthenticated, login, logout } = useAuth();

    return (
        <Layout>
            <Route exact path='/' component={Home} />
            <Route path='/fetch-data' component={isAuthenticated ? () => { return <FetchData /> } : () => { login(); return null; }}/>
            <Route path='/user' component={isAuthenticated ? () => { return <User /> } : () => { login(); return null; }} />
            <Route path='/login' component={() => { login(); return null }} />
            <Route path='/logout' component={() => { logout(); return null }}></Route>
        </Layout>
    );
}

export default App;
