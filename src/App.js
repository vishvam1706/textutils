// import logo from './logo.svg';
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextFrom from "./components/TextFrom";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [dark, setdark] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (dark === "light") {
      setdark("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Enable Dark Mode", "success");
    } else {
      setdark("light");
      document.body.style.backgroundColor = "white";
      showAlert("Enable Lignt Mode", "success");
    }
  };
  return (
    <>
    {/* <BrowserRouter> */}
      <Navbar
        title="TextOp"
        aboutus="About TextOp"
        mode={dark}
        toggleMode={toggleMode}
        />
      <Alert alert={alert} />
      <div className="container">
        {/* <Routes>
          <Route path="/About" element={<About/>}/>
          <Route path="/" element={<TextFrom showAlert={showAlert} heading="Enter The Text To Analyze" mode={dark} />}/>
        </Routes> */}
        <TextFrom showAlert={showAlert} heading="Enter The Text To Analyze" mode={dark} />
      </div>
        {/* </BrowserRouter> */}
    </>
    // jsx
  );
}

export default App;
// export default App;
