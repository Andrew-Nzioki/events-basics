import React,{useState} from "react";
import Header from "./Header"
const Login = () => {
   const [isOn,setIsOn]=useState(true) 
   
  function handleClick() {
    setIsOn(!isOn)
    console.log(isOn);
  }

  return (
    <div>
      <button onClick={handleClick}>{isOn ? "On" : "Off"}</button>
      <Header isOn={isOn}/>
    </div>
  );
};

export default Login;
