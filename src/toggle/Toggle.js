
import React, { Component } from 'react';
import {connect} from 'react-redux'
import {toggleMessage} from './actions'
import {bindActionCreators} from 'redux'
const Toggle = ({messageVisibility,toggleMessage}) =>(
    <div>
        { messageVisibility && 
        <p>Onclick this messaage will be shown</p>
        }
        <button onClick={toggleMessage}>Toggle</button>
    </div>
)
const mapStateToProps = state =>({
    messageVisibility : state.toggle.messageVisibility,
})
const mapDispatchToProps = dispatch => bindActionCreators ({
    toggleMessage,
    
},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(Toggle)