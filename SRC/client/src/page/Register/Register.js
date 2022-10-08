import React from "react";
import { Link } from "react-router-dom";
import { AuthNav } from "../../components/AuthNav/AuthNav";

export const Register = () => {


  return (
    <div className="sectionLogin">
      <div className="backgroundBlack">

        <AuthNav path='login' onAuth={true} text={'Login'} />

        <div className="m-2">

          <div className="container bg-white d-flex justify-content-center mt-5 rounded shadow-lg bg-white"
            style={{ width: 'auto', maxWidth: '400px', height: 'auto' }}>

            <div className="w-100">
              <div className=" text-center mt-2">
                <h2>Registro de Usuario</h2>
              </div>

              <form>
                <div className="d-flex flex-column">
                  <label className="mb-1" form="username" /* htmlFor="username" */>Username</label>
                  <input className="form-control" type="text" name="username" placeholder="Nombre" required />
                </div>
                <div className="d-flex flex-column">
                  <label className="mb-1" form="lastname" /* htmlFor="lastname" */>Lastname</label>
                  <input className="form-control" type="text" name="lastname" placeholder="Apellido" required />
                </div>
                <div className="d-flex flex-column">
                  <label className="mb-1" form="email" /* htmlFor="email" */>Email</label>
                  <input className="form-control" type="email" name="email" placeholder="Correo" required />
                </div>
                <div className="d-flex flex-column">
                  <label className="mb-1" form="password" /* htmlFor="password" */>Password</label>
                  <input className="form-control" type="password" name="password" id="pass" placeholder="Password" required />
                </div>

                <div className="form-group d-flex flex-column justify-content-center align-items-center w-100">
                  <button className=" mt-3 border btn btn-primary w-50">Registrarse</button>

                  <div className="d-flex justify-content-start w-100 mb-5 mt-1">
                    <Link className="text-primary small mt-1 border-0 bg-transparent text-decoration-none"
                      to={'/login'}>
                      Iniciar Sesion
                    </Link>
                  </div>
                </div>
              </form>

              <div className="text-center mb-5">
                <button className="btn btn-info text-white text-center" /* href="/google" */>
                  <i className="fab fa-google me-2"></i>
                  Login with Google
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}