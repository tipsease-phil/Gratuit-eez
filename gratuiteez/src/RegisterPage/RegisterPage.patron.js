import React, { Component } from 'react';


class RegisterPage extends Component {
    state = {
        tipperProfile: {
            id: '',
            name: '',
            photo_url: '',
            email: '',
        }
    }

    componentDidMount() {
        this.setState({
            ...this.state,
            tipperProfile: {
                ...this.state.tipperProfile
            }
        })
    }

    handleChange = e => {
        this.setState({
            ...this.state,
            tipperProfile: {
                ...this.state.tipperProfile,
                [e.target.name]: e.target.value
            }
        })
    }

    regNewTipper = e => {
        e.preventDefault();
        this.props.regNewProfile(this.state.tipperProfile);
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h1>New Patron Profile</h1>
                <form>
                    <input type="number" name="id" value={this.state.tipperProfile.id} onChange={this.handleChange} placeholder="id number" />
                    <input type="text" name="name" value={this.state.tipperProfile.name} onChange={this.handleChange} placeholder="Name" />
                    <input type="file" name="photo_url" value={this.state.tipperProfile.photo_url} onChange={this.handleChange} placeholder="Photo" />
                    <input type="text" name="email" value={this.state.tipperProfile.email} onChange={this.handleChange} placeholder="Email" />
                    <button type="submit">Register</button>
                </form>
            </div>
        )
    }
}

    export default RegisterPage