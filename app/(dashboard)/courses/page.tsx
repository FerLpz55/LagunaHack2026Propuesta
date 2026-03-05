import Link from 'next/link';

const courses = [
  { id: '1', title: 'Curso de Marketing', description: 'Aprende marketing digital', category: 'marketing', level: 'principiante' },
  { id: '2', title: 'Curso de Finanzas', description: 'Gestión financiera básica', category: 'finanzas', level: 'intermedio' },
];

export default function CoursesPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Catálogo de Cursos</h1>
      <ul className="space-y-4">
        {courses.map((course) => (
          <li key={course.id} className="border p-4 rounded">
            <h2 className="text-xl font-semibold">{course.title}</h2>
            <p>{course.description}</p>
            <Link href={`/dashboard/courses/${course.id}`} className="text-indigo-600 hover:underline">
              Ver detalles
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}