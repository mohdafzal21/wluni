import React, { Component } from 'react';
import {Redirect}from 'react-router-dom'
import {withRouter} from 'react-router'

class Signup extends Component {
    state = { 
        email: '',
        password: '',
        redirectToReferrer : false
     }
     handleChange = input => e => {
         this.setState({
             [input] : e.target.value
         })

     }
     handleSubmit = (e)=>{
         e.preventDefault()
        this.props.registerHandler()
        this.signupFakeAuth()
     }
     signupFakeAuth = ()=>{
           this.setState({
            redirectToReferrer :true
           })
     }

    render() { 
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
                  onChange={this.handleChange('email')}
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
 
export default  withRouter(Signup);