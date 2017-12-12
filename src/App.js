import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from './redux/store/index.js';
import './App.css';
import Home from './containers/Home/Home';
import Login from './containers/Login/index';
import Album from './containers/Home/Album';
import Music from './containers/Music/Music';
import Player from './containers/Music/Player';
import Search from './containers/Search/Search.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router>
            <div className='wrap'>
              <Player style={{display: 'none'}}/>
              <Route exact path="/" component={Login} />
              <Route path="/home" component={Home} />
              <Route path="/album/:id" component={Album} />
              <Route path="/search" component={Search} />
              <Route path="/music" component={Music} />
            </div>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
