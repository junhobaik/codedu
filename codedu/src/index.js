import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { IndexPage, Main, Quiz, QuizResult, Study, UserInfo, NotFound, Lecture } from './components';

import 'semantic-ui-css/semantic.min.css';

const checkSession = function () {
  if(!sessionStorage.getItem('useremail')){
    browserHistory.push('/')
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={IndexPage}/>
      <Route path="/main" component={Main} onEnter={checkSession}/>
      <Route path="/quiz" component={Quiz} onEnter={checkSession}/>
      <Route path="/result" component={QuizResult} onEnter={checkSession}/>
      <Route path="/study/:part" component={Study} onEnter={checkSession}/>
      <Route path="/user" component={UserInfo} onEnter={checkSession}/>
      <Route path="/lecture" component={Lecture} />
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
  ,document.getElementById('root')
);
