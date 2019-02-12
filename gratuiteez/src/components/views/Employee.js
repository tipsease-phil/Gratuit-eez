import React from 'react';
import { connect } from 'react-redux';

class Employee extends React.Component {
    
    getTippee = id => {
        this.props.getProfile(id);
    }

    componentDidMount() {
        this.fetchEmployee();
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    userData: state.userReducer.userData
});

export default connect(mapStateToProps, {getProfile})(Employee);