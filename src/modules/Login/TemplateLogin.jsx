import React, { useState } from "react";
import ButtonsLogin from "./components/ButtonsLogin";
import Mundo from '../../assets/Images/mundo.svg';
import Avion from  '../../assets/Images/avion.png';

const TemplateLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  return (
    <div className="flex items-center flex-col">
      <div className="bg-[#3B2A54FF] w-full h-[300px] rounded-b-[70px] flex items-center flex-col">
        <img className="mt-[-25px]" src={Mundo} alt="mundo" />
        <img className="w-[220px] h-[280px] mt-[-80px] shadow-bottom" src={Avion} alt="avion" />
      </div>
      <div className="flex justify-center items-center flex-col pt-[80px]">
        <div className="flex flex-row pt-6 pb-4">
          <p className="text-[40px] text-[#3B2A54FF] font-bold">Travel</p>
          <p className="text-[40px] text-[#3B2A54FF]">App</p>
        </div>

        <form className="flex items-center flex-col">
          <input
            type="email"
            placeholder="Usuario"
            className="w-80 h-10 bg-[#DDDBF1] text-xl text-center mb-3 rounded-3xl"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="w-80 h-10 bg-[#DDDBF1] text-xl text-center mb-6 rounded-3xl"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <ButtonsLogin buttonLogin="Log in" username={username} password={password} />
        </form>
      </div>
    </div>
  );
};

export default TemplateLogin;
