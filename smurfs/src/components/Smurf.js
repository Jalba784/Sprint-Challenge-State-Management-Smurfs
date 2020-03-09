import React from "react";

const Smurf = props => {
  const { singleSmurf } = props;
  return (
    <div>
      <h2>{singleSmurf.name}</h2>
      <p>Age: {singleSmurf.age}</p>
      <p>Height: {singleSmurf.height}</p>
    </div>
  );
};

export default Smurf;
