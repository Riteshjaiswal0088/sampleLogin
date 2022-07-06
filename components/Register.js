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
            <div>
                <label>Name</label>
                <input type="text" value={name} onChange={onChangeName}></input>
            </div>

            <div>
                <label>Email</label>
                <input type="text" value={email} onChange={onChangeEmail}></input>
            </div>

            <div>
                <label>Password</label>
                <input type="password" value={password} onChange={onChangePassword}></input>
            </div>

            <div>
                <button disabled={!email || !password || !name}
                onClick={handleRegister} >
                    Register</button>
            </div>
        </div>
    );
};
export default Register;