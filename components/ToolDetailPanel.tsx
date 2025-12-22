'use client';

import { Tool } from '@/types/tool';

interface ToolDetailPanelProps {
  tool: Tool | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ToolDetailPanel({ tool, isOpen, onClose }: ToolDetailPanelProps) {
  if (!tool) return null;

  const categoryLabels: Record<string, string> = {
    design: 'Design',
    code: 'Code',
    mac: 'Mac Apps',
    productivity: 'Productivity',
    other: 'Other',
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-96 lg:w-[32rem] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Tool Details</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close panel"
            >
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="space-y-6">
              {/* Tool Image */}
              {tool.image && (
                <div className="w-full -mt-6 -mx-6 mb-4">
                  <img
                    src={tool.image.startsWith('http') || tool.image.startsWith('//') ? tool.image : tool.image}
                    alt={tool.name}
                    className="w-full h-56 object-cover bg-gray-100"
                    onError={(e) => {
                      // Fallback if image fails to load
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              )}

              {/* Tool Name */}
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  <i className="fas fa-cube mr-2 text-orange-600"></i>
                  {tool.name}
                </h1>
                {tool.featured && (
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-orange-100 text-orange-700 rounded-full">
                    <i className="fas fa-star mr-1"></i>
                    Featured
                  </span>
                )}
              </div>

              {/* Description */}
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-2">
                  <i className="fas fa-align-left mr-2 text-orange-600"></i>
                  Description
                </h3>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {tool.longDescription || tool.description}
                </p>
              </div>

              {/* Category */}
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-2">
                  <i className="fas fa-folder mr-2 text-orange-600"></i>
                  Category
                </h3>
                <span className="inline-block px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-md">
                  {categoryLabels[tool.category] || tool.category}
                </span>
              </div>

              {/* Tags */}
              {tool.tags.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">
                    <i className="fas fa-tags mr-2 text-orange-600"></i>
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {tool.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs text-gray-600 bg-gray-100 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Visit Link */}
              <div className="pt-4 border-t border-gray-200">
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors"
                >
                  <i className="fas fa-external-link-alt mr-2"></i>
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

