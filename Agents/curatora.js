export async function runCuratorAgent(userGoal) {
  const TAVILY_API_KEY = process.env.TAVILY_API_KEY || "dummy-key";
  
  try {
    const response = await fetch("https://api.tavily.com/search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        api_key: TAVILY_API_KEY,
        query: `best beginner resources tools podcasts for ${userGoal}`,
        search_depth: "basic",
        max_results: 3
      })
    });

    const data = await response.json();
    return data.results ? data.results.map(r => ({ title: r.title, url: r.url })) : [];
  } catch (error) {
    console.error("Curator Agent Error:", error);
    return [{ title: "Learn UI/UX Basics on Figma", url: "https://figma.com" }];
  }
}