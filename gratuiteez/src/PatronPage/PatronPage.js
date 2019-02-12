import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

const PatronPage = props => {
    const users = props.users;
    return (
        <div>
            <Route exact path="/" component={<EmployeeList {...props} users={users} />} />
            <Route path={"/tippee/:id"} component={<Employee {...props} />} />
        </div>
    )
}

const mapStateToProps = state => ({
    users: state.userReducer.users
});

export default connect(mapStateToProps)(PatronPage);