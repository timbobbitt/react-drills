import React, {Component} from "react";
class Login extends Component {
    constructor(){
        super();

        this.state = {
            username: "",
            password: ""
        };

        this.inputLogin = this.inputLogin.bind(this);
    }
        
        userNameChange(name) {
            this.setState({username: name});
        }
        passwordChange(pass) {
            this.setState({password: pass})
        }
        inputLogin() {
            alert(`Username: ${this.state.username} Password: ${this.state.password}`);
        }

    render () {
        return (
            <div>
                <input onChange={element => this.userNameChange(element.target.value)} type = "text" />
                <input onChange={element => this.passwordChange(element.target.value)}></input>
                <button onClick={this.inputLogin}> Login </button>
            </div>
        );
    }
}

export default Login;