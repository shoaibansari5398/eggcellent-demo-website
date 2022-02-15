import React from "react";

function Hero() {
  return (
    <div>
      <div className="h-screen flex-col flex justify-center items-center">
        <h1 className="text-6xl text-bold mb-10">EGGCELLENT</h1>
        <div>
          <button className="py-6 px-10 bg-yellow-500 rounded-full text-bold text-xl hover:bg-yellow-400 transition duration-300 ease-in-out animate-bounce flex items-center">
            Order Now
            <svg
              className="w-6 h-6 ml-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
