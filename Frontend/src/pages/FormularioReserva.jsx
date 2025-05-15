import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { crearReserva } from '../services/reservaService'

export default function FormularioReserva() {
    const { tipo } = useParams()
    const navigate = useNavigate()

    const [inicio, setInicio] = useState('')
    const [destino, setDestino] = useState('')
    const [fecha, setFecha] = useState('')
    const [hora, setHora] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [mensaje, setMensaje] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const usuario = JSON.parse(localStorage.getItem('usuario'))

        if (!usuario) {
            setMensaje('Debes iniciar sesión para reservar.')
            return
        }

        const nuevaReserva = {
            usuarioId: usuario.id,
            tipo,
            direccionInicio: inicio,
            direccionDestino: destino,
            fecha,
            hora,
            descripcion
        }

        try {
            await crearReserva(nuevaReserva)
            navigate('/reserva-exitosa') // 🔁 redirige a la página de éxito
        } catch (error) {
            setMensaje('❌ Error al enviar la reserva.')
            console.error(error)
        }
    }

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-white via-blue-100 to-green-100 text-gray-800">
            <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-md rounded">
                <h2 className="text-2xl font-bold mb-6 text-center">Reserva de {tipo}</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Dirección de inicio"
                        value={inicio}
                        onChange={(e) => setInicio(e.target.value)}
                        className="w-full p-2 border rounded"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Dirección de destino"
                        value={destino}
                        onChange={(e) => setDestino(e.target.value)}
                        className="w-full p-2 border rounded"
                        required
                    />
                    <input
                        type="date"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                        className="w-full p-2 border rounded"
                        required
                    />
                    <input
                        type="time"
                        value={hora}
                        onChange={(e) => setHora(e.target.value)}
                        className="w-full p-2 border rounded"
                        required
                    />
                    <textarea
                        placeholder="Descripción de los artículos a trasladar"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                        className="w-full p-2 border rounded"
                        required
                    ></textarea>
                    {mensaje && <p className="text-center text-sm text-red-600">{mensaje}</p>}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
                    >
                        Enviar reserva
                    </button>
                </form>
            </div>
        </div>

    )
}


