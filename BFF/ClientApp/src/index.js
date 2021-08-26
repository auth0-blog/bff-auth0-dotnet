import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { AuthProvider } from "./context/AuthContext";

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

ReactDOM.render(
    <AuthProvider>
        <BrowserRouter basename={baseUrl}>
            <App />
        </BrowserRouter>
    </AuthProvider>,
    rootElement);

registerServiceWorker();

