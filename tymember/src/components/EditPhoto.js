import React, { useState } from "react";

const EditPhoto = ({ onSave }) => {
    const [newImageUrl, setNewImageUrl] = useState("");

    const handleSave = () => {
        onSave(newImageUrl);
    };

    return (
        <div>
            <h2>Edit Photo for Member</h2>
            <input
                type="text"
                value={newImageUrl}
                onChange={(e) => setNewImageUrl(e.target.value)}
                placeholder="Enter new image URL"
            />
            <button onClick={handleSave}>Save</button>
        </div>
    );
};

export default EditPhoto;
