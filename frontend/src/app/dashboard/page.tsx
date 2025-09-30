import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function DashboardPage() {
  // Mock portfolio data
  const assets = [
    { ticker: 'AAPL', name: 'Apple Inc.', value: 8500, change: 2.3, allocation: 34.6 },
    { ticker: 'GOOGL', name: 'Alphabet Inc.', value: 6200, change: -1.2, allocation: 25.3 },
    { ticker: 'MSFT', name: 'Microsoft Corp.', value: 5800, change: 1.8, allocation: 23.6 },
    { ticker: 'TSLA', name: 'Tesla Inc.', value: 4032, change: 5.4, allocation: 16.5 },
  ];

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">Portfolio</h1>
          <p className="text-gray-400">Track and analyze your investments</p>
        </div>
        <Button variant="primary">Add Asset</Button>
      </div>

      {/* Portfolio Value */}
      <Card variant="gradient" padding="lg">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2 space-y-2">
            <p className="text-white/60 text-sm font-medium">Total Portfolio Value</p>
            <h2 className="text-6xl font-bold text-white font-numeric">£24,532</h2>
            <div className="flex items-center gap-3">
              <span className="text-green-300 font-numeric text-xl font-semibold">+£1,243</span>
              <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-sm font-medium">
                +5.34%
              </span>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-white/60 text-sm">Today&apos;s P/L</p>
            <p className="text-3xl font-bold text-green-300 font-numeric">+£324</p>
          </div>
          <div className="space-y-2">
            <p className="text-white/60 text-sm">This Month</p>
            <p className="text-3xl font-bold text-green-300 font-numeric">+£1.2K</p>
          </div>
        </div>
      </Card>

      {/* Assets Grid */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Holdings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {assets.map((asset) => (
            <Card key={asset.ticker} variant="elevated" hover>
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <h3 className="text-3xl font-bold text-white font-mono">{asset.ticker}</h3>
                    <p className="text-sm text-gray-400">{asset.name}</p>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    asset.change >= 0
                      ? 'bg-green-500/20 text-green-300'
                      : 'bg-red-500/20 text-red-300'
                  }`}>
                    {asset.change >= 0 ? '+' : ''}{asset.change}%
                  </div>
                </div>

                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Value</p>
                    <p className="text-3xl font-bold text-white font-numeric">
                      £{asset.value.toLocaleString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500 mb-1">Portfolio Weight</p>
                    <p className="text-2xl font-semibold text-purple-400 font-numeric">
                      {asset.allocation}%
                    </p>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="relative h-2 bg-[#151921] rounded-full overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-gradient-primary rounded-full"
                    style={{ width: `${asset.allocation * 2.89}%` }}
                  ></div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Risk Metrics */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Risk Analysis</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card variant="bordered" padding="lg">
            <div className="space-y-3">
              <p className="text-sm text-gray-500 uppercase tracking-wide">Beta</p>
              <p className="text-4xl font-bold text-white font-numeric">1.24</p>
              <p className="text-xs text-gray-600">Volatility vs market</p>
            </div>
          </Card>
          <Card variant="bordered" padding="lg">
            <div className="space-y-3">
              <p className="text-sm text-gray-500 uppercase tracking-wide">Sharpe Ratio</p>
              <p className="text-4xl font-bold text-white font-numeric">1.84</p>
              <p className="text-xs text-gray-600">Risk-adjusted return</p>
            </div>
          </Card>
          <Card variant="bordered" padding="lg">
            <div className="space-y-3">
              <p className="text-sm text-gray-500 uppercase tracking-wide">Volatility</p>
              <p className="text-4xl font-bold text-white font-numeric">18.2%</p>
              <p className="text-xs text-gray-600">Annual std deviation</p>
            </div>
          </Card>
          <Card variant="bordered" padding="lg">
            <div className="space-y-3">
              <p className="text-sm text-gray-500 uppercase tracking-wide">Max Drawdown</p>
              <p className="text-4xl font-bold text-red-400 font-numeric">-12.3%</p>
              <p className="text-xs text-gray-600">Largest decline</p>
            </div>
          </Card>
        </div>
      </div>

      {/* Chart Placeholder */}
      <Card variant="default" padding="lg">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-white">Performance</h3>
            <div className="flex gap-2">
              <button className="px-4 py-2 rounded-lg bg-purple-500/20 text-purple-400 text-sm font-medium">
                1M
              </button>
              <button className="px-4 py-2 rounded-lg bg-[#151921] text-gray-400 text-sm hover:text-white transition-colors">
                3M
              </button>
              <button className="px-4 py-2 rounded-lg bg-[#151921] text-gray-400 text-sm hover:text-white transition-colors">
                1Y
              </button>
              <button className="px-4 py-2 rounded-lg bg-[#151921] text-gray-400 text-sm hover:text-white transition-colors">
                ALL
              </button>
            </div>
          </div>
          <div className="h-96 bg-[#151921] rounded-2xl flex items-center justify-center border border-[#2D3139]">
            <p className="text-gray-500">Chart - Performance over time</p>
          </div>
        </div>
      </Card>
    </div>
  );
}