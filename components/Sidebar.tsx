'use client';

import { Tool } from '@/types/tool';

interface SidebarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  tools: Tool[];
}

export default function Sidebar({ searchQuery, onSearchChange, tools }: SidebarProps) {
  const categories = Array.from(new Set(tools.map((tool) => tool.category))).length;
  const featured = tools.filter((t) => t.featured).length;

  return (
    <aside className="w-full lg:w-80 flex-shrink-0">
      <div className="sticky top-24 space-y-6">
        {/* Search Bar */}
        <div>
          <label htmlFor="search" className="block text-sm font-medium mb-2 text-gray-700">
            <i className="fas fa-search mr-2 text-orange-600"></i>
            Search Tools
          </label>
          <div className="relative">
            <input
              id="search"
              type="text"
              placeholder="Search tools..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full px-4 py-3 pl-10 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
            />
            <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm">
          <h3 className="text-sm font-semibold mb-3 text-gray-900">
            <i className="fas fa-chart-bar mr-2 text-orange-600"></i>
            Quick Stats
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">
                <i className="fas fa-toolbox mr-2 text-orange-500"></i>
                Total Tools
              </span>
              <span className="font-medium text-gray-900">{tools.length}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">
                <i className="fas fa-folder mr-2 text-orange-500"></i>
                Categories
              </span>
              <span className="font-medium text-gray-900">{categories}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">
                <i className="fas fa-star mr-2 text-orange-500"></i>
                Featured
              </span>
              <span className="font-medium text-gray-900">{featured}</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

