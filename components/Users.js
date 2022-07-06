import React, {useState, useEffect} from "react";


const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const userString = localStorage.getItem("users");
        if (userString) {
            setUsers(JSON.parse(userString));    
        }
    }, []);

    const usersLi = users.map((user) => {
        return(
            <li>
                {user.name} {user.email}
            </li>
        );
    });
    return(
        <ul>
            {usersLi}
        </ul>
    );
};
export default Users;