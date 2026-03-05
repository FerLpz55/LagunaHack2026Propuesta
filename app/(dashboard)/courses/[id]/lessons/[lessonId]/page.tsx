const lessonDetails = {
  id: '1',
  title: 'Introducción al Marketing',
  content: 'Esta es la lección introductoria al marketing.',
};

export default function LessonDetailsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{lessonDetails.title}</h1>
      <p>{lessonDetails.content}</p>
    </div>
  );
}