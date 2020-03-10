import React, { useState, useEffect } from "react";
import "./App.css";

import { SmurfContext } from "../context/SmurfContext.js";
import SmurfList from "../components/SmurfList.js";
import AddSmurfForm from "./AddSmurfForm.js";

import axios from "axios";

const App = () => {
  const [smurfState, setSmurfState] = useState([]);
  const temaSmurf = {
    smurfState,
    setSmurfState
  };

  useEffect(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        setSmurfState(res.data);
      })
      .catch(err => {
        console.log("This is the error => ", err);
      });
  }, []);

  console.log("Thisi is the state => ", temaSmurf.smurfState);

  useEffect(() => {
      axios.post("http://localhost:3333/smurfs")
          .then(sent => {
              setSmurfState(sent.data)
              console.log("this was sent ==> ", sent)
          })
          .catch(sentErr => {
              console.log('Something went wrong: ', sentErr)
          })
  })

  return (
    // <SmurfContext.Provider value={temaSmurf}>
    <SmurfContext.Provider value={temaSmurf}>
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <br />
        <AddSmurfForm />
        <SmurfList />
      </div>
    </SmurfContext.Provider>
  );
};

export default App;
