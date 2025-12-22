import { Tool } from '@/types/tool';

// to feature a tool, add the 'featured: true' property
// 
// Image support:
// - Remote images: Use full URL (e.g., 'https://example.com/image.jpg')
// - Local images: Place in /public/images/ and reference as '/images/tool.png'
//
// Description fields:
// - description: Short text shown on cards (limited to 2 lines)
// - longDescription: Extended text shown in detail panel (optional)

export const tools: Tool[] = [

  {
    id: '1',
    name: 'Figma',
    description: 'The collaborative interface design tool',
    longDescription: 'Figma is a powerful, browser-based design tool that enables teams to collaborate in real-time. Whether you\'re designing interfaces, prototyping interactions, or creating design systems, Figma brings your entire design process into one place. With features like auto-layout, components, and plugins, Figma has become the industry standard for modern design workflows.',
    url: 'https://www.figma.com',
    category: 'design',
    tags: ['ui', 'ux', 'design', 'collaboration'],
    featured: true,
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&h=400&fit=crop', // Example remote image
  },
  {
    id: '2',
    name: 'Sketch',
    description: 'Professional digital design for Mac',
    url: 'https://www.sketch.com',
    category: 'design',
    tags: ['ui', 'design', 'mac'],
  },
  {
    id: '3',
    name: 'Adobe XD',
    description: 'Design, prototype, and share user experiences',
    url: 'https://www.adobe.com/products/xd.html',
    category: 'design',
    tags: ['ui', 'ux', 'prototyping'],
  },
  {
    id: '4',
    name: 'Framer',
    description: 'Build beautiful, interactive designs',
    url: 'https://www.framer.com',
    category: 'design',
    tags: ['prototyping', 'interactive', 'design'],
    featured: true,
  },
  {
    id: '5',
    name: 'Principle',
    description: 'Animate your ideas, design better apps',
    url: 'https://principleformac.com',
    category: 'design',
    tags: ['animation', 'prototyping', 'mac'],
  },
  
  // Code Tools
  {
    id: '6',
    name: 'VS Code',
    description: 'Free, open-source code editor',
    url: 'https://code.visualstudio.com',
    category: 'code',
    tags: ['editor', 'development', 'free'],
    featured: true,
  },
  {
    id: '7',
    name: 'Cursor',
    description: 'The AI-first code editor',
    url: 'https://cursor.sh',
    category: 'code',
    tags: ['editor', 'ai', 'development'],
    featured: true,
  },
  {
    id: '8',
    name: 'GitHub Copilot',
    description: 'Your AI pair programmer',
    url: 'https://github.com/features/copilot',
    category: 'code',
    tags: ['ai', 'coding', 'assistant'],
  },
  {
    id: '9',
    name: 'Warp',
    description: 'The terminal for the 21st century',
    url: 'https://www.warp.dev',
    category: 'code',
    tags: ['terminal', 'productivity', 'mac'],
  },
  {
    id: '10',
    name: 'Raycast',
    description: 'Blazingly fast, totally extendable launcher with many plugins and integrations to many diffrent sites and applications.',
    url: 'https://www.raycast.com',
    category: 'code',
    tags: ['launcher', 'productivity', 'mac'],
    featured: true,
  },
  
  // Mac Apps
  {
    id: '11',
    name: 'Alfred',
    description: 'Productivity app for macOS',
    url: 'https://www.alfredapp.com',
    category: 'mac',
    tags: ['launcher', 'productivity'],
  },
  {
    id: '12',
    name: 'CleanMyMac X',
    description: 'Clean, optimize, and maintain your Mac',
    url: 'https://macpaw.com/cleanmymac',
    category: 'mac',
    tags: ['utility', 'maintenance'],
  },
  {
    id: '13',
    name: 'Bartender',
    description: 'Organize your menu bar apps',
    url: 'https://www.macbartender.com',
    category: 'mac',
    tags: ['menu-bar', 'organization'],
  },
  {
    id: '14',
    name: 'Rectangle',
    description: 'Move and resize windows with ease',
    url: 'https://rectangleapp.com',
    category: 'mac',
    tags: ['window-management', 'productivity'],
  },
  {
    id: '15',
    name: 'Paste',
    description: 'Smart clipboard manager',
    url: 'https://pasteapp.io',
    category: 'mac',
    tags: ['clipboard', 'productivity'],
  },
  
  // Productivity
  {
    id: '16',
    name: 'Notion',
    description: 'All-in-one workspace for notes, docs, and more',
    url: 'https://www.notion.so',
    category: 'productivity',
    tags: ['notes', 'docs', 'workspace'],
    featured: true,
  },
  {
    id: '17',
    name: 'Linear',
    description: 'The issue tracking tool you\'ll enjoy using',
    url: 'https://linear.app',
    category: 'productivity',
    tags: ['project-management', 'tracking'],
  },
  {
    id: '18',
    name: 'Obsidian',
    description: 'A powerful knowledge base',
    url: 'https://obsidian.md',
    category: 'productivity',
    tags: ['notes', 'knowledge-base'],
  },
];

