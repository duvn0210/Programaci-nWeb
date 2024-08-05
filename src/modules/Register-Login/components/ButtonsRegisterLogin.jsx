import React from "react";
import { useNavigate } from "react-router-dom";

const ButtonsRegisterLogin = ({ buttonLogin, buttonRegister }) => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/iniciarSesion");
  };

  const handleRegisterClick = () => {
    navigate("/registrarse");
  };

  return (
    <div className="flex items-center flex-col justify-between space-y-4">
      <button
        className="h-[50px] w-[170px] bg-[#3B2A54FF] rounded-3xl text-xl text-white"
        onClick={handleLoginClick}
      >
        {buttonLogin}
      </button>
      <button
        className="h-[50px] w-[170px] bg-[#876ede] rounded-3xl text-xl text-white"
        onClick={handleRegisterClick}
      >
        {buttonRegister}
      </button>
    </div>
  );
};

export default ButtonsRegisterLogin;
