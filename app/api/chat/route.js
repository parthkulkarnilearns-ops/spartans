import { supabase } from '../../../lib/supabase';
import { getAuraResponse } from '../../../lib/ai-logic';

export async function POST(req) {
  const { userId, message } = await req.json();

  await supabase.from('messages').insert({
    user_id: userId, role: 'user', content: message
  });

  const { data: history } = await supabase
    .from('messages')
    .select('role, content')
    .eq('user_id', userId)
    .order('created_at', { ascending: true })
    .limit(20);

  const aiReply = await getAuraResponse(history, message);

  await supabase.from('messages').insert({
    user_id: userId, role: 'assistant', content: aiReply
  });

  return Response.json({ reply: aiReply });
}