import React, { Component } from 'react';
import {BrowserRouter as Router, Route,Switch, Redirect, Link}from 'react-router-dom'
import {withRouter} from 'react-router'
class Login extends Component {
    state = { 
        email: '',
        password: '',
        redirectToReferrer: false
     }
     handleChange = input => e => {
         console.log(e)
         this.setState({
             [input] : e.target.value
         })

     }
     handleSubmit = (e) =>{
        e.preventDefault();

        this.props.loginHandler()
        this.fakeAuth()
        // this.props.history.push('/')  
     }

     fakeAuth =()=>{
         this.setState({
            redirectToReferrer : true
         })
     }

    render() { 
        console.log(this.props)
        const { from } = this.props.location.state || { from: { pathname: '/' } }
        const { redirectToReferrer } = this.state
    
        if (redirectToReferrer === true) {
          return <Redirect to={from} />
        }
    
        return ( 
            <form onSubmit={this.handleSubmit}>
                <input placeholder="enter email" 
                 type = "email"
                  value={this.state.email}
                  onChange= {this.handleChange('email')}
                />
                  <input placeholder="enter password" 
                  type ="password"
                  value={this.state.password}
                  onChange={this.handleChange('password')}
                />
                <button type="submit">Submit</button>
            </form>
         );
    }
}
 
export default withRouter(Login);