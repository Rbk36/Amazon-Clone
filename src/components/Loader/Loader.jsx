import React from "react";
import { FadeLoader } from "react-spinners";
const Loader = () => {
  return (
    <div>
      <FadeLoader
        color="#36d7b7"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
        }}
      />
    </div>
  );
};

export default Loader;
