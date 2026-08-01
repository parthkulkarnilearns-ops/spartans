export async function runCommunitySignalAgent(topic) {
  // Simulated community signals (Can be connected to a live database or trending API later)
  const trendingSignals = {
    "design": "🔥 340 Gen Zs in your cohort are currently building their first design portfolios on Peerlist.",
    "coding": "⚡ Hackathon season is live! 120 peers are looking for teammates to build AI tools right now.",
    "general": "✨ 500+ peers completed their daily deep work block today."
  };

  return trendingSignals[topic] || "🌊 Community pulse: Peers are focusing heavily on creative side-hustles this week.";
}