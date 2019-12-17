import React from 'react';
import logo from './logo.svg';
import facebook from './facebook.svg';
import linkedin from './linkedin.svg';
import reddit from './reddit.svg';
import profile from './website.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src={profile} className="Circle" alt="Profile Picture"/>
        </div>
        <p className="Tag">
          A Dreamer on his way to become an Achiever
        </p>
      </header>
      <body className="App-body">
        <div className="Rectangle">
          <h1>
            About Me:
          </h1>
          <p className="about-me">
            I like doing things and I am trying to do a lot of things currently. I know I shouldn't be
            doing a lot of things at the moment, but lets try making a schedule and doing things. Today,
            I shall make a schedule for the upcoming days and make programming my top priority.
          </p>
        </div>
        <div id="footer">
        <a href="https://www.facebook.com/" target="_blank">
          <img src={facebook} alt="facebook" id="facebook" />
        </a>
        <a href="https://www.facebook.com/" target="_blank">
          <img src={linkedin} alt="linkedin" id="linkedin" />
        </a>
        <a href="https://www.facebook.com/" target="_blank">
          <img src={reddit} alt="reddit" id ="reddit" target="_blank"/>
        </a>
        </div>
      </body>
    </div>
  );
}

export default App;