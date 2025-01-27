import React from 'react';

const DeleteConfirmation = ({ onConfirm, onCancel }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <img 
          src="https://cdn-icons-png.flaticon.com/512/4201/4201973.png" 
          alt="warning"
        />
        <h2>Are you sure?</h2>
        <p>Once Deleted, Your Note Totally Removed!</p>
        <div className="popup-buttons">
          <button onClick={onCancel}>
            No, cancel!
          </button>
          <button onClick={onConfirm}>
            Yes, delete it!
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmation; 