"use client";

import React from "react";
import ChatBubble from "../atoms/chat-bubble";
import ChatInput from "../molecules/message-input";
import { postChat } from "@/app/actions/post-chat";

type MessageProps = {
  role: "user" | "assistant";
  content: string;
};

const ChatBody = () => {
  const [chat, setChat] = React.useState<MessageProps[]>([]);
  const [isPending, startTransition] = React.useTransition();

  const handleMessage = (message: MessageProps) => {
    setChat((prev) => [...prev, message]);
  };

  const handleSubmit = (input: string) => {
    const userMessage: MessageProps = { role: "user", content: input };
    handleMessage(userMessage);

    startTransition(async () => {
      const response = await postChat(input);

      if (response.success && response.data) {
        console.log(response.data.message);
        handleMessage({
          role: "assistant",
          content: response.data.message.content!,
        });
      } else {
        handleMessage({
          role: "assistant",
          content: "Maaf, terjadi kesalahan.",
        });
      }
    });
  };

  return (
    <div className="w-full h-screen flex justify-center bg-gray-950">
      <div className="w-1/2 flex flex-col items-stretch justify-between">
        <div className="flex flex-col overflow-y-auto px-2 py-10 gap-8">
          <div className="w-full mx-auto space-y-6">
            {chat.map((chat, index) => (
              <ChatBubble
                isUser={chat.role == "user"}
                message={chat.content}
                key={index}
              />
            ))}
            {isPending && (
              <ChatBubble message="Sedang membuat jawaban..." isUser={false} />
            )}
          </div>
        </div>
        <div className="pb-4">
          <ChatInput submitHandler={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default ChatBody;
