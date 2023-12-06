import React from 'react';
import { useState } from 'react';

export default function Like() {
  const [like, setLike] = useState(0);

  function handleIncrementAdd() {
    setLike(like + 1);
  }

  return (
    <div className="likes">
      <button className="text" onClick={handleIncrementAdd}>
        <img
          id="likes-pic"
          src="https://cdn-icons-png.flaticon.com/512/81/81250.png"
          alt="thumbs-up"
        ></img>
      </button>
      <h4>{like}</h4>
    </div>
  );
}
