export default function LessonPage({ params }: { params: { id: string } }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Lesson {params.id}</h1>
      <p className="text-gray-600">Lesson content will appear here.</p>
    </div>
  );
}