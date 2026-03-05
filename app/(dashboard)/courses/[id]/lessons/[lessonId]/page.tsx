import Link from 'next/link';

const lessonDetails = {
  id: '1',
  title: 'Introducción al Marketing',
  content: 'El marketing digital es el conjunto de estrategias y técnicas que se realizan en internet para promocionar productos o servicios. En esta lección aprenderás los conceptos fundamentales para comenzar a posicionar tu negocio en línea.',
  videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
};

export default function LessonDetailsPage({ params }: { params: { id: string; lessonId: string } }) {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <Link href={`/courses/${params.id}`} className="text-violet-600 hover:underline text-sm mb-4 inline-block">
        ← Volver al curso
      </Link>
      <h1 className="text-2xl font-bold text-violet-900 mb-4">{lessonDetails.title}</h1>
      <div className="aspect-video mb-6 rounded-xl overflow-hidden bg-black">
        <iframe
          className="w-full h-full"
          src={lessonDetails.videoUrl}
          title={lessonDetails.title}
          allowFullScreen
        />
      </div>
      <div className="text-gray-700 leading-relaxed">
        <p>{lessonDetails.content}</p>
      </div>
      <div className="mt-8 flex justify-end">
        <button className="px-6 py-2 bg-violet-600 text-white rounded-full font-medium hover:bg-violet-700 transition">
          ✓ Marcar como completada
        </button>
      </div>
    </div>
  );
}