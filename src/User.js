import React from 'react';
import './App.css';

function User(props) {
    const { data } = props;
    return (
        <div className="App">
            <h1>User Comonent</h1>
            <h2>name: {data.name}, age: {data.age}</h2>
        </div>
    );
}

export default User;
