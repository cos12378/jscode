import React from 'react';
import { useParams } from 'react-router-dom';

const User = ({ members }) => {
    const params = useParams();
    const user = members.find(u => params.name === u.name);
    console.log(members);
    console.log(useParams());
    return (
        <ul>
            <li>{user?.name}</li>
            <li>{user?.id}</li>
            <li>{user?.number}</li>
        </ul>
    );
}

export default User;
