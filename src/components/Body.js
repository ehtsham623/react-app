import React, { useState } from "react";
import MyAlert from "../shared/MyAlert";
import AboutUs from "./AboutUs";
import TextForm from "./TextForm";

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
      <TextForm alertFunction={showAlert} />
      <AboutUs />
    </div>
  );
}
