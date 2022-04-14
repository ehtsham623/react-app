import React, { useState } from "react";
import MyAlert from "../shared/MyAlert";
import AboutUs from "./AboutUs";
import TextForm from "./TextForm";
import { Routes, Route } from "react-router-dom";

export default function Body() {
  //states
  const [alertData, setData] = useState(null);
  //functions
  const showAlert = (type, message) => {
    setData({
      type: type,
      message: message,
    });
    setTimeout(() => {
      setData(null);
    }, 2000);
  };

  return (
    <div>
      <MyAlert alert={alertData} />
      <Routes>
        <Route exact path="/" element={<TextForm alertFunction={showAlert} />} />
        <Route exact path="/about" element={<AboutUs />} />
      </Routes>
    </div>
  );
}
