import React, { useState } from 'react';
import { showFormattedDate } from '../utils';
import NoteItem from './NoteItem';
import DeleteConfirmation from './DeleteConfirmation';

function NoteList({ notes, onDelete, onArchive }) {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [noteToDelete, setNoteToDelete] = useState(null);

  const handleDeleteClick = (noteId) => {
    setNoteToDelete(noteId);
    setShowDeleteConfirm(true);
  };

  const handleConfirmDelete = () => {
    onDelete(noteToDelete);
    setShowDeleteConfirm(false);
    setNoteToDelete(null);
  };

  if (notes.length === 0) {
    return <p className="notes-list__empty-message">No notes found</p>;
  }

  return (
    <>
      <div className="notes-list">
        {notes.map((note) => (
          <div key={note.id} className="note-item">
            <h3 className="note-item__title">{note.title}</h3>
            <p className="note-item__date">{showFormattedDate(note.createdAt)}</p>
            <p className="note-item__body">{note.body}</p>
            <div className="note-item__action">
              <button
                className="note-item__delete-button"
                onClick={() => handleDeleteClick(note.id)}
              >
                Delete
              </button>
              <button
                className="note-item__archive-button"
                onClick={() => onArchive(note.id)}
              >
                {note.archived ? 'Unarchive' : 'Archive'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {showDeleteConfirm && (
        <DeleteConfirmation
          onConfirm={handleConfirmDelete}
          onCancel={() => setShowDeleteConfirm(false)}
        />
      )}
    </>
  );
}

export default NoteList; 