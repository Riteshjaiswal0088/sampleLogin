import React, {useState} from "react";

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onChangeName = (event) => {
        setName(event.target.value);
    };

    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const onChangePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleRegister = () => {
        let userString = localStorage.getItem("users");
        let users = [];

        if (userString) {
            users = JSON.parse(userString);
        }

        const newUser = { name: name, email: email, password: password };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));

        setName("");
        setEmail("");
        setPassword("");
    }


    return(
        <div>
            <div className="row">
            <div className="col"></div>
            <div className="col">
                <div className="card mt-5">
                        <h5 className="card-title text-center">Register</h5>
                        <div className="mb-3">
                            <label htmlFor="text">Name</label>
                            <input type="text" 
                            className="form-control"
                            value={name} 
                            onChange={onChangeName}/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email">Email</label>
                            <input type="email" 
                            className="form-control"
                            value={email} 
                            onChange={onChangeEmail}/>
                        </div>
                        
                        <div className="mb-3">
                            <label htmlFor="password">Password</label>
                            <input type="password" 
                            className="form-control"
                            value={password} 
                            onChange={onChangePassword}/>
                        </div>
                        
                            <button disabled={!email || !password || !name}
                            onClick={handleRegister}
                            className="btn btn-primary form-control" >
                            Register
                            </button>

                    </div>
                </div>
                <div className="col"></div>
            </div>
        </div>
    );
};
export default Register;