import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";

function App() {

    let [users, setUsers] = useState([])

    const getUsers = () => {
        axios.get('http://localhost:4848/users')
            .then(res => {
                setUsers(res.data)})
    }

    const onCreateUser = () => {
        axios.post('http://localhost:4848/users')
            .then(res => {
                getUsers()
            })
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div>
            <button onClick={onCreateUser}>create user</button>
            <div>{users.map(({name}) => <div>{name}</div>)}</div>
        </div>
    );
}

export default App;
