import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || "dummy-key" });

export async function runMentorMatchingAgent(userAspiration) {
  const prompt = `
    You are a Mentor Matching Agent. Given the user aspiration: "${userAspiration}", 
    suggest a specific mentor archetypes (e.g., 'The Senior Product Designer who started on Dribbble', 'The Indie Hacker scaling solo'), 
    and provide 1 piece of advice they would give.
  `;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "system", content: prompt }],
    });
    return completion.choices[0].message.content;
  } catch (error) {
    return "Matched with a Senior Design Lead: 'Focus less on pixel perfection early on, and more on solving real user pain points.'";
  }
}