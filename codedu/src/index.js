import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { IndexPage, Main, Quiz, QuizResult, Study, UserInfo, NotFound } from './components';

import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={IndexPage}/>
      <Route path="/main" component={Main}/>
      <Route path="/quiz" component={Quiz}/>
      <Route path="/result" component={QuizResult}/>
      <Route path="/study" component={Study}/>
      <Route path="/user" component={UserInfo}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
  ,document.getElementById('root')
);
