import * as React from 'react';
import * as ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import {
    Router,
    Route,
    Link,
    Switch
  } from 'react-router-dom';

import { Home } from './components/home';
import { About } from './components/about';
import { Contact } from './components/contact';
import { Query } from './components/query';
import { NotFound } from './components/notfound';

interface AppProps {}

interface AppState {
    url?: string;
}

class App extends React.Component<AppProps, AppState> {
    constructor(props){
        super(props);
        this.state = { url: '' };
    }
    onclick(e){
        history.push('/' + this.state.url);
    }

    onchange(e){
        this.setState({
            url: e.target.value
        });
    }
    render(){
        return(
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
                    <Route path='/query/:param1/:param2' component={Query} />
                    <Route component={NotFound} />
                </Switch>
                <input type="text" onChange={this.onchange.bind(this)}/>
                <button onClick={this.onclick.bind(this)}>change url</button>
            </div>
        )
    }
};

const history = createHistory();

ReactDOM.render(
    <Router history={history}>
        <App/>
    </Router>,
    document.getElementById('root')
);