import React,{useState} from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = (event) => {
        const userString = localStorage.getItem("users");
        let users = [];

        if (userString) {
            users = JSON.parse(userString);
        }
        console.log("users:", users);

        if( users.find((user) => user.email === email && user.password === password))
        {
            console.log("login successful");
        }    else {
                console.log("Enter user name or password id wrong");
            }
        }
        
    return(
        <div>
            <div>
                <label>Email</label>
                <input type="email" value={email} onChange={handleEmailChange}></input>
            </div>

            <div>
                <label>Passwords</label>
                <input type="password" value={password} onChange={handlePasswordChange}></input>
            </div>

            <div>
                <button disabled={ !email || !password } onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
};
export default Login;