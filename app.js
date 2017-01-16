/**
 * Created by Administrator on 9/29/2016.
 */
import  React from 'react';
import ReactDom from  'react-dom';
import {Router, Route, browserHistory, IndexRoute} from  'react-router';

import 'statics/scss/_app.scss';
import Index from  'components/index';

ReactDom.render((
    <Router history={browserHistory}>
        <Route path="/" component={Index}></Route>
    </Router>
), document.querySelector('#app'));