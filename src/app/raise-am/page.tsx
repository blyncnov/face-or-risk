"use client";

import React, { useState, useRef, useEffect } from "react";

import Sketch from "react-p5";
import p5Types from "p5"; //Import this for typechecking and intellisense

interface ComponentProps {
  // Your component props
}

let x = 50;
let y = 50;

const RaiseAmPage = () => {
  const [Raisecount, setRaiseCount] = useState(0);
  const sketchRef = useRef(null);

  // See annotations in JS for more information
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    let cnv = p5.createCanvas(500, 300).parent(canvasParentRef);

    cnv.mousePressed((event) => {
      console.log("Clicked on the canvas. Event:", event);
    });
  };

  const draw = (p5: p5Types) => {
    p5.background(0);
    p5.ellipse(x, y, 70, 70);
    x++;
  };

  const RaiseCountHandler = () => {
    setRaiseCount((prev) => prev + 1);
  };

  return (
    <div
      ref={sketchRef}
      className="page-not-found w-full min-h-[100dvh] flex flex-col gap-6 justify-center items-center text-center"
    >
      <h1 className="page-title text-[25vw] md:text-[8vw] face_or_risk_font">
        Raise am, raise am
      </h1>
      <Sketch setup={setup} draw={draw} />
      <div>
        <h1 className="text-7xl cursor-pointer" onClick={RaiseCountHandler}>
          {Raisecount}
        </h1>
      </div>
    </div>
  );
};

export default RaiseAmPage;
