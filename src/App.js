import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import './App.css';
import Toggle from './toggle/Toggle'
import {BrowserRouter as Router, Route,Switch, Redirect, Link}from 'react-router-dom'
import { save, load } from "redux-localstorage-simple"
//middleware
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import MovieList from './movies/MovieList'
import MovieDetail from './movies/MovieDetail'
import NavBar from './navbar'
import Login from './login'
import Signup from './signup'
const middleware = [logger,thunk]
// Movie app 

const store = createStore(
  rootReducer,
   load(),
  
composeWithDevTools(applyMiddleware(...middleware,save()))
  )

  function PrivateRoute({ component: Component, authed, ...rest }) {
    console.log("private route", Component, authed)
    return (
      <Route
        {...rest}
        render={(props) => authed === true
          ? <Component {...props} /> : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
      />
    )
  }

  function PublicRoute ({component: Component, authed, ...rest}) {
    return (
      <Route
        {...rest}
        render={(props) => authed === false
          ? <Component {...props} />
          : <Redirect to='/dashboard' />}
      />
    )
  }

// npm i redux-devtools-extension
class App extends Component {
  state = {
    authed: false,
  }


  logoutHandler = () => {
    this.setState({
      authed: false,
    })
  }

  loginHandler = () => {
    this.setState({
      authed: true,
    })
  }

  registerHandler = () => {
    this.setState({
      authed: true,
    })
  }
  render() {

   
    return (
      <Provider store={store}>
      <Router>
      <div className="App">
      <NavBar isAuth={this.state.authed} logoutHandler={this.logoutHandler} />
      <Toggle/>
      <Switch>
    <Route exact path='/' authed={this.state.authed} component={MovieList}/>
    <Route authed={this.state.authed} path="/signup" render={props => <Signup registerHandler={this.registerHandler} />} />

    <Route authed={this.state.authed} path="/login" render={props => <Login loginHandler={this.loginHandler} />} />
    <PrivateRoute path='/:id'  authed={this.state.authed}  component={MovieDetail}/>
      </Switch>
      </div>
      </Router>
      </Provider>
    );
  }
}

export default App;











// const defaultState = {
//   welcome: 'Hi',
//   otherState: 'some stuff',
//   otherStates: 'some others stuff'
// }

// const greeting = (state = defaultState, action) => {
//   const {type,name} = action
//   switch(type) {
//     case 'GREET_NAME': 
//       return { ...state, welcome: `Hello ${name}` };
//     case 'GREET_WORLD':
//       return { ...state, welcome: 'Hello World ' };
//     default:
//       return state;
//   }
// };
// const store = createStore(greeting);
// console.log(store.getState());
// const name = 'this is the data coming frm api';
// store.dispatch({
//   type: 'GREET_NAME',
//   name,
// });

// console.log(store.getState());

// store.dispatch({
//   type: 'GREET_NAME',
//   name: 'somename'
// });

// console.log(store.getState());