import { supabase } from '../../../lib/supabase';
import { searchResources } from '../../../lib/search-api';

export async function POST(req) {
  const { userId, query } = await req.json();
  const results = await searchResources(query);

  const rows = results.map(r => ({ ...r, user_id: userId, source: 'tavily' }));
  await supabase.from('curated_items').insert(rows);

  return Response.json({ items: rows });
}