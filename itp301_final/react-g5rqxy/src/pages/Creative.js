import React from 'react';
import Like from './Like.js';

export default function Creative() {
  return (
    <div className="section-full">
      <div className="sub-section-container">
        <a
          href="https://docs.google.com/document/d/1JxdiYpwl9dgFbuRnVtV7N5krsuGQzcr7xvzj0ElQrLs/edit?usp=sharing"
          target="_blank"
        >
          <div className="pdf-photo">
            <img
              src="https://github.com/uscwebdev/itp301-submissions-tingyoch/blob/gh-pages/itp301_final/img/creative_timeTravelInNy.png?raw=true"
              className="vertical-pic"
              alt="creative-work-1-view"
            ></img>
          </div>
        </a>
        <a
          href="https://docs.google.com/document/d/1JxdiYpwl9dgFbuRnVtV7N5krsuGQzcr7xvzj0ElQrLs/edit?usp=sharing"
          target="_blank"
        >
          <h3>Time Travel in NYC</h3>
        </a>
        <Like />
      </div>

      <div className="sub-section-container">
        <a
          href="https://docs.google.com/document/d/1rIh87NG5HTyb2YuindGJAnuVx7QEXlCowc9eSknLD-I/edit?usp=sharing"
          target="_blank"
        >
          <div className="pdf-photo">
            <img
              src="https://github.com/uscwebdev/itp301-submissions-tingyoch/blob/gh-pages/itp301_final/img/creative_motherAndMe.png?raw=true"
              className="vertical-pic"
              alt="creative-work-1-view"
            ></img>
          </div>
        </a>
        <a
          href="https://docs.google.com/document/d/1rIh87NG5HTyb2YuindGJAnuVx7QEXlCowc9eSknLD-I/edit?usp=sharing"
          target="_blank"
        >
          <h3>My Mother & Me</h3>
        </a>
        <Like />
      </div>

      <div className="sub-section-container">
        <a
          href="https://docs.google.com/document/d/1rD-S2fr5nWVzR0xd-FqipDcvx6Osa9vB_RP_QAeUOS0/edit?usp=sharing"
          target="_blank"
        >
          <div className="pdf-photo">
            <img
              src="https://github.com/uscwebdev/itp301-submissions-tingyoch/blob/gh-pages/itp301_final/img/creative_loveLanguages.png?raw=true"
              className="vertical-pic"
              alt="creative-work-1-view"
            ></img>
          </div>
        </a>
        <a
          href="https://docs.google.com/document/d/1rD-S2fr5nWVzR0xd-FqipDcvx6Osa9vB_RP_QAeUOS0/edit?usp=sharing"
          target="_blank"
        >
          <h3>Love Languages</h3>
        </a>
        <Like />
      </div>
    </div>
  );
}
