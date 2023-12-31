import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Development Engineer",
          "Frontend Developer",
          "Proud Indian",
          // "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 100,
      }}
    />
  );
}

export default Type;
