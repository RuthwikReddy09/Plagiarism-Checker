import React from "react";
import "../styles/home.css";
function Home() {
  return (
    <div className="home">
      <h1 className="heading">Plagiarism Checker</h1>
      <div className="content">
        <div className="text">
          <h4 className="text-heading">Text1</h4>
          <textarea  name="text1" id="text1" placeholder="Enter Text"/>
        </div>
        <div className="text">
          <h4 className="text-heading">Text2</h4>
          <textarea  name="text2" id="text2" placeholder="Enter Text"/>
        </div>
      </div>
      <div className="submit">
        <a href="#" className="btn">Check For Plagiarism</a>
      </div>
    </div>
  );
}

export default Home;
