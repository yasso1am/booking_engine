import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import 'semantic-ui-css/semantic.min.css';
import { injectGlobal } from 'styled-components';

injectGlobal`
    @font-face {
        font-family: 'Josefin Slab';
        src: url('https://fonts.googleapis.com/css?family=Josefin+Slab') format('embedded-opentype');
    }

    html, body, div, h1, h2, h3, p, h4, button {
    	font-family: 'Josefin Slab'
    }
`

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
