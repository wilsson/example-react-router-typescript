import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
  } from 'react-router-dom';

import { Home } from './components/home';
import { About } from './components/about';
import { Contact } from './components/contact';
import { Query } from './components/query';
import { Topic } from './components/query';
import { NotFound } from './components/notfound';

const Child = ({ match }) => (
    <div>
      <h3>ID: {match.params.id}</h3>
    </div>
  )
const App = (props) => {
    return(
        <Router>
            <div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/query'>Query</Link></li>
            </ul>

            <hr/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path='/about' component={About}/>
                <Route path='/contact' component={Contact}/>
                <Route path='/query/:id' component={Query} />
                <Route path="/topics/:name" component={Topic} />
                <Route component={NotFound} />
            </Switch>
            </div>
        </Router>
    )
};

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);