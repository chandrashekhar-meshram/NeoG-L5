import React, {useState} from "react";
import "./style.css";

export default function App() {
  const [userName, setUsernName] = useState("");
  const color = "green";
  
  const userNameHandler = (e) => {
    setUsernName(e.target.value);
    console.log(userName)
  }
  return (
    <div>
      <h1>Hello <span style={{color:color}}> StackBlitz!</span></h1>
      <input 
        style={{padding: "0.5rem"}} 
        placeholder="Write user name"
        onChange={userNameHandler}
      />
      <h1>Welcome {userName}</h1>
    </div>
  );
}
