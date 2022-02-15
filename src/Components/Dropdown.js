import React from "react";

function Dropdown({ isOpen, toggle }) {
  return (
    <div
      className={
        isOpen
          ? "bg-yellow-600 grid grid-row-4 text-center item-center gap-5 py-3"
          : "hidden"
      }
      onClick={toggle}
    >
      <div>Home</div>
      <div>Menu</div>
      <div>About</div>
      <div>Contact</div>
    </div>
  );
}

export default Dropdown;
