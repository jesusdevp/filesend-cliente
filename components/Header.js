import React, { useContext, useEffect } from "react";
import Link from "next/link";
import authContext from "../context/auth/authContext";

const Header = () => {
  // Extraer el Usuario autenticado del Storage
  const AuthContext = useContext(authContext);
  const { usuario, usuarioAutenticado, cerrarSesion } = AuthContext;

  useEffect(() => {
    usuarioAutenticado();
  }, []);
  return (
    <header className="py-8 flex flex-col md:flex-row items-center justify-between">
      <Link href="/">
        <img className="w-64 mb-8 md:mb-0" src="logo.svg" />
      </Link>
      <div>
        {usuario ? (
          <div className="flex items-center">
            <p className="mr-3">Hola {usuario.nombre} </p>
            <button
              className="bg-black px-5 py-3 rounded-lg text-white font-bold uppercase"
              type="button"
              onClick={() => cerrarSesion()}
            >
              Cerrar Sesión
            </button>
          </div>
        ) : (
          <>
            <Link href="/login">
              <a className="bg-red-600 px-5 py-3 rounded-lg text-white font-bold uppercase mr-3">
                Iniciar Sesión
              </a>
            </Link>
            <Link href="/crear-cuenta">
              <a className="bg-black px-5 py-3 rounded-lg text-white font-bold uppercase">
                Crear Cuenta
              </a>
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
