import React from "react";
import PublicComp3 from "../components/PublicComp3";

const Intro = () => {
  return (
    <div>
      <PublicComp3 reverse={true} />
      <PublicComp3 />
    </div>
  );
};

export default Intro;
