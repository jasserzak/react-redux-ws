import React from "react";

const Button = (props) => {
  const { darkMode, toggleDarkMode } = props;
  const handleClick = (e) => toggleDarkMode(!darkMode);

  return (
    <div className={darkMode === true ? "dark" : ""}>
      <button
        className="p-2 bg-slate-400 text-white rounded-md"
        onClick={handleClick}
      >
        Dark Mode {darkMode === true ? "Activeted" : ""}
      </button>
    </div>
  );
};

export default Button;
