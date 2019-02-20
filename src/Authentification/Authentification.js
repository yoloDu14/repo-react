import React, {Component} from 'react';
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";
import {authAction} from "../action/authAction";
import {sha512} from "js-sha512";
import Redirect from "react-router/es/Redirect";

class Authentication extends Component {
    state = {username: 'admin', password: 'admin'}

    onClickLogin() {
        this.props.dispatch(authAction.loginAction(this.state.username,sha512(this.state.password)));
    }
    onClickLogout() {
        this.props.dispatch(authAction.logoutAction());
    }

    onChange(e) {
        if(e.target.value === "") {
            return;
        }
        this.setState({
            username: e.target.value,
        });
        console.log(this.state.username)
    }

    onChangePwd(e) {
        if(e.target.value === "") {
            return;
        }
        this.setState({
            password: e.target.value,
        });
    }

    render() {
        console.log(this.props.loggingIn);
        return (
            <div>
                { this.props.loggingIn ?
                    <Redirect to={{pathname:"/"}}/>
                :
                    <div>
                        <TextField
                        id="username"
                        label="Username"
                        InputProps={{
                        startAdornment: (
                        <InputAdornment position="start">
                        <AccountCircle/>
                        </InputAdornment>
                        ),
                    }}
                        onChange={this.onChange.bind(this)}
                        value={this.state.username}
                        />
                        <TextField
                        id="password"
                        label="Password"
                        type={"password"}
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircle/>
                            </InputAdornment>
                        ),
                    }}
                        onChange={this.onChangePwd.bind(this)}
                        value={this.state.password}
                        />
                        <Button variant="contained" onClick={this.onClickLogin.bind(this)}>
                        Login
                        </Button>
                        <Button variant="contained" onClick={this.onClickLogout.bind(this)}>
                        Logout
                        </Button>
                    </div>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        loggingIn: state.authentication.loggingIn
    };
};

export default connect(
    mapStateToProps
)(Authentication)

