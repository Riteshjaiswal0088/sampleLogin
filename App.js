import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Users from "./components/Users";
const App = () => {
    return(
        <div className="App">
            <Router>
                <Navbar />
                <Switch>
            <Register />
        <Login />
        <Users />
        </Switch>
            </Router>
        </div>
    );
};

export default App;