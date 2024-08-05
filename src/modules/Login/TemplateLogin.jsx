import React, { useState } from "react";
import ButtonsLogin from "./components/ButtonsLogin";

const TemplateLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex items-center flex-col">
      <div className="bg-[#3B2A54FF] w-full h-[300px] rounded-b-[70px] flex items-center flex-col">
        <img className="mt-[-25px]" src="/Images/mundo.svg" alt="mundo" />
        <img className="w-[220px] h-[280px] mt-[-80px] shadow-bottom" src="/Images/avion.png" alt="avion" />
      </div>
      <div className="flex justify-center items-center flex-col pt-[80px]">
        <div className="flex flex-row pt-6 pb-4">
          <p className="text-[40px] text-[#3B2A54FF] font-bold">Travel</p>
          <p className="text-[40px] text-[#3B2A54FF]">App</p>
        </div>

        <form onSubmit={handleSubmit} className="flex items-center flex-col">
          <input
            type="email"
            placeholder="Correo electronico"
            className="w-80 h-10 bg-[#DDDBF1] text-xl text-center mb-3 rounded-3xl"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="w-80 h-10 bg-[#DDDBF1] text-xl text-center mb-6 rounded-3xl"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <ButtonsLogin buttonLogin="Log in" email={email} password={password} />
        </form>
      </div>
    </div>
  );
};

export default TemplateLogin;
