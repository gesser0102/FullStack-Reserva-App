import React, { Component } from "react";
import Edit from "../components/editform";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

class Editar extends Component {
  render() {
    return (
      <section
        id="Registrar"
        className="py-10 px-3 bg-amber-300 min-h-screen min-w-screen sm:flex sm:justify-center sm:items-center"
      >
        <div className="bg-gray-700 px-9 rounded-2xl py-5 h-full items-center">
        <Link to='/reservas'>
            <button className="text-teal-50 text-xl hover:text-slate-400 pb-3 pt-0">
              <FaArrowLeft />
            </button></Link>
          <div className="flex flex-col w-full ">
            <h2 className="text-center pb-7 text-white">Alterar Reserva</h2>
            <div className="">
              <Edit />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Editar;
