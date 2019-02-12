import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.login()
    }

    render() {
        return (
            <div>
                <h2>Login</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                   <input type="text" name="username" value={this.state.username} onChnage={this.handleChange} placeholder="username" />
                   <input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="password" />
                   <button type="submit">Login</button>
                </form>
                <p>New User? <Link to="/">Join Here</Link></p>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    username: state.userReducer.username,
    password: state.userReducer.password
});

export default connect(mapStateToProps)(LoginPage);