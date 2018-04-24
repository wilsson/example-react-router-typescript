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
import { NotFound } from './components/notfound';

interface AppProps {}

interface AppState {
    url?: string;
}
function decompose(){
    console.log('descomponer url y hacer request');
}
function assemble(){
    console.log('armar url');
}
class App extends React.Component<AppProps, AppState> {
    onclick(){
        assemble();
        history.push('/new?param=1');
    }
    componentWillMount(){
        console.log(`Reload ${location.pathname}${location.search}${location.hash}`);
        decompose();
    }
    render(){
        return(
            <div>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>

                <hr/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path='/about' component={About}/>
                    <Route path='/contact' component={Contact}/>
                    <Route component={NotFound} />
                </Switch>
                <button onClick={this.onclick.bind(this)}>add url</button>
            </div>
        )
    }
};

const history = createHistory();
const unlisten = history.listen((location, action) => {
    // location is an object like window.location
    console.log(`The current URL is ${location.pathname}${location.search}${location.hash}`)
    console.log(`The last navigation action was ${action}`);
    decompose();
});

ReactDOM.render(
    <Router history={history}>
        <App/>
    </Router>,
    document.getElementById('root')
);