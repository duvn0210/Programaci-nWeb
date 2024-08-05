import React from 'react';
import { useNavigate } from 'react-router-dom';

const ButtonsLogin = ({ buttonLogin, email, password }) => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    if (email && password) {
      navigate('/');
    } else {
      alert("Please enter both email and password.");
    }
  };

  return (
    <div className='flex items-center flex-col justify-between space-y-4'>
      <button
        className='h-[50px] w-[170px] bg-[#3B2A54FF] rounded-3xl text-xl text-white'
        onClick={handleLoginClick}
        disabled={!email || !password}
      >
        {buttonLogin}
      </button>
    </div>
  );
};

export default ButtonsLogin;
