import React, { useState, useEffect } from "react";
import axios from "axios";
const initialSmurf = {
  name: "",
  age: "",
  height: ""
};

const App = () => {
  const [smurf, setSmurf] = useState(initialSmurf);
  useEffect(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        setSmurf(res.data);
      })
      .catch(err => {
        console.log("Error: ", err);
      });
  }, []);

  // console.log(smurf);

  const handleChange = e => {
    e.preventDefault();
    setSmurf({ ...smurf, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(smurf)
    //     useEffect(() => {
    //       axios.post("http://localhost:3333/smurfs", (...state, ))
    //           .then(response => {
    //               console.log(response)
    //           })
    //           .catch(error => {
    //               console.log(error)
    //           })
    //     })
  };
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
      <br />
      <br />
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={smurf.name}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Age
            <input type="number" name="age" value={smurf.age} onChange={handleChange} />
          </label>
          <br />
          <label>
            Height
            <input
              type="text"
              name="height"
              value={smurf.height}
              onChange={handleChange}
            />
          </label>
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default App;
