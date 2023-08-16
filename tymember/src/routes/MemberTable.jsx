import React from 'react';
import { Link } from 'react-router-dom';

const MemberTable = ({ members, onEditPhoto, newImageurl }) => {
    return (
        <div>
            <h2>Member List</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Number</th>
                        <th>Image</th>
                        <th>Edit Photo</th>
                    </tr>
                </thead>
                <tbody>
                    {members.map((member) => (
                        <tr key={member.id}>
                            <td>{member.id}</td>
                            <td>

                                <Link to={`/members/${member.id}/edit-photo`}>{member.name}</Link>
                            </td>
                            <td>{member.number}</td>
                            <td>
                                <img src={member.image} alt={member.name} />
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MemberTable;
