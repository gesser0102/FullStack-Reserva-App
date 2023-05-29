import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import { FaTrash, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";


const List = () => {
  const [reservas, setReservas] = useState({ infos: [] });

  useEffect(() => {
    fecthReservaList();
  }, []);

  const fecthReservaList = async () => {
    const { data } = await axios.get("http://localhost:8000/api/v1/reservas/");

    setReservas({ infos: data });
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8000/api/v1/reservas/${id}/`);
    fecthReservaList();
  };

  return (
    <div className="overflow-x-auto">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th className="text-center">Nome</th>
            <th className="text-center">Estação</th>
            <th className="text-center">Periodo</th>
            <th className="text-center">Data</th>
            <th className="text-center">Ação</th>
          </tr>
        </thead>
        <tbody>
          {reservas.infos.map((i) => (
            <tr key={i.id}>
              <td className="font-light text-center">{i.nome}</td>
              <td className="font-light text-center">{i.estacao}</td>
              <td className="font-light text-center">{i.periodo}</td>
              <td className="font-light text-center">{i.data}</td>
              <td>
                <div className="flex flex-row gap-2 justify-center items-center">
                  <Link to={"/editar/" +i.id}>
                  <button className="text-blue-500 hover:text-white">
                    <FaEdit/>
                  </button>
                  </Link>
                  <button className="text-red-500 hover:text-white">
                    <FaTrash onClick={() => handleDelete(i.id)} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default List;
