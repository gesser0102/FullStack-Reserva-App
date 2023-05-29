import React, { Component } from "react";
import List from "../components/list";
import { Link } from "react-router-dom";

class Listar extends Component {
  render() {
    return (
      <section id="Home" className="py-10 px-3 bg-amber-300 min-h-screen ">
        <div className="bg-gray-700 px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-20 flex gap-6 lg:flex-row flex-col-reverse items-center">
          <div className="flex flex-col w-full ">
            <h2 className="text-center pb-7 text-white">Lista de Reservas</h2>
            <div className="justify-center items-center rounded-2xl p-2 w-full">
              <List/>
            </div>
            <div className="flex justify-center p-10 gap-20">
            <Link to='/'> <button className="hover:bg-white text-slate-50 font-semibold w-72 hover:text-black py-2 px-4 border border-blue-500 hover:border-transparent rounded">Home</button></Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Listar;
