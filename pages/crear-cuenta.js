import React from "react";
import Layout from "../components/Layout";

const CrearCuenta = () => {
  return (
    <Layout>
      <div className="md:w-4/5 xl:w-3/5 mx-auto mb-32">
        <h2 className="text-4xl font-sans font-bold text-gray-800 text-center my-4">
          Crear Cuenta
        </h2>
        <div className="flex justify-center mt-5">
          <div className="w-full max-w-lg">
            <form className="bg-white rounded shadow-md px-8 pt-8 pb-8 mb-4">
              <div className="mb-4">
                <label
                  htmlFor="nombre"
                  className="block text-black text-sm font-bold mb-2"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  className="shadow appearence-none border-rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="nombre"
                  placeholder="Nombre de Usuario"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-black text-sm font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="shadow appearence-none border-rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  placeholder="Email de Usuario"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-black text-sm font-bold mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="shadow appearence-none border-rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  placeholder="Password de Usuario"
                />
              </div>
              <input
                type="submit"
                className="bg-red-500 hover:bg-gray-900 w-full p-2 text-white uppercase font-bold"
                value="Crear Cuenta"
              />
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CrearCuenta;
