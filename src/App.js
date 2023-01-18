import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [userName, setUsernName] = useState('');
  const color = 'green';

  const likeHandlerBtn = () => {
    console.log('like button clicked');
  };
  return (
    <div>
      <h1>
        Hello <span style={{ color: color }}> StackBlitz!</span>
      </h1>
      <button onClick={likeHandlerBtn}>Like</button>
      <h1>Welcome {userName}</h1>
    </div>
  );
}
