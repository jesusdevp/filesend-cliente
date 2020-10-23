import React, { useContext, useEffect } from "react";
import Link from "next/link";
import authContext from "../context/auth/authContext";
import appContext from "../context/app/appContext";
import { useRouter } from "next/router";

const Header = () => {
  // routing
  const router = useRouter();
  // Extraer el Usuario autenticado del Storage
  const AuthContext = useContext(authContext);
  const { usuario, usuarioAutenticado, cerrarSesion } = AuthContext;

  // Context de la aplicacion
  const AppContext = useContext(appContext);
  const { limpiarState } = AppContext;

  useEffect(() => {
    usuarioAutenticado();
  }, []);

  const redireccionar = () => {
    router.push("/");
    limpiarState();
  };
  return (
    <header className="py-8 flex flex-col md:flex-row items-center justify-between">
      <h1
        onClick={() => redireccionar()}
        className="w-64 mb-8 md:mb-0 text-5xl text-center border-solid border-4 border-blue-400  font-bold rounded-lg cursor-pointer"
      >
        File<span className="text-blue-500">Send</span>
      </h1>
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
              <a className="bg-blue-600 px-5 py-3 rounded-lg text-white font-bold uppercase mr-3">
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
