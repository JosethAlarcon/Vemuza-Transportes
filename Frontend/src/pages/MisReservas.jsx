import { useEffect, useState } from 'react'
import { obtenerReservasPorUsuario } from '../services/reservaService'


export default function MisReservas() {
    const [reservas, setReservas] = useState([])
    const usuario = JSON.parse(localStorage.getItem('usuario'))

    useEffect(() => {
        if (usuario) {
            obtenerReservasPorUsuario(usuario.id)
                .then(setReservas)
                .catch((err) => console.error('Error al obtener reservas:', err))
        }
    }, [])

    return (
        <div>
            <div className="max-w-3xl mx-auto mt-10 p-4">
                <h2 className="text-2xl font-bold mb-6 text-center">Mis Reservas</h2>
                {reservas.length === 0 ? (
                    <p className="text-center text-gray-600">No tienes reservas registradas.</p>
                ) : (
                    <ul className="space-y-4">
                        {reservas.map((reserva) => (
                            <li
                                key={reserva.id}
                                className="border p-4 rounded shadow flex justify-between items-center"
                            >
                                <div>
                                    <p className="font-semibold">Tipo: {reserva.tipo}</p>
                                    <p>Desde: {reserva.direccionInicio}</p>
                                    <p>Hasta: {reserva.direccionDestino}</p>
                                    <p>Fecha: {reserva.fecha.slice(0, 10)}</p>
                                    <p>Hora: {reserva.hora}</p>
                                </div>
                                <span
                                    className={`px-2 py-1 rounded text-sm font-medium ${reserva.confirmada ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                                        }`}
                                >
                                    {reserva.confirmada ? 'Confirmada' : 'Pendiente'}
                                </span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}
