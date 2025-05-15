import { useNavigate } from 'react-router-dom'

export default function ReservaExitosa() {
    const navigate = useNavigate()

    return (
        <div>
            <div className="flex flex-col items-center min-h-screen text-center px-4 mt-20">
                <h2 className="text-3xl font-bold text-green-700 mb-4">¡Reserva realizada con éxito!</h2>
                <p className="text-gray-700 mb-6">Tu solicitud ha sido enviada correctamente.</p>

                <div className="flex gap-4">
                    <button
                        onClick={() => navigate('/reservas')}
                        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                    >
                        Ver mis reservas
                    </button>
                    <button
                        onClick={() => navigate('/seleccion-servicio')}
                        className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700"
                    >
                        Hacer otra reserva
                    </button>
                </div>
            </div>
        </div>
    )
}
