import React, {Component} from 'react';

class Login extends Component {
    constructor () {
        super ()

        this.state = {
            username: '',
            password: '',
        }
    }

    handleUsername = (event, value) => {
        this.setState({
            username: event.target.value
        })
    }

    handlePassword = (event, value) => {
        this.setState({
            password: event.target.value
        })
    }

    handleLogin = () => {
        return alert(`Username: ${this.state.username}
Password: ${this.state.password}`)
    }

    render () {
        return (
            <div>
                <input 
                    onChange={this.handleUsername} 
                    placeholder='Username'/>
                <input 
                    onChange={this.handlePassword} 
                    placeholder='Password'
                    type='password'/>
                <button onClick={this.handleLogin}>Login</button>
            </div>
        )
    }
}

export default Login;