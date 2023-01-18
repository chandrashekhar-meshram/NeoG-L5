import React, { useState } from 'react';
import './style.css';

const emojiDictionary = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance" 
};

const emojis = Object.keys(emojiDictionary);

export default function App() {
  const [emoji, setEmoji] = useState('');
  const [meaning, setMeaning] = useState("Translation will appear here.....");
  const color = 'green';

  const changeHandler = (e) => {
    const inputEmoji = e.target.value;
    setEmoji(inputEmoji);

    if(inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning("Failed! to recognise this emoji");
    }
  }

  const emojiClickHandler = (item) => {
    setMeaning(emojiDictionary[item]); //item = inputEmoji
  };

  return (
    <div>
      <h1>
        <span style={{ color: color, textDecoration:"underline" }}> Emogi 😊</span> Interpreter App
      </h1>
      <div>
        <input 
          style={{padding:"1rem",minWidth:"70%", marginBottom:"0.5rem"}} 
          value={emoji}
          onChange={changeHandler}
          placeholder={"put an emoji here to know the meaning"}
        />
      </div>
      
      <h2 style={{textAlign:"center"}}> {emoji} </h2>
      <h3 style={{textAlign:"center"}}> {meaning} </h3>

      {
        emojis.map((item) => (
          <span
            style={{fontSize:'2rem', padding:"0.7rem", cursor:"pointer"}}
            onClick={()=>emojiClickHandler(item)} 
          >
            {item}
          </span>
        ))
      }
    </div>
  );
}
