import axios from 'axios'

const API_URL = 'https://localhost:7125/api/reservas' // ⚠️ Asegúrate de que el puerto coincida

export const crearReserva = async (reserva) => {
    const response = await axios.post(API_URL, reserva)
    return response.data
}

export const obtenerReservasPorUsuario = async (usuarioId) => {
    const response = await axios.get(`https://localhost:7125/api/reservas/usuario/${usuarioId}`)
    return response.data
}

export const obtenerTodasLasReservas = async () => {
    const response = await axios.get('https://localhost:7125/api/reservas/todas')
    return response.data
}

export const confirmarReserva = async (id) => {
    const response = await axios.put(`https://localhost:7125/api/reservas/confirmar/${id}`)
    return response.data
}
