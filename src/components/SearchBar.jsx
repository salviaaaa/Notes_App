import React from 'react';

function SearchBar({ keyword, keywordChange }) {
  return (
    <div className="note-search">
      <input
        type="text"
        placeholder="Search notes..."
        value={keyword}
        onChange={(e) => keywordChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar; 