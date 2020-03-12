import React, { useContext } from "react";
import { SmurfContext } from "../context/SmurfContext.js";
import Smurf from "../components/Smurf.js";

const SmurfList = () => {
  const cadaSmurf = useContext(SmurfContext);
  return (
    <div>
      {cadaSmurf.smurfState.map(item => {
        return <Smurf key={item.id} singleSmurf={item} />;
      })}
    </div>
  );
};

export default SmurfList;
