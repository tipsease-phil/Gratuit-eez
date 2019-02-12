import React, { Component } from 'react';

import { regNewTippee } from '../actions';


class RegisterPage extends Component {
    state = {
        tippeeProfile: {
            name: '',
            company: '',
            photo_url: '',
            start_date: '',
            email: '',
            tagline: '',
            qr_url: '',
        }
    }

    componentDidMount() {
        this.setState({
            ...this.state,
            tippeeProfile: {
                ...this.state.tippeeProfile
            }
        })
    }

    handleChange = e => {
        this.setState({
            ...this.state,
            tippeeProfile: {
                ...this.state.tippeeProfile,
                [e.target.name]: e.target.value
            }
        })
    }

    regNewTippee = e => {
        e.preventDefault();
        this.props.regNewTippee(this.state.tippeeProfile);
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h1>New Employee Profile</h1>
                <form onSubmit={this.regNewProfile}>
                    <input type="text" name="name" value={this.state.tippeeProfile.name} onChange={this.handleChange} placeholder="Name" />
                    <input type="text" name="company" value={this.state.tippeeProfile.company} onChange={this.handleChange} placeholder="Company" />
                    <input type="file" name="photo_url" value={this.state.tippeeProfile.photo_url} onChange={this.handleChange} placeholder="Photo" />
                    <input type="text" name="start_date" value={this.state.tippeeProfile.startDate} onChange={this.handleChange} placeholder="Start Date" />
                    <input type="text" name="email" value={this.state.tippeeProfile.email} onChange={this.handleChange} placeholder="Email" />
                    <input type="text" name="tagline" value={this.state.tippeeProfile.tagline} onChange={this.handleChange} placeholder="Tagline" />
                    <input type="file" name="qr_url" value={this.state.tippeeProfile.qr_url} onChange={this.handleChange} placeholder="QR Code Url" />
                    <button type="submit">Register</button>
                </form>
            </div>
        )
    }
}


export default RegisterPage
    