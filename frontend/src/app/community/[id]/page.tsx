import Link from 'next/link';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function CommunityPostPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen p-8 space-y-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <Link href="/community" className="hover:text-purple-400">Community</Link>
          <span>→</span>
          <span className="text-white">Discussion</span>
        </div>

        <Card variant="elevated" padding="lg">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold">
                SC
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-2xl font-bold text-white">Best strategies for completing the "Week Warrior" achievement?</h1>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>by SarahChen</span>
                  <span>•</span>
                  <span>Posted 15 minutes ago</span>
                  <span>•</span>
                  <span className="px-2 py-0.5 bg-[#1C2028] rounded text-xs">❓ Help & Support</span>
                </div>
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300">
                I'm trying to maintain a 7-day streak to get the Week Warrior achievement. I've managed to get to 5 days but keep breaking my streak. Does anyone have tips on how to stay consistent?
              </p>
              <p className="text-gray-300 mt-4">
                What time of day works best for you? Should I set reminders? Any advice would be appreciated!
              </p>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-500 pt-4 border-t border-[#2D3139]">
              <div className="flex items-center gap-2">
                <span>💬</span>
                <span>23 replies</span>
              </div>
              <div className="flex items-center gap-2">
                <span>👁️</span>
                <span>456 views</span>
              </div>
            </div>
          </div>
        </Card>

        <Card variant="default" padding="lg">
          <h2 className="text-xl font-bold text-white mb-6">Replies</h2>
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex gap-4 p-4 bg-[#151921] rounded-lg border border-[#2D3139]">
                <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-sm">
                  U{i}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-white font-semibold">User {i}</span>
                    <span className="text-sm text-gray-500">{i} hour{i > 1 ? 's' : ''} ago</span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    This is a placeholder reply. In a real implementation, this would contain the actual response from the community member.
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-[#2D3139]">
            <h3 className="text-lg font-bold text-white mb-4">Post a Reply</h3>
            <textarea
              className="w-full px-4 py-3 bg-[#151921] border border-[#2D3139] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              rows={4}
              placeholder="Write your reply..."
            />
            <div className="flex gap-3 mt-4">
              <Button variant="primary">Post Reply</Button>
              <Button variant="outline">Cancel</Button>
            </div>
          </div>
        </Card>

        <Link href="/community">
          <Button variant="outline">← Back to Community</Button>
        </Link>
      </div>
    </div>
  );
}
