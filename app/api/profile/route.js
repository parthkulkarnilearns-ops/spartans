import { supabase } from '../../../lib/supabase';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get('userId');
  const { data, error } = await supabase
    .from('profiles').select('*').eq('id', userId).single();
  if (error) return Response.json({ error: error.message }, { status: 400 });
  return Response.json(data);
}

export async function POST(req) {
  const { userId, name, goals, current_state } = await req.json();
  const { data, error } = await supabase
    .from('profiles')
    .upsert({ id: userId, name, goals, current_state })
    .select();
  if (error) return Response.json({ error: error.message }, { status: 400 });
  return Response.json(data);
}