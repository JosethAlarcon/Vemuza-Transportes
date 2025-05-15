import { useNavigate } from 'react-router-dom'

export default function SeleccionServicio() {
    const navigate = useNavigate()

    const seleccionar = (tipo) => {
        navigate(`/reservar/${tipo}`)
    }

    return (
        <div>
            <div className="max-w-xl mx-auto mt-20 text-center">
                <h2 className="text-3xl font-bold mb-6">¿Qué tipo de servicio necesitas?</h2>

                <div className="flex justify-center gap-10 mb-8">
                    <button
                        onClick={() => seleccionar('flete')}
                        className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
                    >
                        Flete
                    </button>
                    <button
                        onClick={() => seleccionar('mudanza')}
                        className="bg-orange-600 text-white px-6 py-3 rounded hover:bg-green-600"
                    >
                        Mudanza
                    </button>
                </div>

                <button
                    onClick={() => navigate('/reservas')}
                    className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700"
                >
                    Ver mis reservas
                </button>
            </div>
        </div>
    )
}

