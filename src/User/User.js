import React, {Component} from 'react';
import "./User.css"

class User extends Component {

    render() {
        console.log(this.props.match.params.username);
        return (
            <div className={"user"}>
                <h1>User</h1>
            </div>
        );
    }
}

export default User;
