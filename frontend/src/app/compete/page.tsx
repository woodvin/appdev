import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function CompetePage() {
  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">Compete</h1>
          <p className="text-gray-400">Challenge yourself and others</p>
        </div>
        <Button variant="primary">New Challenge</Button>
      </div>

      {/* Placeholder Content */}
      <Card variant="gradient" padding="lg">
        <div className="text-center py-12">
          <p className="text-white/60 text-lg">Competition features coming soon</p>
        </div>
      </Card>
    </div>
  );
}
