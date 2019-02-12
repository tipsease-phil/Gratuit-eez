import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import EmployeePage from '../EmployeePage/EmployeePage';
import PatronPage from './PatronPage';

class HomePage extends Component {
    componentDidMount() {
        this.props.getProfile();
    }

    render() {
        return (
            <div>
                {this.props.userType === "employee" ? (
                    <Route path="/" component={<EmployeePage />} />
                ) : (
                    <Route path="/" component={<PatronPage />} />
                )}
                    <Link to="/login">Logout</Link>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        userType: state.userReducer.userType
    };
}

export default connect(mapStateToProps)(HomePage);