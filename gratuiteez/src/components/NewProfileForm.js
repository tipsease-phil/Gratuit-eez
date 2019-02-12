import React from 'react';

class NewProfileForm extends React.Component {
    state = {
        userData: {
            name: '',
            company: '',
            //photo_url: '',
            email: '',
            tagline: '',
            username: '',
        }
    }

    componentDidMount() {
        this.state({
            ...this.state,
            userData: {
                ...this.state.userData,
                username: this.props.username
            }
        })
    }

    handleChange = e => {
        this.setState({
            userData: {
                ...this.state.userData,
                [e.target.name]: e.target.value
            }
        })
    }

    addProfile = e => {
        e.preventDefault();
        this.props.createPofile(this.state.userData);
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <h1>Create A New Profile</h1>
                <form onSubmit={this.addProfile}>
                    <input type="text" name="name" value={this.state.userData.name} onChange={this.handleChange} placeholder="Name" />
                    <input type="text" name="company" value={this.state.userData.company} onChange={this.handleChange} placeholder="Employer" />
                    <input type="email" name="email" value={this.state.userData.email} onChange={this.handleChange} placeholder="Email Address" />
                    <input type="text" name="tagline" value={this.state.userData.tagline} onChange={this.handleChange} placeholder="Tagline" />
                    <button type="submit">Submit Profile</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    username: state.userReducer.username
})

export default connect(mapStateToProps, {createProfile})(NewProfileForm);