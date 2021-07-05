import React, { Component } from 'react'
import { connect } from 'react-redux';
import axios from 'axios';
class TippeeList extends Component {
    state = {
        tippees: [],
        error: ''
    };

    componentDidMount() {
        axios
        .get('https://tipsease-david-freitag-backend.herokuapp.com/api/tippees')
        .then(res => {this.setState({ tippees: res.data})
        })
        .catch(err => {this.setState9({ error: err.response.data})
        });
    }

    render() {
        return (
            <div>
                <h1>Employees</h1>
                {this.state.tippees.map(tippee => {
                    return (
                        <div>
                        {tippee.first_name}
                        </div>
                        )
                })}
            </div>
        )
    }
}


export default TippeeList