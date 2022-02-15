import React from "react";
import ImageOne from "../egg.jpg";
import ImageTwo from "../egg-2.jpg";

function Content() {
  return (
    <>
      <div className="flex flex-col h-screen justify-center items-center py-40">
        <img src={ImageOne} className="h-full rounded mb-20" />
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl mb-2 ">Muffins</h2>
          <p className="text-2xl mb-2">Crispy,delecious and nutritious</p>
          <span className="text-2xl">$16</span>
        </div>
      </div>
      <div className="flex flex-col h-screen justify-center items-center py-40">
        <img src={ImageTwo} className="h-full rounded mb-20" />
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl mb-2 ">Egg Salad</h2>
          <p className="text-2xl mb-2">Crispy,delecious and nutritious</p>
          <span className="text-2xl">$18</span>
        </div>
      </div>
    </>
  );
}

export default Content;
