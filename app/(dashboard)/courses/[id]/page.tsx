const courseDetails = {
  id: '1',
  title: 'Curso de Marketing',
  description: 'Aprende marketing digital',
  lessons: [
    { id: '1', title: 'Introducción al Marketing' },
    { id: '2', title: 'Estrategias de Contenido' },
  ],
};

export default function CourseDetailsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{courseDetails.title}</h1>
      <p>{courseDetails.description}</p>
      <h2 className="text-xl font-semibold mt-6">Lecciones</h2>
      <ul className="space-y-2">
        {courseDetails.lessons.map((lesson) => (
          <li key={lesson.id} className="border p-2 rounded">
            {lesson.title}
          </li>
        ))}
      </ul>
    </div>
  );
}