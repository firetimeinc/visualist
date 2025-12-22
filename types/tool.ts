export type ToolCategory = 'design' | 'code' | 'mac' | 'productivity' | 'other';

export interface Tool {
  id: string;
  name: string;
  description: string;
  longDescription?: string; // Extended description for detail panel
  url: string;
  category: ToolCategory;
  tags: string[];
  featured?: boolean;
  image?: string; // Can be a local path (/images/tool.png) or remote URL (https://...)
}

