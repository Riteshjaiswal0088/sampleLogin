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

    const handleLogin = () => {
        const usersString = localStorage.getItem("users");
        let users = [];

        if (usersString) {
            users = JSON.parse(usersString);
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
            <div className="row">
                <div className="col"></div>
                <div className="col">
                    <div className="card mt-5">
                        <h5 className="card-title text-center">Login</h5>  
                        <div className="mb-3">
                            <label htmlFor="email">Email</label>
                            <input type="email" 
                            className="form-control"
                            value={email} 
                            onChange={handleEmailChange}/>
                        </div>
                        
                        <div className="mb-3">
                            <label htmlFor="password">Password</label>
                            <input type="password" 
                            className="form-control"
                            value={password} 
                            onChange={handlePasswordChange}/>
                        </div>
                        
                        <button disabled={ !email || !password } onClick={handleLogin} 
                        className="btn btn-primary form-control">Login</button>
                    </div>
                </div>
                <div className="col"></div>
            </div>
        </div> 
    );
};
export default Login;