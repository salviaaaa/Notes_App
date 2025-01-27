import React, { useState } from 'react';

const NoteInput = ({ onAddNote }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddNote({ title, body });
        setTitle('');
        setBody('');
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleBodyChange = (e) => {
        setBody(e.target.value);
    };

    return (
        <div className="note-input">
            <h2>Add New Note</h2>
            <p className="note-input__title__char-limit">
                Remaining characters: {50 - title.length}
            </p>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={handleTitleChange}
                maxLength={50}
            />
            <textarea
                placeholder="Write your note here..."
                value={body}
                onChange={handleBodyChange}
            />
            <button onClick={handleSubmit}>Add Note</button>
        </div>
    );
};

export default NoteInput; 