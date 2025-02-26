import React from "react";
import { useState , useEffect } from "react";

function Ue() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const inc = () => {
    setCount(count + 1);
  };

  const dec = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    // Update the document title using the browser API
    document.title = ` ${count} times`;
    console.log("useEffect");
  },[count]);

  return (
    <div>
      <button onClick={inc}>Increment</button> 
      <h2>{count}</h2>{" "}
      <button onClick={dec}>Decrement</button>

      <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
      <h3>{text}</h3>
    </div>
  );
}

export default Ue;
