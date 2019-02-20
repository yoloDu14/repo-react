import React, {Component} from 'react';
import "./home.css"
import MenuAppBar from "../Menu/MenuAppBar";
import Switch from "react-router/es/Switch";
import {Redirect, Route} from "react-router";
import {Link} from "react-router-dom";
import User from "../User/User";
import {connect} from "react-redux";

class Home extends Component {
    render() {
        return (
            <div className={"home"}>
                { this.props.loggingIn ?
                    <div>
                        <MenuAppBar title="CLOUD BASED PAYMENT"/>
                        <Route exact path={"/"} render={() => <h1>Welcome to CLOUD BASED PAYMENT</h1>}></Route>
                        <Route exact path={"/user"} render={() => <Link to={"/user/titi"}>Ttiti</Link>}></Route>
                        <Route exact path={"/user/:username"} component={User}></Route>
                    </div>
                    :
                    <Redirect to={{pathname:"/login"}}/>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    console.log(state);
    return {
        loggingIn: state.authentication.loggingIn
    };
};

export default connect(
    mapStateToProps
)(Home)


