import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white font-sans">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
        <span className="text-2xl font-bold text-violet-700">Emprende Digital</span>
        <div className="flex gap-3">
          <Link href="/login" className="px-4 py-2 text-violet-700 font-medium hover:underline">Iniciar sesión</Link>
          <Link href="/register" className="px-4 py-2 bg-violet-600 text-white rounded-full font-medium hover:bg-violet-700 transition">Crear cuenta</Link>
        </div>
      </nav>

      {/* HERO */}
      <main className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-extrabold text-violet-900 leading-tight mb-6">
          Capacitación digital para<br />
          <span className="text-violet-500">mujeres emprendedoras</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          Cursos, mentorías y herramientas para gestionar y escalar tu negocio.
          Todo en un solo lugar, a tu ritmo.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <Link href="/register" className="px-8 py-4 bg-violet-600 text-white text-lg rounded-full font-semibold hover:bg-violet-700 transition shadow-md">
            Empieza gratis
          </Link>
          <Link href="/courses" className="px-8 py-4 border-2 border-violet-600 text-violet-700 text-lg rounded-full font-semibold hover:bg-violet-50 transition">
            Ver cursos
          </Link>
        </div>

        {/* FEATURES */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-violet-100">
            <div className="text-3xl mb-3">📚</div>
            <h3 className="text-lg font-bold text-violet-900 mb-2">Cursos prácticos</h3>
            <p className="text-gray-500 text-sm">Marketing, finanzas, ventas y gestión digital. Contenido diseñado para emprendedoras.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-violet-100">
            <div className="text-3xl mb-3">🤝</div>
            <h3 className="text-lg font-bold text-violet-900 mb-2">Mentorías personalizadas</h3>
            <p className="text-gray-500 text-sm">Conecta con mentoras expertas que entienden los retos de tu negocio.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-violet-100">
            <div className="text-3xl mb-3">🛠️</div>
            <h3 className="text-lg font-bold text-violet-900 mb-2">Herramientas de gestión</h3>
            <p className="text-gray-500 text-sm">Genera tu plan de negocio y calcula tu punto de equilibrio en minutos.</p>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="text-center text-gray-400 text-sm py-10">
        © 2026 Emprende Digital · LagunaHack
      </footer>
    </div>
  );
}
