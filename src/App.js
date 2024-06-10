import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Button from "./components/Button";

const App = () => {
  const [isDark, setIsDark] = useState(true);
  return (
    <div className="">
      <Navbar darkMode={isDark} />
      <div className="flex flex-col justify-center items-center">
        <Card darkMode={isDark} />
        <Button darkMode={isDark} toggleDarkMode={setIsDark} />
      </div>
    </div>
  );
};

export default App;
