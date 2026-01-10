import { Tool } from '@/types/tool';

interface ToolCardProps {
  tool: Tool;
  onClick: () => void;
}

export default function ToolCard({ tool, onClick }: ToolCardProps) {
  return (
    <button
      onClick={onClick}
      className="group relative block w-full text-left p-6 bg-white backdrop-blur-sm border border-gray-200 rounded-xl hover:border-orange-300 transition-all duration-300 hover:bg-gray-50 hover:scale-[1.02] shadow-sm"
    >
      {tool.featured && (
        <span className="absolute top-4 right-4 px-2 py-1 text-xs font-medium bg-orange-600 text-white rounded-full">
          <i className="fas fa-star mr-1"></i>
          Featured
        </span>
      )}
      
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
          <i className="fas fa-cube mr-2 text-orange-500"></i>
          {tool.name}
        </h3>
        
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 overflow-hidden">
          {tool.description}
        </p>
        
        <div className="flex flex-wrap gap-2 pt-2">
          {Array.isArray(tool.tags) && tool.tags.length > 0 && tool.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs text-gray-600 bg-gray-100 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="pt-2 flex items-center text-sm text-gray-600 group-hover:text-orange-600 transition-colors">
          <i className="fas fa-info-circle mr-2"></i>
          View More
          <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
        </div>
      </div>
    </button>
  );
}

