import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import React, {Component} from 'react';
import {connect} from 'react-redux';

function mapStateToProps(state) {
    return {};
}

class PrivateRoute extends Component {

    constructor(component) {
        super();
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(PrivateRoute);
