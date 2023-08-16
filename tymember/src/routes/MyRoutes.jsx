import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from '../components/Login';
import User from '../components/User';
import { members } from '../components/Member';
import Template from '../components/Template';
import MemberTable from './MemberTable';
import EditPhoto from '../components/EditPhoto';

const MyRoutes = () => {
    const [myMembers, setMyMembers] = useState(members);
    const [loggedInMemberId, setLoggedInMemberId] = useState(null);

    const navigate = useNavigate();

    const handleLogin = (id) => {
        setLoggedInMemberId(id);
        navigate('/members');
    };

    const handleEditPhoto = (newImageUrl) => {
        console.log(newImageUrl)
        const updatedMembers = myMembers.map(member =>
            member.id === loggedInMemberId ? { ...member, image: newImageUrl } : member
        );
        console.log(loggedInMemberId);
        setMyMembers(updatedMembers);
        navigate(`/members/${loggedInMemberId}`);

    };

    return (
        <Routes>
            <Route element={<Template></Template>}>
                <Route path='/login' element={<Login members={myMembers} handleLogin={handleLogin} />}></Route>
                <Route path='/members' element={<User members={myMembers}> </User>}></Route>
                <Route path='/members/:id' element={<MemberTable members={myMembers} onEditPhoto={handleEditPhoto}></MemberTable>}></Route>
                <Route path='/members/:id/edit-photo' element={<EditPhoto onSave={handleEditPhoto} />}></Route>
            </Route>
        </Routes>
    );
}

export default MyRoutes;
