import React from "react";
import "./style.css";

export default function App() {
 
  const color = "green";

  return (
    <div>
      <h1>Hello <span style={{color:color}}> StackBlitz!</span></h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
