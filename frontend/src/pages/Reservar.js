import React, { Component } from "react";
import Form from "../components/forms";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

class Reservar extends Component {
  render() {
    return (
      <section
        id="Registrar"
        className="py-10 px-3 bg-amber-300 min-h-screen min-w-screen sm:flex sm:justify-center sm:items-center"
      >
        <div className="bg-gray-700 px-9 rounded-2xl py-5 h-full items-center">
          <div className="flex-row block w-full h-full ">
            <Link to='/'>
            <button className="text-teal-50 text-xl hover:text-slate-400 pb-3 pt-0 ">
              <FaArrowLeft />
            </button></Link>
            <h2 className="text-center pb-7 text-white">Realizar Reserva</h2>
            <div className="">
              <Form />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Reservar;
