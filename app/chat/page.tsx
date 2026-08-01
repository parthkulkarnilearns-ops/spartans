import { ChatSidebar } from '@/components/chat/chat-sidebar'
import { ChatConversation } from '@/components/chat/chat-conversation'

export default function ChatPage() {
  return (
    <div className="flex h-dvh overflow-hidden bg-background">
      <ChatSidebar />
      <ChatConversation />
    </div>
  )
}