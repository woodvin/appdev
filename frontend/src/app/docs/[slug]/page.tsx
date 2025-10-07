import Link from 'next/link';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function DocPage({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen p-8 space-y-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <Link href="/docs" className="hover:text-purple-400">Documentation</Link>
          <span>→</span>
          <span className="text-white capitalize">{params.slug.replace(/-/g, ' ')}</span>
        </div>

        <article className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-white mb-6 capitalize">
            {params.slug.replace(/-/g, ' ')}
          </h1>

          <Card variant="gradient" padding="lg" className="not-prose mb-8">
            <p className="text-gray-200">
              This documentation page would contain detailed information about {params.slug.replace(/-/g, ' ')}.
            </p>
          </Card>

          <Card variant="default" padding="lg" className="not-prose">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
              <p className="text-gray-300 mb-4">
                Documentation content for {params.slug} would appear here. This would include:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Detailed explanations and guides</li>
                <li>Step-by-step instructions</li>
                <li>Code examples and best practices</li>
                <li>Screenshots and diagrams</li>
                <li>Frequently asked questions</li>
              </ul>

              <h3 className="text-xl font-bold text-white mt-8 mb-4">Getting Started</h3>
              <div className="bg-[#151921] p-4 rounded-lg border border-[#2D3139]">
                <code className="text-purple-400">
                  // Example code would go here
                  <br />
                  const example = "documentation content";
                </code>
              </div>

              <h3 className="text-xl font-bold text-white mt-8 mb-4">Related Topics</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
                {['Getting Started', 'API Reference', 'Best Practices', 'Troubleshooting'].map((topic) => (
                  <Link key={topic} href={`/docs/${topic.toLowerCase().replace(/\s+/g, '-')}`}>
                    <Card variant="bordered" padding="lg" hover>
                      <p className="text-white font-semibold">{topic}</p>
                      <p className="text-gray-400 text-sm mt-1">Learn more →</p>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </Card>
        </article>

        <div className="flex items-center justify-between pt-8">
          <Link href="/docs">
            <Button variant="outline">← Back to Docs</Button>
          </Link>
          <Button variant="ghost">Next Article →</Button>
        </div>
      </div>
    </div>
  );
}
