import { supabase, isSupabaseConfigured } from './supabase';
import { Tool } from '@/types/tool';
import { tools as localTools } from '@/data/tools';

export async function getTools(): Promise<Tool[]> {
  // If Supabase is not configured, return local tools
  if (!isSupabaseConfigured()) {
    console.log('Supabase not configured, using local tools');
    return localTools;
  }

  try {
    const { data, error } = await supabase!
      .from('tools')
      .select('*')
      .order('featured', { ascending: false })
      .order('name', { ascending: true });

    if (error) {
      console.error('Error fetching tools from Supabase:', error);
      // Fallback to local tools if Supabase fails
      return localTools;
    }

    if (!data || data.length === 0) {
      // If no data in Supabase, use local tools
      console.log('No tools found in Supabase, using local tools');
      return localTools;
    }

    // Transform Supabase data to match Tool interface
    return data.map((tool: any) => ({
      id: tool.id.toString(),
      name: tool.name,
      description: tool.description,
      longDescription: tool.long_description || undefined,
      url: tool.url,
      category: tool.category,
      tags: Array.isArray(tool.tags) ? tool.tags : (tool.tags ? [tool.tags] : []),
      featured: tool.featured || false,
      image: tool.image || undefined,
    }));
  } catch (error) {
    console.error('Error fetching tools:', error);
    // Fallback to local tools on any error
    return localTools;
  }
}

export async function getToolById(id: string): Promise<Tool | null> {
  // If Supabase is not configured, search local tools
  if (!isSupabaseConfigured()) {
    return localTools.find(tool => tool.id === id) || null;
  }

  try {
    const { data, error } = await supabase!
      .from('tools')
      .select('*')
      .eq('id', id)
      .single();

    if (error || !data) {
      // Fallback to local tools
      return localTools.find(tool => tool.id === id) || null;
    }

    return {
      id: data.id.toString(),
      name: data.name,
      description: data.description,
      longDescription: data.long_description || undefined,
      url: data.url,
      category: data.category,
      tags: Array.isArray(data.tags) ? data.tags : (data.tags ? [data.tags] : []),
      featured: data.featured || false,
      image: data.image || undefined,
    };
  } catch (error) {
    console.error('Error fetching tool:', error);
    // Fallback to local tools
    return localTools.find(tool => tool.id === id) || null;
  }
}

