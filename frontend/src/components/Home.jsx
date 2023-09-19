import React from "react";
import { useState } from "react";
import "../styles/home.css";
function Home() {
  const [text1,setText1]=useState("");
  const [text2,setText2]=useState("");
  function btnHnadler(){
    console.log(text1);
    console.log(text2);
    fetch("http://127.0.0.1:5000/",{
      method: 'POST',
      body: JSON.stringify({t1:text1,t2:text2}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((data)=>data.json())
    .then((res)=>console.log(res))
    .catch((err)=>{
      console.warn(err);
    })
  }
  return (
    <div className="home">
      <h1 className="heading">Plagiarism Checker</h1>
      <div className="content">
        <div className="text">
          <h4 className="text-heading">Text1</h4>
          <textarea  name="text1" id="text1" placeholder="Enter Text" onChange={(e)=>setText1(e.target.value)}/>
        </div>
        <div className="text">
          <h4 className="text-heading">Text2</h4>
          <textarea  name="text2" id="text2" placeholder="Enter Text" onChange={(e)=>setText2(e.target.value)}/>
        </div>
      </div>
      <div className="submit">
        <button className="btn" onClick={(e)=>btnHnadler(e)}>Check For Plagiarism</button>
      </div>
    </div>
  );
}

export default Home;
