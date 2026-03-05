import Link from 'next/link';

const courseDetails = {
  id: '1',
  title: 'Marketing Digital desde Cero',
  description: 'Aprende a posicionar tu negocio en redes sociales y Google. Este curso te guía desde los conceptos básicos hasta la creación de tu primera campaña.',
  category: 'Marketing',
  level: 'principiante',
  duration: '8 hrs',
  lessons: [
    { id: '1', title: 'Introducción al Marketing Digital' },
    { id: '2', title: '¿Cómo funciona el algoritmo de redes sociales?' },
    { id: '3', title: 'Creación de contenido para Instagram y Facebook' },
    { id: '4', title: 'Google My Business: tu negocio en el mapa' },
    { id: '5', title: 'Tu primera campaña publicitaria con poco presupuesto' },
  ],
};

export default function CourseDetailsPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-violet-50">
      <nav className="bg-white border-b px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-violet-700">Emprende Digital</Link>
        <Link href="/courses" className="text-sm text-violet-600 hover:underline">← Cursos</Link>
      </nav>
      <div className="max-w-3xl mx-auto px-6 py-10">
        <span className="text-xs font-semibold uppercase tracking-wide text-violet-400">{courseDetails.category}</span>
        <h1 className="text-3xl font-bold text-violet-900 mt-1 mb-3">{courseDetails.title}</h1>
        <p className="text-gray-600 mb-6">{courseDetails.description}</p>
        <div className="flex gap-4 mb-8 text-sm text-gray-500">
          <span>⏱ {courseDetails.duration}</span>
          <span>📚 {courseDetails.lessons.length} lecciones</span>
          <span>🎯 {courseDetails.level}</span>
        </div>
        <div className="bg-white rounded-2xl border border-violet-100 shadow-sm p-6">
          <h2 className="text-lg font-semibold text-violet-900 mb-4">Temario del curso</h2>
          <ul className="space-y-2">
            {courseDetails.lessons.map((lesson, index) => (
              <li key={lesson.id}>
                <Link
                  href={`/courses/${params.id}/lessons/${lesson.id}`}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-violet-50 transition"
                >
                  <span className="w-7 h-7 flex items-center justify-center rounded-full bg-violet-100 text-violet-600 text-xs font-bold">{index + 1}</span>
                  <span className="text-gray-700">{lesson.title}</span>
                  <span className="ml-auto text-violet-400">▶</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6">
          <Link
            href={`/courses/${params.id}/lessons/1`}
            className="w-full block text-center px-6 py-3 bg-violet-600 text-white rounded-full font-semibold hover:bg-violet-700 transition"
          >
            Comenzar curso
          </Link>
        </div>
      </div>
    </div>
  );
}
