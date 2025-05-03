import { handlePostChat } from "./actions/post-chat";
import ChatBubble from "./components/atoms/chat-bubble";
import ChatInput from "./components/molecules/message-input";

export default function Home() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-950">
      <div className="w-1/2 flex flex-col items-center justify-center gap-8 p-12">
        <ChatBubble isUser={true} message="Who are you?" />
        <ChatBubble
          isUser={false}
          message="I am a robot that will help you through everything"
        />
        <ChatInput submitHandler={handlePostChat} />
      </div>
    </div>
  );
}
