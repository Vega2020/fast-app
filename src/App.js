import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is going to be the FAST app.
        </p>
        <a
          className="App-link"
          href="http://scholar.google.com/scholar_url?url=http://www.academia.edu/download/43254871/RELIABILITY_AND_VALIDITY_OF_THE_FUNCTION20160301-17957-yksq2t.pdf&hl=en&sa=X&ei=tdOlX8TzFsS9yQSqh5jIAQ&scisig=AAGBfm157K3aEe6pyssgQLmlvnjzeHNX0w&nossl=1&oi=scholarr"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn about the Functional Assessment Screening Tool
        </a>
      </header>
    </div>
  );
}

export default App;
