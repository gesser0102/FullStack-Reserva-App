const URL = "http://localhost:8000/api/v1/reservas/"


export const novaReserva = async (Reserva) => {
    return await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "nome": String(Reserva.nome).trim(),
            "estacao": String(Reserva.estacao).trim(),
            "periodo": String(Reserva.periodo).trim(),
            "data": String(Reserva.data).trim(),

        })
    });
};



