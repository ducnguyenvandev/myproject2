import React, { Component } from 'react';
import './main.css';
import './util.css';
class LoginB extends Component {
    showFormLoginB = () =>{
        this.props.showLogin(false);
        console.log("A");
    }
    getvalFromForm = () =>{
        console.log(this.refs.username.value);
    }
    render() {
        return (          
            <div className="limiter">
                <div className="container-login100">
                <div className="wrap-login100">
                    <form className="login100-form validate-form p-l-55 p-r-55 p-t-178">
                    <span className="login100-form-title">
                        Sign In
                    </span>
                    <div className="wrap-input100 validate-input m-b-16" data-validate="Please enter username">
                        <input className="input100" type="text" name="username" placeholder="Username" ref="username"/>
                        <span className="focus-input100" />
                    </div>
                    <div className="wrap-input100 validate-input" data-validate="Please enter password">
                        <input className="input100" type="password" name="pass" placeholder="Password" ref="password"/>
                        <span className="focus-input100" />
                    </div>
                    <div className="text-right p-t-13 p-b-23">
                        <span className="txt1">
                        Forgot
                        </span>
                        <a href="#" className="txt2">
                        Username / Password?
                        </a>
                    </div>
                    <div className="container-login100-form-btn">
                        <button className="login100-form-btn" onClick={(e) => this.showFormLoginB(this, e)} >
                        Sign in
                        </button>
                    </div>
                    <div className="container-login100-form-btn">
                        <button className="login100-form-btn" onClick={(f) => this.getvalFromForm(this, f)} >
                        Send User and Password
                        </button>
                    </div>
                    <div className="flex-col-c p-t-170 p-b-40">
                        <span className="txt1 p-b-9">
                        Don’t have an account?
                        </span>
                        <a href="#" className="txt3">
                        Sign up now
                        </a>
                    </div>
                    </form>
                </div>
                </div>
            </div>
        );
    }
}

export default LoginB;