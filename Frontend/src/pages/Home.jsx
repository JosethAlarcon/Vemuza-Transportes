import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { useRef } from 'react'
import trabajo1 from '../assets/trabajo1.png'
import trabajo2 from '../assets/trabajo2.png'
import trabajo3 from '../assets/trabajo3.png'
import trabajo4 from '../assets/trabajo4.png'
import trabajo5 from '../assets/trabajo5.png'
import trabajo6 from '../assets/trabajo6.png'

export default function Home() {
    const scrollRef = useRef(null)

    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' })
    }

    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' })
    }

    return (
        <div className="relative min-h-screen flex flex-col justify-between bg-orange-100  from-blue-100 via-white to-green-100 text-gray-800">
            {/* SLIDER + LOGO */}
            <div className="relative z-10">
                {/* VIDEO BANNER */}
                <div className="relative h-56 sm:h-64 md:h-80 lg:h-96 overflow-hidden">
                    <video
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src="/src/assets/banner.mp4" type="video/mp4" />
                        Tu navegador no admite la reproducción de video.
                    </video>
                </div>

                {/* LOGO FUERA DEL VIDEO, SOBRE TODO */}
                <div className="absolute left-1/2 top-[calc(100%_-_8rem)] transform -translate-x-1/2 z-50">
                    <img
                        src={logo}
                        alt="Logo Vemuza"
                        className="w-40 h-40 sm:w-48 sm:h-48 rounded-full shadow-2xl border-4 border-white bg-white/80 backdrop-blur-sm animate-zoom-in"
                    />

                </div>

            </div>

            <main className="bg-orange-100 flex flex-col items-center justify-center py-5 text-center animate-fade-in mt-6">
                <h1 className="text-6xl font-bold text-blue-700 mt-9 mb-5">Bienvenido a Vemuza Transportes</h1>
                <p className="text-gray-600 mb-8 max-w-2xl text-2xl font-bold">
                    Tu solución confiable para fletes y mudanzas en Santiago.
                </p>

                <div className="flex gap-4">
                    <Link to="/login" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
                        Iniciar sesión
                    </Link>
                    <Link to="/registro" className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-700 transition">
                        Registrarse
                    </Link>
                </div>
            </main>

            {/* SECCIÓN DE MISIÓN A PANTALLA COMPLETA */}
            <section className="bg-orange-100 bg-opacity-90 py-3 w-screen">
                <div className="max-w-6xl mx-auto px-6 sm:px-12 text-left text-sm sm:text-base">
                    <h2 className="text-4xl font-bold text-blue-800 mb-5 text-center bg-orange-100">Misión de Vemuza Transportes</h2>
                    <p className="mb-3">
                        En Vemuza, nos dedicamos a brindar soluciones confiables y seguras de transporte local. Contamos con un camión 3/4 con capacidad de hasta 1500 kg o 3 palets estándar, ideal para clientes que buscan puntualidad y confianza.
                    </p>
                    <p className="mb-3 font-bold text-2xl">
                        Ofrecemos traslados para clientes fijos y mudanzas con tres niveles de servicio:
                    </p>
                    <ul className="list-disc list-inside mb-3">
                        <li>🧳 <strong>Solo traslado:</strong> el cliente se encarga de cargar y descargar.</li>
                        <li>🤝 <strong>Con ayuda del chofer:</strong> trabajamos en equipo.</li>
                        <li>💼 <strong>Con dos ayudantes:</strong> nos encargamos de todo por ti.</li>
                    </ul>
                    <p>
                        Nos destacamos por nuestra amabilidad, compromiso y el trato cercano que ofrecemos en cada servicio.
                    </p>
                </div>
            </section>
            {/* GALERÍA DE TRABAJOS */}
            <section className="bg-orange-100 py-5 w-full">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-blue-800 text-center mb-10">
                        Algunos de nuestros trabajos realizados y clientes satisfechos
                    </h2>

                    <div className="relative">
                        {/* Flecha izquierda */}
                        <button
                            onClick={scrollLeft}
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white p-2 rounded-full shadow-md hover:bg-orange-600 z-10"
                        >
                            &#8592;
                        </button>

                        {/* Contenedor de imágenes con scroll */}
                        <div
                            ref={scrollRef}
                            className="flex space-x-4 overflow-x-auto scroll-smooth pb-4 px-10 scrollbar-hide mb-5"
                        >
                            <img src={trabajo1} alt="Trabajo 1" className="h-60 rounded shadow-md flex-shrink-0" />
                            <img src={trabajo2} alt="Trabajo 2" className="h-60 rounded shadow-md flex-shrink-0" />
                            <img src={trabajo3} alt="Trabajo 3" className="h-60 rounded shadow-md flex-shrink-0" />
                            <img src={trabajo4} alt="Trabajo 4" className="h-60 rounded shadow-md flex-shrink-0" />
                            <img src={trabajo5} alt="Trabajo 5" className="h-60 rounded shadow-md flex-shrink-0" />
                            <img src={trabajo6} alt="Trabajo 6" className="h-60 rounded shadow-md flex-shrink-0" />
                            {/* Agrega más imágenes aquí */}
                        </div>

                        {/* Flecha derecha */}
                        <button
                            onClick={scrollRight}
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white p-2 rounded-full shadow-md hover:bg-orange-600 z-10"
                        >
                            &#8594;
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

