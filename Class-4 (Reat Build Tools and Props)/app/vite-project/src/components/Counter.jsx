import React from "react";
import { useState } from "react";

function Counter() {
  let [count, setCount] = useState(10);

  // let inc = ()=>{ ̰
  //     setCount(count+1);
  // }
  // let dec = ()=>{
  //     setCount(count-1);
  // }

  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
          if(count>=20){
            setCount(20)
            alert("Value reached 20 cant be changed now!")
          }
        }}
      >
        {" "}
        Increment{" "}
      </button>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count - 1);
          if(count<=0){
            setCount(0)
            alert("Value reached 0 cant be changed now!")
          }
          
        }}
      >
        {" "}
        Decrement{" "}
      </button>
    </>
  );
}

export default Counter;
