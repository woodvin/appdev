import Link from 'next/link';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function LessonPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen p-8 space-y-8">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <Link href="/lessons" className="hover:text-purple-400">Lessons</Link>
          <span>→</span>
          <span className="text-white">Introduction to Finance</span>
        </div>

        {/* Lesson Header */}
        <Card variant="gradient" padding="lg">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-6xl">🎓</span>
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-white mb-2">Lesson {params.id}: Introduction to Finance</h1>
                <div className="flex items-center gap-4 text-sm text-gray-300">
                  <span>📊 Beginner</span>
                  <span>🕒 12 minutes</span>
                  <span>⭐ 100 XP</span>
                </div>
              </div>
            </div>
            <p className="text-gray-200">
              Learn the basics of financial markets, instruments, and terminology. This foundational lesson will prepare you for more advanced topics.
            </p>
          </div>
        </Card>

        {/* Progress */}
        <Card variant="elevated" padding="lg">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white">Your Progress</h3>
              <span className="text-purple-400 font-semibold">0%</span>
            </div>
            <div className="h-3 bg-[#1C2028] rounded-full overflow-hidden">
              <div className="h-full bg-gradient-primary rounded-full" style={{ width: '0%' }}></div>
            </div>
          </div>
        </Card>

        {/* Lesson Content */}
        <Card variant="default" padding="lg">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-white mb-4">Lesson Content</h2>
            <p className="text-gray-300 mb-4">
              This is a placeholder for the actual lesson content. In a real implementation, this would contain:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
              <li>Interactive slides and diagrams</li>
              <li>Video explanations</li>
              <li>Code examples and simulations</li>
              <li>Practice exercises</li>
              <li>Quizzes to test understanding</li>
            </ul>
            <div className="bg-[#151921] p-6 rounded-xl border border-[#2D3139] my-6">
              <h3 className="text-lg font-semibold text-white mb-3">Key Concepts</h3>
              <div className="space-y-2 text-gray-300">
                <p>• Financial markets connect buyers and sellers of securities</p>
                <p>• Stocks represent ownership in companies</p>
                <p>• Bonds are debt instruments that pay interest</p>
                <p>• Diversification reduces portfolio risk</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Quiz Section */}
        <Card variant="elevated" padding="lg">
          <h3 className="text-xl font-bold text-white mb-4">Quick Quiz</h3>
          <p className="text-gray-400 mb-6">Answer these questions to earn XP and complete the lesson.</p>
          <Button variant="primary" size="lg" className="w-full">
            Start Quiz →
          </Button>
        </Card>

        {/* Navigation */}
        <div className="flex items-center justify-between pt-6">
          <Link href="/lessons">
            <Button variant="outline">← Back to Lessons</Button>
          </Link>
          <Link href={`/lessons/${Number(params.id) + 1}`}>
            <Button variant="primary">Next Lesson →</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}