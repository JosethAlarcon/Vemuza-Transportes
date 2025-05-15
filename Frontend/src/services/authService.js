import axios from 'axios'

const API_URL = 'https://localhost:7125/api/auth' // ⚠️ Cambia el puerto al que estás usando

export const login = async (correo, contraseña) => {
    const response = await axios.post(`${API_URL}/login`, {
        correo,
        contraseña
    })
    return response.data
}

export const registrar = async (usuario) => {
    const response = await axios.post('https://localhost:7125/api/auth/registro', usuario)
    return response.data
}

