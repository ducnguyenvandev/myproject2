import React, { Component } from 'react';
import LoginA from './LoginForm1/LoginA';
import LoginB from './LoginForm2/LoginB';
class ActiveForm extends Component {
    
    constructor(props) {
        super(props);
        this.state = { isShowLogin: false };
      } 
      callbackFunction = (ShowLogin) => {
        this.setState({isShowLogin: ShowLogin})
      }
      
      showLogin() {      
        if(this.state.isShowLogin === true){
            return (
                <LoginB showLogin = {this.callbackFunction}/>
            )
        }else{
            return (
                <LoginA showLogin = {this.callbackFunction}/>
            )
        }
      }

    render() {
        return (
            <div>{this.showLogin()}</div>
        );
    }
    
}

export default ActiveForm;