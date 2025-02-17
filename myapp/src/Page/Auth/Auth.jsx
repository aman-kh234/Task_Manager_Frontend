import React, { useState } from "react";
import "./Auth.css";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
const Auth = () => {
  const [isRegister, setIsRegister] = useState(false);
  const togglePanel=()=>{
    setIsRegister(!isRegister);
  }  
  return (
    <div className="flex justify-center h-screen items-center overflow-hidden">
      <div className="box lg:max-w-4xl">
        <div className={`cover ${isRegister ? "rotate-active" : ""}`}>
            <div className="front">
                <img src="https://as2.ftcdn.net/jpg/03/75/58/15/1000_F_375581544_r5aDqkhnhrqy15AdaqKXUI30MMtL8IIq.jpg" alt="" height={300} width={500}/>
                <div className="text">
                    <span className="text-1">Success is build upon well-organized tasks.</span>
                </div>
            </div>
            <div className="back">
                <img src="https://img.freepik.com/premium-photo/silhouette-man-standing-holding-flag_50039-1879.jpg?semt=ais_hybrid" alt="" height={300} width={500}/>
            </div>
        </div>
        <div className="forms h-full">
          <div className="form-content h-full">
            <div className="login-form">
              <LoginForm togglePanel={togglePanel} />
            </div>
            <div className="signup-form">
              <SignupForm togglePanel={togglePanel} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
