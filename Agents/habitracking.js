import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || "dummy-key" });

export async function runHabitTrackingAgent(userActivityLog) {
  const prompt = `
    You are a Habit Tracking Agent for Gen Z. Analyze this user check-in log: "${userActivityLog}".
    Determine their current streak, spot if they are falling off, and write a short, non-toxic, encouraging accountability message.
  `;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "system", content: prompt }],
    });
    return completion.choices[0].message.content;
  } catch (error) {
    return "Hey bestie! Just a reminder to take 10 minutes today for your goals. You got this!";
  }
}