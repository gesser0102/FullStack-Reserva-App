import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <section id="Home" className="py-32 px-3 bg-amber-300 min-h-screen 0 sm:flex sm:justify-center sm:items-center">
        <div className="bg-gray-700 px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] justify-content gap-6 lg:flex-row flex-col-reverse items-center">
          <div className="flex flex-col justify-center items-center w-full">
          <img src="./images/logo.png" width="200px" alt="" className="p-2" />
            <h2 className="text-2xl font-semibold text-white mt-10">
              Aplicativo de Reservas
            </h2>
            <div className="flex flex-col sm:flex-row p-10 gap-20">
            <Link to='/reservar'> <button className="w-48 sm:w-48 hover:bg-white text-slate-50 font-semibold hover:text-black py-2 px-4 border border-blue-500 hover:border-transparent rounded">Realizar Reserva</button></Link>
            <Link to='/reservas'><button className="w-48 sm:w-48 hover:bg-white text-slate-50 font-semibold hover:text-black py-2 px-4 border border-blue-500 hover:border-transparent rounded">Listar Reservas</button></Link>
            </div>
            
          </div>
          
        </div>
      </section>
    );
  }
}

export default Home;
