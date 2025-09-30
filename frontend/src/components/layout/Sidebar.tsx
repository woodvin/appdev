'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  name: string;
  href: string;
  icon: string;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '/', icon: '🏠' },
  { name: 'Portfolio', href: '/dashboard', icon: '📊' },
  { name: 'Compete', href: '/compete', icon: '🏆' },
  { name: 'Learn', href: '/lessons', icon: '📚' },
  { name: 'Games', href: '/games', icon: '🎮' },
  { name: 'Plans', href: '/plans', icon: '💳' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-[#151921] border-r border-[#2D3139] flex flex-col h-screen fixed left-0 top-0">
      {/* Logo/Brand */}
      <div className="p-6 border-b border-[#2D3139]">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <div className="relative w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center font-bold text-white text-xl">
              A
            </div>
          </div>
          <div>
            <span className="text-xl font-bold text-white block">AppDev</span>
            <span className="text-xs text-gray-500">Finance Intelligence</span>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                group relative flex items-center space-x-3 px-4 py-3.5 rounded-xl
                transition-all duration-200 font-medium
                ${
                  isActive
                    ? 'bg-gradient-primary text-white shadow-lg shadow-purple-500/20'
                    : 'text-gray-400 hover:text-white hover:bg-[#1C2028]'
                }
              `}
            >
              {isActive && (
                <div className="absolute left-0 w-1 h-8 bg-white rounded-r-full"></div>
              )}
              <span className="text-2xl">{item.icon}</span>
              <span>{item.name}</span>
              {!isActive && (
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-xl transition-opacity"></div>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-6 border-t border-[#2D3139]">
        <div className="text-center space-y-2">
          <p className="text-xs text-gray-500">© 2025 AppDev</p>
          <p className="text-xs text-gray-600">v1.0.0</p>
        </div>
      </div>
    </aside>
  );
}