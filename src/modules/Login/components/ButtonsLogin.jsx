import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Swal from 'sweetalert2';


const ButtonsLogin = ({ buttonLogin, username, password }) => {
  const navigate = useNavigate();

  const handleLoginClick = async (e) => {
      e.preventDefault();

      const data = {
          username: username,
          password: password
      }

      await axios.post("http://37.60.252.97:3000/api/users/login", data)
          .then((resp) => {
              console.log(resp)
              if (resp.status == 200) {
                Swal.fire({
                  title: '¡Bienvenido!',
                  text: 'Inicio de sesión exitoso',
                  icon: 'success',
                  confirmButtonText: 'Entendido'
              }).then(() => {
                  navigate("/graficas");
              });
              }
              else if (resp.status == 404) {
                Swal.fire({
                  title:'Error',
                  text:'El usuario no ha sido encontrado, por favor verifica tus credenciales',
                  icon:'question',
                  confirmButtonText:'Entendido'
                })

              }
          })
          .catch((err) => {
            console.log(err);
            Swal.fire({
              title: 'Error',
              text: 'Hubo un problema al iniciar sesión. Por favor, verifica tus credenciales e intenta nuevamente.',
              icon: 'error',
              confirmButtonText: 'Entendido'
          })
              
          })
  }

  return (
    <div className='flex items-center flex-col justify-between space-y-4'>
      <button
        className='h-[50px] w-[170px] bg-[#3B2A54FF] rounded-3xl text-xl text-white'
        onClick={handleLoginClick}
      >
        {buttonLogin}
      </button>
    </div>
  );
};

export default ButtonsLogin;
