import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Form() {
  const InitialState = { id: 0, nome: "", periodo: "", estacao: "", data: "" };

  const [dados, setDados] = useState(InitialState);
  const [options, setOptions] = useState([]);

  const success = useNavigate();

  const handleInputChange = (e) => {
    setDados({ ...dados, [e.target.id]: e.target.value });
  };

  const validateForm = () => {
    const errors = {};
    if (!dados.nome) errors.nome = "Nome obrigatório!!";
    if (!dados.estacao) errors.estacao = "Estação obrigatória!!";
    if (!dados.periodo) errors.periodo = "Periodo obrigatório!!";
    if (!dados.data) errors.data = "Data obrigatória!! ";

    if (Object.keys(errors).length > 0) {
      const firstError = errors[Object.keys(errors)[0]];
      window.alert(firstError);
    }
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        await axios
          .post("http://localhost:8000/api/v1/reservas/", dados)
          .then(success("/sucesso"));
      } catch {
        console.log("erro");
      }
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/v1/estacao/");
      setOptions(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-transparent rounded-lg mx-auto block items-center justify-center ">
      <form className=" mx-auto " onSubmit={handleSubmit}>
        <div className="mb-4 text-center">
          <label
            htmlFor="nome"
            className="block mb-4 text-xl text-white font-semibold"
          >
            Nome:
          </label>
          <input
            type="text"
            id="nome"
            value={dados.nome}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Digite seu nome"
          />
        </div>

        <div className="mb-4 text-center">
          <label
            htmlFor="estacao"
            className="block mb-4 text-xl text-white font-semibold"
          >
            Estação:
          </label>
          <select
            id="estacao"
            value={dados.estacao}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="">Selecione uma estação</option>
            {options.map((option) => (
              <option key={option.id} value={option.nome}>
                {option.nome}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4 text-center">
          <label className="block mb-4 text-xl text-white font-semibold">
            Período:
          </label>
          <div className="mb-4 flex">
            <div>
              <label className="flex items-center pr-3">
                <input
                  type="radio"
                  id="periodo"
                  value={"Manhã"}
                  checked={dados.periodo === "Manhã"}
                  onChange={handleInputChange}
                  className="form-radio h-4 w-4 text-blue-500 focus:ring focus:border-blue-300"
                />
                <span className="ml-2 text-white font-semibold">Manhã</span>
              </label>
            </div>
            <div>
              <label className="flex items-center pr-3">
                <input
                  type="radio"
                  id="periodo"
                  value="Tarde"
                  checked={dados.periodo === "Tarde"}
                  onChange={handleInputChange}
                  className="form-radio h-4 w-4 text-blue-500 focus:ring focus:border-blue-300"
                />
                <span className="ml-2 text-white font-semibold">Tarde</span>
              </label>
            </div>
            <div>
              <label className="flex items-center">
                <input
                  type="radio"
                  id="periodo"
                  value="Noite"
                  checked={dados.periodo === "Noite"}
                  onChange={handleInputChange}
                  className="form-radio h-4 w-4 text-blue-500 focus:ring focus:border-blue-300"
                />
                <span className="ml-2 text-white font-semibold">Noite</span>
              </label>
            </div>
          </div>
        </div>

        <div className="mb-4 text-center">
          <label className="block mb-4 text-xl text-white font-semibold">
            Data:
          </label>
          <input
            type="date"
            id="data"
            value={dados.data}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className=" hover:bg-white w-52 text-slate-50 mt-4 font-semibold hover:text-black py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
