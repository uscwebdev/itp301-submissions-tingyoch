import React from 'react';
import Like from './Like.js';

export default function Creative() {
  return (
    <div className="section-full">
      <div className="sub-section-container">
        <a
          href="https://docs.google.com/document/d/1r4LlfATqRH9NdoRUeSp2tLSZQZd44qDoEq7Sk4vyNh0/edit?usp=sharing"
          target="_blank"
        >
          <div className="pdf-photo">
            <img
              src="https://github.com/uscwebdev/itp301-submissions-tingyoch/blob/gh-pages/itp301_final/img/analytic_multiuniversal.png?raw=true"
              className="vertical-pic"
              alt="analytic-work-1-view"
            ></img>
          </div>
        </a>
        <a
          href="https://docs.google.com/document/d/1r4LlfATqRH9NdoRUeSp2tLSZQZd44qDoEq7Sk4vyNh0/edit?usp=sharing"
          target="_blank"
        >
          <h3>Multi-universal and Multi-Faceted</h3>
        </a>
        <Like />
      </div>

      <div className="sub-section-container">
        <a
          href="https://docs.google.com/document/d/1aSPg6Fd0Nu5FUJuJhmG6TwWOUutPlnVbsy506QZ6mxU/edit?usp=sharing"
          target="_blank"
        >
          <div className="pdf-photo">
            <img
              src="https://github.com/uscwebdev/itp301-submissions-tingyoch/blob/gh-pages/itp301_final/img/analytic_mulyana.png?raw=true"
              className="vertical-pic"
              alt="analytic-work-1-view"
            ></img>
          </div>
        </a>
        <a
          href="https://docs.google.com/document/d/1aSPg6Fd0Nu5FUJuJhmG6TwWOUutPlnVbsy506QZ6mxU/edit?usp=sharing"
          target="_blank"
        >
          <h3>Mulyana: Modular Utopia</h3>
        </a>
        <Like />
      </div>

      <div className="sub-section-container">
        <a
          href="https://docs.google.com/document/d/1T_pAtGi2z3BLM2gpYnituyEvoIB1uIqkH1Fp8jxpd6I/edit?usp=sharing"
          target="_blank"
        >
          <div className="pdf-photo">
            <img
              src="https://github.com/uscwebdev/itp301-submissions-tingyoch/blob/gh-pages/itp301_final/img/analytic_neoliberalism.png?raw=true"
              className="vertical-pic"
              alt="analytic-work-1-view"
            ></img>
          </div>
        </a>
        <a
          href="https://docs.google.com/document/d/1T_pAtGi2z3BLM2gpYnituyEvoIB1uIqkH1Fp8jxpd6I/edit?usp=sharing"
          target="_blank"
        >
          {' '}
          <h3>Neoliberalism in Television</h3>
        </a>
        <Like />
      </div>
    </div>
  );
}
