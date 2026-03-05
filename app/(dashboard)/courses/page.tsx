import Link from 'next/link';

const courses = [
  { id: '1', title: 'Marketing Digital desde Cero', description: 'Aprende a posicionar tu negocio en redes sociales y Google.', category: 'Marketing', level: 'principiante', duration: '8 hrs' },
  { id: '2', title: 'Finanzas para Emprendedoras', description: 'Maneja tus ingresos, costos y flujo de caja con confianza.', category: 'Finanzas', level: 'intermedio', duration: '6 hrs' },
  { id: '3', title: 'Ventas Efectivas', description: 'Estrategias para vender más y fidelizar clientes.', category: 'Ventas', level: 'principiante', duration: '5 hrs' },
  { id: '4', title: 'Gestión Digital de tu Negocio', description: 'Herramientas digitales para organizar y escalar tu empresa.', category: 'Gestión', level: 'avanzado', duration: '10 hrs' },
];

const levelColors: Record<string, string> = {
  principiante: 'bg-green-100 text-green-700',
  intermedio: 'bg-yellow-100 text-yellow-700',
  avanzado: 'bg-red-100 text-red-700',
};

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-violet-50">
      <nav className="bg-white border-b px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-violet-700">Emprende Digital</Link>
        <Link href="/login" className="text-sm text-violet-600 hover:underline">Mi cuenta</Link>
      </nav>
      <div className="max-w-5xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-violet-900 mb-2">Catálogo de Cursos</h1>
        <p className="text-gray-500 mb-8">Encuentra el curso ideal para crecer tu negocio</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-2xl p-6 shadow-sm border border-violet-100 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wide text-violet-400">{course.category}</span>
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${levelColors[course.level]}`}>{course.level}</span>
              </div>
              <h2 className="text-lg font-bold text-violet-900">{course.title}</h2>
              <p className="text-sm text-gray-500 flex-1">{course.description}</p>
              <div className="flex items-center justify-between mt-2">
                <span className="text-sm text-gray-400">⏱ {course.duration}</span>
                <Link href={`/courses/${course.id}`} className="px-4 py-2 bg-violet-600 text-white text-sm rounded-full hover:bg-violet-700 transition font-medium">
                  Ver curso
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
