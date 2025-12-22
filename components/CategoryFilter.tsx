'use client';

import { ToolCategory } from '@/types/tool';

interface CategoryFilterProps {
  categories: ToolCategory[];
  activeCategory: ToolCategory | 'all';
  onCategoryChange: (category: ToolCategory | 'all') => void;
}

const categoryLabels: Record<ToolCategory | 'all', string> = {
  all: 'All',
  design: 'Design',
  code: 'Code',
  mac: 'Mac Apps',
  productivity: 'Productivity',
  other: 'Other',
};

export default function CategoryFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  const allCategories: (ToolCategory | 'all')[] = ['all', ...categories];

  return (
    <div className="flex flex-wrap gap-3 mb-8">
      {allCategories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
            activeCategory === category
              ? 'bg-orange-600 text-white shadow-lg shadow-orange-500/50'
              : 'bg-white text-gray-700 hover:bg-gray-100 hover:text-gray-900 border border-gray-200'
          }`}
        >
          {categoryLabels[category]}
        </button>
      ))}
    </div>
  );
}

