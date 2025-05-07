import React from "react";
import ChatBubble from "../atoms/chat-bubble";
import ChatInput from "../molecules/message-input";
import { handlePostChat } from "@/app/actions/post-chat";

const chats = [
  {
    isUser: true,
    message: "Hey, how are you?",
  },
  {
    isUser: false,
    message: "I am a robot that will help you through everything",
  },
  {
    isUser: true,
    message: "Hey, how are you?",
  },
  {
    isUser: false,
    message: "I am a robot that will help you through everything",
  },
  {
    isUser: true,
    message: "Hey, how are you?",
  },
  {
    isUser: false,
    message: "I am a robot that will help you through everything",
  },
  {
    isUser: true,
    message: "Hey, how are you?",
  },
  {
    isUser: false,
    message: "I am a robot that will help you through everything",
  },
  {
    isUser: true,
    message: "Hey, how are you?",
  },
  {
    isUser: false,
    message: "I am a robot that will help you through everything",
  },
  {
    isUser: true,
    message: "Hey, how are you?",
  },
  {
    isUser: false,
    message: "I am a robot that will help you through everything",
  },
];

const ChatBody = () => {
  return (
    <div className="w-full h-screen flex justify-center bg-gray-950">
      <div className="w-1/2 flex flex-col items-stretch justify-between">
        <div className="flex flex-col overflow-y-auto px-2 py-10 gap-8">
          <div className="w-full mx-auto space-y-6">
            {chats.map((chat, index) => (
              <ChatBubble
                isUser={chat.isUser}
                message={chat.message}
                key={index}
              />
            ))}
          </div>
        </div>
        <div className="pb-4">
          <ChatInput submitHandler={handlePostChat} />
        </div>
      </div>
    </div>
  );
};

export default ChatBody;
