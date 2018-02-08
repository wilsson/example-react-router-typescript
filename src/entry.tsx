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
import { NotFound } from './components/notfound';

const Child = ({ match }) => (
    <div>
      <h3>ID: {match.params.id}</h3>
    </div>
  )

interface AppProps {
    router?: any;
    history?: any;
}

interface AppState {
    url?: string;
}
class App extends React.Component<AppProps, AppState> {
    constructor(props){
        super(props);
        this.state = { url: '' };
    }
    onclick(e){
        console.log('onclick', this.props.history);
        this.props.router.push('/'+ this.state.url);
    }

    onchange(e){
        console.log('this onchange', e.target.value);
        this.setState((prevState) => {
            return {
                url: e.target
            }
        });
    }
    render(){
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
                    <Route path='/query/:foo/:id' component={Query} />
                    <Route component={NotFound} />
                </Switch>
                <input type="text" onChange={this.onchange.bind(this)}/>
                <button onClick={this.onclick.bind(this)}>change url</button>
                </div>
            </Router>
        )
    }
};

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);