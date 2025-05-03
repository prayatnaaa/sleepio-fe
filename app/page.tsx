import ChatBubble from "./components/atoms/chat-bubble";

export default function Home() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-950">
      <div className="w-1/2 flex flex-col items-center justify-center gap-8 p-12">
        <ChatBubble isUser={true} message="Who are you?" />
        <ChatBubble
          isUser={false}
          message="I am a robot that will help you through everything"
        />
      </div>
    </div>
  );
}
