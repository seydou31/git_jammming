import logo from './logo.svg';
import React, {useEffect, useState} from "react";
import './App.css';

const CLIENT_ID = "162c98f0ddd84abcb371b1ba703fee55";
  const CLIENT_SERVER = "28a0cc6ed05f4b66ba1a6962b8a10fd9";


function App() {
  useEffect(() => {
    var authParameters = {
      method : 'Post',
      header : {
        'content-type' : 'application/x-www-form-urlencoded'
      },
      body : 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SERVER
    }
    fetch('https://accounts.spotify.com/api/token', authParameters)
    .then(response => response.json())
    .then(data => console.log(data))

  }, [])



  return (
    <div className="App">
      <h1>Hello, World</h1>
    </div>
  );
}

export default App;
