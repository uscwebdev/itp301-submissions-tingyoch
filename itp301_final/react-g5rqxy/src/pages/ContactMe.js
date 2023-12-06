import React from 'react';
import { useState } from 'react';

export default function ContactMe() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [count, setCount] = useState('0');

  function handleSubmit(e) {
    var foundError = false;

    //NAME validation rules
    if (name.length == 0) {
      foundError = true;
      alert('Please enter a name.');
    } else if (name.indexOf(' ') == -1) {
      foundError = true;
      alert('You must provide a full name.');
    }

    //EMAIL validation rules
    if (email.length == 0) {
      foundError = true;
      alert('Please enter an email.');
    } else if (email.indexOf('@') == -1) {
      foundError = true;
      alert('Please enter a valid email.');
    }

    //COMMENT validation rules
    if (comment.length > 1000) {
      foundError = true;
      alert('Comments cannot exceed 1000 characters.');
    }

    if (foundError == false) {
      alert('Thank you for your submission!');
    }
  }

  return (
    <form id="contact-section-full" onSubmit={handleSubmit}>
      <div id="name-section">
        <label htmlFor="full-name">
          <h3>Full Name: </h3>
        </label>
        <div className="input-box">
          <input
            id="full-name"
            type="text"
            placeholder="Tommy Trojan"
            id="full-name"
            onChange={(e) => {
              setName(e.currentTarget.value);
            }}
            value={name}
          />
        </div>
      </div>
      <div id="email-section">
        <label htmlFor="email">
          <h3>Email: </h3>
        </label>
        <div className="input-box">
          <input
            id="email"
            type="text"
            placeholder="ttrojan@usc.edu"
            id="email-input"
            onChange={(e) => {
              setEmail(e.currentTarget.value);
            }}
            value={email}
          />
        </div>
      </div>
      <div id="comment-section">
        <label htmlFor="full-comment">
          <h3>Comment: </h3>
        </label>
        <div className="input-box">
          <textarea
            id="full-comment"
            onChange={(e) => {
              setComment(e.currentTarget.value);
              setCount(e.currentTarget.value.length);
            }}
            value={comment}
          ></textarea>
        </div>
        <h4>
          <small id="comment-count"> {count}/1000</small>
        </h4>
      </div>
      <div id="submit-section">
        <h4>
          <button type="submit"> Submit! </button>
        </h4>
      </div>
    </form>
  );
}
