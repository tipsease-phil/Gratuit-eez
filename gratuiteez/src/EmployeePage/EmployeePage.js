import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Employee from '../components/Employee';

const EmployeePage = props => {
    return(
        <div>
            <h1>Employee Page</h1>
                <Route exact path="/" component={<Employee {...props} employee={tippeeProfile} />} />
        </div>
    )
}

const mapStateToProps = state => ({
    userProfile: state.userReducer.userProfile
})

export default connect(mapStateToProps)(EmployeePage);