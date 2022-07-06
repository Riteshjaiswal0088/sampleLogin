import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Login from "./components/Login";
import Users from "./components/Users";
const App = () => {
    return(
        <div className="App">
            <Router>
                <Navbar />
                <div className="container"> 
                <Switch>
            <Route exact path="/"><Register /></Route> 
            <Route exact path="/login"><Login /></Route>
            <Route exact path="/user"><Users /></Route>
                </Switch>
                </div>
            </Router>
        </div>
    );
};

export default App;