import React, { useEffect } from "react";
import { useState,useRef } from "react";
import "../styles/home.css";

function Home() {
  const [text1,setText1]=useState("");
  const [text2,setText2]=useState("");
  const [score,setScore]=useState(-1);
  const refContainer = useRef(null);

useEffect(()=>{ 
  refContainer.current?.scrollIntoView({ behavior: "smooth" });
},[score])
  function btnHnadler(){
    refContainer.current?.scrollIntoView({ behavior: "smooth" });
    fetch("http://127.0.0.1:5000/",{
      method: 'POST',
      body: JSON.stringify({t1:text1,t2:text2}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((data)=>data.json())
    .then((res)=>setScore(res))
    .catch((err)=>console.warn(err))
  }
  return (
    <div className="home">
      <h3 className="heading">Enter Text1 and Text2</h3>
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
      
      {score!=-1 &&
      <p className="output-text" ref={refContainer} >The texts are <b>{score*100}%</b> similar</p>
      }
   
    </div>
  );
}

export default Home;
