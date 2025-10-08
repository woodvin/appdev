'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

interface MenuItem {
  label: string;
  href?: string;
  onClick?: () => void;
  icon: string;
  divider?: boolean;
}

export default function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const menuItems: MenuItem[] = [
    { label: 'Profile', href: '/profile', icon: '👤' },
    { label: 'Settings', href: '/settings', icon: '⚙️' },
    { label: 'Subscription', href: '/subscription', icon: '💳' },
    { label: 'Achievements', href: '/achievements', icon: '🏆' },
    { label: 'Help & Support', href: '/support', icon: '❓' },
    { label: 'Log Out', onClick: () => console.log('Logging out...'), icon: '🚪', divider: true },
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-200"
      >
        JD
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-56 bg-[#21252E] border border-[#2D3139] rounded-xl shadow-xl overflow-hidden z-50">
          <div className="p-4 border-b border-[#2D3139]">
            <p className="text-white font-semibold">John Doe</p>
            <p className="text-xs text-gray-400">john.doe@example.com</p>
          </div>

          <div className="py-2">
            {menuItems.map((item, index) => (
              <div key={index}>
                {item.divider && <div className="my-2 border-t border-[#2D3139]" />}
                {item.href ? (
                  <Link
                    href={item.href}
                    className="flex items-center gap-3 px-4 py-2.5 text-gray-300 hover:bg-[#1C2028] hover:text-white transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-sm font-medium">{item.label}</span>
                  </Link>
                ) : (
                  <button
                    onClick={() => {
                      item.onClick?.();
                      setIsOpen(false);
                    }}
                    className="w-full flex items-center gap-3 px-4 py-2.5 text-gray-300 hover:bg-[#1C2028] hover:text-white transition-colors"
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
