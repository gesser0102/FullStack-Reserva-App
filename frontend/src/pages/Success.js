import React, { Component } from "react";
import { Link } from "react-router-dom";

class Success extends Component {
  render() {
    return (
      <section id="Home" className="py-10 px-3 bg-amber-300 h-screen">
        <div className="bg-gray-700 px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-20 flex gap-6 lg:flex-row flex-col-reverse items-center">
          <div className="flex flex-col justify-center items-center w-full">
          <img src="./images/success.png" alt="" className="p-2 w-52 h-52" />
            <h2 className="text-2xl font-semibold text-white mt-10">
              Sua Reserva foi realizada com sucesso!
            </h2>
            <div className="flex flex-row p-10 gap-20">
            <Link to='/'> <button className=" hover:bg-white text-slate-50 font-semibold w-28 hover:text-black py-2 px-4 border border-blue-500 hover:border-transparent rounded">Home</button></Link>
            <Link to='/reservas'><button className=" hover:bg-white text-slate-50 font-semibold w-28 hover:text-black py-2 px-4 border border-blue-500 hover:border-transparent rounded">Reservas</button></Link>
            </div>
            
          </div>
          
        </div>
      </section>
    );
  }
}

export default Success;
