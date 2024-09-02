import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Swal from 'sweetalert2';


const ButtonRegister = ({ buttonRegister, names, lastnames, email, username, password }) => {
  const navigate = useNavigate();

  const handleRegisterClick = async (e) => {
      e.preventDefault();

      const data = {
          names: names,
          lastnames: lastnames,
          email: email,
          username: username,
          password: password
      }

      await axios.post("http://37.60.252.97:3000/api/users/create", data)
          .then((resp) => {
              console.log(resp)
              if (resp.status == 201) {
                Swal.fire({
                  title: '¡Bienvenido!',
                  text: 'Registro exitoso',
                  icon: 'success',
                  confirmButtonText: 'Entendido'
              }).then(() => {
                  navigate("/iniciarSesion");
              });
              }
          })
          .catch((err) => {
            console.log(err);
            Swal.fire({
              title: 'Error',
              text: 'Hubo un problema al registrarse. Por favor, verifica tus credenciales e intenta nuevamente.',
              icon: 'error',
              confirmButtonText: 'Entendido'
          })
              
          })
  }

  return (
    <div className='flex items-center flex-col justify-between space-y-4'>
      <button
        className='h-[50px] w-[170px] bg-[#3B2A54FF] rounded-3xl text-xl text-white'
        onClick={handleRegisterClick}
      >
        {buttonRegister}
      </button>
    </div>
  );
};

export default ButtonRegister;
