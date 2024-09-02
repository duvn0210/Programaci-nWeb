import React from "react";
import ButtonsRegisterLogin from "./components/ButtonsRegisterLogin";
import Mundo from '../../assets/Images/mundo.svg';
import Avion from  '../../assets/Images/avion.png';

const TemplateRegisterLogin = () => {
  return (
    <div className="flex items-center flex-col">
        <div className="bg-[#3B2A54FF] w-full h-[300px] rounded-b-[70px] flex items-center flex-col">
        <img className="mt-[-25px]" src={Mundo} alt="mundo" />
        <img className="w-[220px] h-[280px] mt-[-80px] shadow-bottom" src={Avion} alt="avion" />
        </div>
        <div className="flex justify-center items-center flex-col pt-[80px]">
            <div className="flex flex-row pt-6 pb-8">
            <p className="text-[40px] text-[#3B2A54FF] font-bold">Travel</p>
            <p className="text-[40px] text-[#3B2A54FF]">App</p>
            </div>
            <ButtonsRegisterLogin buttonLogin="Log in" buttonRegister="Register" />
            <p className="text-[#876ede] pt-6">Need help?</p>
        </div>
    </div>
  );
};

export default TemplateRegisterLogin;