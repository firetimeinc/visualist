'use client';

import { useState, useMemo } from 'react';
import { Tool, ToolCategory } from '@/types/tool';
import { tools } from '@/data/tools';
import ToolCard from '@/components/ToolCard';
import CategoryFilter from '@/components/CategoryFilter';
import Sidebar from '@/components/Sidebar';
import ToolDetailPanel from '@/components/ToolDetailPanel';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<ToolCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(tools.map((tool) => tool.category)));
    return uniqueCategories.sort();
  }, []);

  const filteredTools = useMemo(() => {
    let filtered = tools;

    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered.filter((tool) => tool.category === activeCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (tool) =>
          tool.name.toLowerCase().includes(query) ||
          tool.description.toLowerCase().includes(query) ||
          tool.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    // Sort: featured first, then alphabetically
    return filtered.sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return a.name.localeCompare(b.name);
    });
  }, [activeCategory, searchQuery]);

  const handleToolClick = (tool: Tool) => {
    setSelectedTool(tool);
    setIsPanelOpen(true);
  };

  const handleClosePanel = () => {
    setIsPanelOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                <i className="fas fa-duotone fa-solid fa-pen-paintbrush mr-2 text-orange-600"></i>
                Visualist
              </h1>
              <p className="text-gray-600 text-sm mt-1">
                <i className="fas fa-wrench mr-1"></i>
                Curated tools for design, code & more
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <Sidebar searchQuery={searchQuery} onSearchChange={setSearchQuery} />

          {/* Main Content Area */}
          <div className="flex-1">
            {/* Category Filter */}
            <CategoryFilter
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />

            {/* Tools Grid */}
            {filteredTools.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredTools.map((tool) => (
                  <ToolCard key={tool.id} tool={tool} onClick={() => handleToolClick(tool)} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-gray-600 text-lg">No tools found matching your criteria.</p>
                <button
                  onClick={() => {
                    setActiveCategory('all');
                    setSearchQuery('');
                  }}
                  className="mt-4 px-6 py-2 bg-white hover:bg-gray-100 border border-gray-200 rounded-lg text-gray-900 transition-colors"
                >
                  Clear filters
                </button>
              </div>
            )}

            {/* Stats */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-gray-900">
                    <i className="fas fa-toolbox text-orange-600 mr-2"></i>
                    {tools.length}
                  </div>
                  <div className="text-gray-600 text-sm mt-1">Total Tools</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">
                    <i className="fas fa-folder text-orange-600 mr-2"></i>
                    {categories.length}
                  </div>
                  <div className="text-gray-600 text-sm mt-1">Categories</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">
                    <i className="fas fa-star text-orange-600 mr-2"></i>
                    {tools.filter((t) => t.featured).length}
                  </div>
                  <div className="text-gray-600 text-sm mt-1">Featured</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">
                    <i className="fas fa-tags text-orange-600 mr-2"></i>
                    {new Set(tools.flatMap((t) => t.tags)).size}
                  </div>
                  <div className="text-gray-600 text-sm mt-1">Tags</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-500 text-sm">
            Curated with care • Built with Next.js & Tailwind CSS
          </p>
        </div>
      </footer>

      {/* Tool Detail Panel */}
      <ToolDetailPanel
        tool={selectedTool}
        isOpen={isPanelOpen}
        onClose={handleClosePanel}
      />
    </div>
  );
}

