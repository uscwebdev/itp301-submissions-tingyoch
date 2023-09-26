import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

const root = createRoot(document.querySelector('#root'));

root.render(
  <React.StrictMode>
    <div id="heading">
      <h1>Tingyo Chang</h1>
      <p>
        <a href="mailto:tingyoch@usc.edu">tingyoch@usc.edu</a>
      </p>
    </div>

    <div className="columns">
      <button id="color-btn" onClick={'cornflowerblue'}>
        Favorite Color!
      </button>

      <h3>Favorite Website:</h3>
      <a href="https://www.youtube.com/">Youtube</a>

      <h3>Favorite Activity:</h3>
      <img
        src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/36009/child-boy-swim-clipart-md.png"
        alt="Swimming!"
      />
    </div>
    <div className="columns">
      <h3>Fall 2023 Classes</h3>
      <ul>
        <li>AMST 101</li>
        <li>CTCS 393</li>
        <li>ENGL 362</li>
        <li>ENGL 426</li>
        <li>ITP 301</li>
      </ul>
    </div>
  </React.StrictMode>
);
