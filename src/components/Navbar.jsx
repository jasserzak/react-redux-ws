import React from "react";

const Navbar = (props) => {
  const { darkMode } = props;
  return (
    <div className={darkMode === true ? "dark" : ""}>
      <div className="flex justify-between p-6 mb-6  dark:bg-slate-800">
        <h1 className=" dark:text-white">Navbar</h1>
        <ul className="flex space-x-2">
          <li className=" dark:text-white">Home</li>
          <li className=" dark:text-white">About</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
