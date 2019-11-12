import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/react';
import './index.scss';
import '../../themes/index.scss';

import { components } from './components/markdown-tag';
import Header from './components/header';
import HomePage from './containers/home';
import ComponentsLayoutPage from './containers/components-layout';

const App = () => (
  <HashRouter>
    <div>
      <Header/>
      <Switch>
        <Route exact path="/home" component={HomePage}/>
        <Route path="/components/:page" component={ComponentsLayoutPage}/>
        <Redirect from="/components" to="/components/introduction"/>
        <Redirect from="/" to="/home"/>
      </Switch>
    </div>
  </HashRouter>
);

ReactDom.render(
  <MDXProvider components={components}>
    <App/>
  </MDXProvider>,
  document.getElementById('root'),
);