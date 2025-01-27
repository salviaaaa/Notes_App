import React, { useState, useEffect } from 'react';
import './styles/style.css';
import './styles/themes.css';
import './styles/animations.css';
import NoteList from './components/NoteList';
import NoteInput from './components/NoteInput';
import SearchBar from './components/SearchBar';
import { getInitialData } from './utils';

const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Write it on your heart that every day is the best day in the year. - Ralph Waldo Emerson",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Success is not final, failure is not fatal. - Winston Churchill",
  "Everything you can imagine is real. - Pablo Picasso"
];

const QuoteDisplay = ({ quote }) => (
  <>
    <div className="mascot-container">
      <img 
        src="https://i.pinimg.com/originals/4b/74/bb/4b74bbf5197ab483c311f6cb078c3ddb.gif"
        alt="Cute cat animation"
        className="quote-image"
      />
    </div>
    <div className="quote-container">
      <p className="quote-text">{quote}</p>
    </div>
  </>
);

const App = () => {
  const [notes, setNotes] = useState(getInitialData());
  const [searchKeyword, setSearchKeyword] = useState('');
  const [currentTheme, setCurrentTheme] = useState('default');
  const [showApp, setShowApp] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    // Animasi intro dengan timing yang lebih lama
    const timer = setTimeout(() => {
      setShowApp(true);
    }, 3500); // Memberikan waktu lebih untuk animasi penulisan
    
    // Rotasi quotes
    const quoteInterval = setInterval(() => {
      setCurrentQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearInterval(quoteInterval);
    };
  }, [currentTheme]);

  const handleThemeChange = (theme) => {
    setCurrentTheme(theme);
  };

  const addNote = ({ title, body }) => {
    const newNote = {
      id: +new Date(),
      title,
      body,
      archived: false,
      createdAt: new Date().toISOString(),
    };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
  };

  const toggleArchive = (id) => {
    const updatedNotes = notes.map(note => {
      if (note.id === id) {
        return { ...note, archived: !note.archived };
      }
      return note;
    });
    setNotes(updatedNotes);
  };

  const filteredNotes = notes.filter(note => 
    note.title.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  const onAddNote = (newNote) => {
    setNotes((prevNotes) => [
      ...prevNotes,
      { id: +new Date(), ...newNote, archived: false, createdAt: new Date().toISOString() },
    ]);
  };

  return (
    <>
      {!showApp && (
        <div className="intro-animation">
          <h1 className="app-title">Notes App</h1>
        </div>
      )}
      
      {showApp && (
        <div className={`note-app ${currentTheme}`}>
          <div className="theme-selector">
            <select 
              value={currentTheme} 
              onChange={(e) => handleThemeChange(e.target.value)}
            >
              <option value="navy-elegance">Navy Elegance</option>
              <option value="ocean-breeze">Ocean Breeze</option>
              <option value="desert-sand">Desert Sand</option>
              <option value="warm-vanilla">Warm Vanilla</option>
              <option value="midnight-blue">Midnight Blue</option>
            </select>
          </div>
          
          <QuoteDisplay quote={currentQuote} />

          <h1>Notes App</h1>
          <SearchBar keyword={searchKeyword} keywordChange={setSearchKeyword} />
          <NoteInput onAddNote={onAddNote} />
          <h2>Active Notes</h2>
          <NoteList 
            notes={filteredNotes.filter(note => !note.archived)}
            onDelete={deleteNote}
            onArchive={toggleArchive}
          />
          <h2>Archives</h2>
          <NoteList 
            notes={filteredNotes.filter(note => note.archived)}
            onDelete={deleteNote}
            onArchive={toggleArchive}
          />
        </div>
      )}
    </>
  );
};

export default App; 