"use client";

import React from "react";
import ChatBubble from "../atoms/chat-bubble";
import ChatInput from "../molecules/message-input";
import { postChat } from "@/app/actions/post-chat";
import UserHeader from "./user-header";

type MessageProps = {
  role: "user" | "assistant";
  content: string;
  audio?: string;
};

const ChatBody = () => {
  const [chat, setChat] = React.useState<MessageProps[]>([]);
  const [isPending, startTransition] = React.useTransition();

  console.log(chat);

  const handleMessage = (message: MessageProps) => {
    setChat((prev) => [...prev, message]);
  };

  const handleSubmit = (input: string) => {
    const userMessage: MessageProps = { role: "user", content: input };
    handleMessage(userMessage);

    startTransition(async () => {
      const response = await postChat(input);
      if (response.success && response.data) {
        console.log(response);
        handleMessage({
          role: "assistant",
          content: response.data.content!,
          audio: response.data.audioFile,
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
      <UserHeader />
      <div className="w-1/2 flex flex-col items-stretch justify-between overflow-y-hidden">
        <div className="flex flex-col overflow-y-auto px-1 py-10 gap-8">
          <div className="w-full mx-auto space-y-6">
            {chat.map((chat, index) => (
              <ChatBubble
                isUser={chat.role == "user"}
                message={chat.content}
                key={index}
                filename={chat.audio}
              />
            ))}
            {isPending && (
              <ChatBubble
                message="Sedang membuat jawaban..."
                isUser={false}
                isPending={isPending}
              />
            )}
          </div>
          <h1
            className={`${
              chat.length == 0 &&
              "flex justify-center w-1/2 text-white font-semibold text-4xl absolute top-[40%]"
            }`}
          >
            Ask anything about sleep
          </h1>
        </div>
        <div
          className={`pb-4 ${
            chat.length == 0 && "w-1/2 absolute bottom-[30%]"
          }`}
        >
          <ChatInput submitHandler={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default ChatBody;
