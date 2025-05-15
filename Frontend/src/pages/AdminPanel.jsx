import { useEffect, useState } from 'react'
import { obtenerTodasLasReservas, confirmarReserva } from '../services/reservaService'

export default function AdminPanel() {
    const [reservas, setReservas] = useState([])

    const cargarReservas = async () => {
        const data = await obtenerTodasLasReservas()
        setReservas(data)
    }

    const confirmar = async (id) => {
        await confirmarReserva(id)
        await cargarReservas()
    }

    const [filtro, setFiltro] = useState('todas')

    const reservasFiltradas = reservas.filter((r) =>
        filtro === 'todas' ? true : filtro === 'pendientes' ? !r.confirmada : r.confirmada
    )

    useEffect(() => {
        cargarReservas()
    }, [])

    return (
        <div className="max-w-5xl mx-auto mt-10 p-4">
            <h2 className="text-3xl font-bold mb-6 text-center">Panel de Reservas</h2>
            <div className="mb-4 text-right">
                <select
                    value={filtro}
                    onChange={(e) => setFiltro(e.target.value)}
                    className="border p-2 rounded"
                >
                    <option value="todas">Todas</option>
                    <option value="pendientes">Pendientes</option>
                    <option value="confirmadas">Confirmadas</option>
                </select>
            </div>

            <ul className="space-y-4">
                {reservasFiltradas.map((reserva) => (
                    <li key={reserva.id} className="border p-4 rounded shadow">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="font-semibold text-lg">{reserva.tipo}</p>
                                <p>{reserva.direccionInicio} → {reserva.direccionDestino}</p>
                                <p>Fecha: {reserva.fecha.slice(0, 10)} | Hora: {reserva.hora}</p>
                                <p>Solicitante: {reserva.usuarioNombre}</p>
                                <p>{reserva.descripcion}</p>
                            </div>
                            {reserva.confirmada ? (
                                <span className="text-green-600 font-bold">✔ Confirmada</span>
                            ) : (
                                <button
                                    onClick={() => confirmar(reserva.id)}
                                    className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                                >
                                    Confirmar
                                </button>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
