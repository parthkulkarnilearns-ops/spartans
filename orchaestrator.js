// Import your 4 specialized agents
import { runCuratorAgent } from './agents/curator-agent.js';
import { runHabitTrackingAgent } from './agents/habit-agent.js';
import { runCommunitySignalAgent } from './agents/community-agent.js';
import { runMentorMatchingAgent } from './agents/mentor-agent.js';

export async function runAuraOrchestrator(userInput, userGoal) {
  console.log("🎯 Orchestrator: Received user request. Dispatching to agents...");

  try {
    // Run all 4 agents concurrently (at the same time) for lightning-fast speed
    const [resources, habitFeedback, communitySignal, mentorAdvice] = await Promise.all([
      runCuratorAgent(userGoal),
      runHabitTrackingAgent(userInput),
      runCommunitySignalAgent(userGoal),
      runMentorMatchingAgent(userGoal)
    ]);

    // Package everything together for the frontend interface
    const unifiedResponse = {
      status: "success",
      motivation: habitFeedback,
      curatedTools: resources,
      communityPulse: communitySignal,
      mentorInsight: mentorAdvice
    };

    console.log("✨ Orchestrator: All agents reported back. Response compiled.");
    return unifiedResponse;

  } catch (error) {
    console.error("Orchestrator Error:", error);
    return {
      status: "error",
      message: "Hey bestie, our multi-agent network took a quick coffee break. Let's try again!"
    };
  }
}
