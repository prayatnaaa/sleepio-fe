import React from "react";

type ChatBubbleProps = {
  isUser: boolean;
  message: string;
};

const ChatBubble: React.FC<ChatBubbleProps> = ({ isUser, message }) => {
  return (
    <div className={`w-full flex ${isUser && "justify-end"}`}>
      <div
        className={`w-fit max-w-full px-4 py-2 rounded-xl ${
          isUser
            ? "flex justify-end rounded-br-none bg-blue-500 text-white"
            : "rounded-bl-none bg-gray-700 text-white"
        }`}
      >
        {message}
      </div>
    </div>
  );
};

export default ChatBubble;
