import React from 'react';
import './User.css';


const User = (props) => {
    const {name, img, email, salary} = props.user;
    const addFriend = props.addFriend;
    return (
     <div className="main-container">
            <div className="container">
            <img style={{height:'150px'}} src={img} alt=""/>
            <h4>This is: {name}</h4>
                <p> Salary: {salary}</p>
                <p> Email: {email}</p>
            <button onClick={()=> addFriend(props.user)}>Add Friend</button>

        </div>
     </div>
    );
};

export default User;