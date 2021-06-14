import React from 'react';
import './style.css';

const User = ({ name, email }) => (
    <div className='user'>
        Name: {name} <br />
        Email : {email}
    </div>
);

export default User;