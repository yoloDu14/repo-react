import React, { Component } from 'react';
import './App.css';
import Home from "./Home/home";
import Authentication from "./Authentification/Authentification";
import {connect} from "react-redux";
import {Route} from "react-router";
import {BrowserRouter} from "react-router-dom";


// const styles = theme => ({
//   button: {
//     margin: theme.spacing.unit,
//   },
//   input: {
//     display: 'none',
//   },
// });

class App extends Component {

  render() {
      console.log("render app")
      console.log(this.props.loggingIn)
    return (
      <div className="App">
        <BrowserRouter>
            <div>
                <Route exact path={"/login"} component={Authentication}></Route>
                <Route path="/" component={Home}></Route>
            </div>
        </BrowserRouter>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  loggingIn: state.authentication.loggingIn
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
