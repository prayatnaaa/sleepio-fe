"use client";

import React from "react";
import { FileAudio2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getAudio } from "@/app/actions/get-audio";

type ChatBubbleProps = {
  isUser: boolean;
  message: string;
  isPending?: boolean;
  filename?: string;
};

const ChatBubble: React.FC<ChatBubbleProps> = ({
  isUser,
  message,
  isPending,
  filename,
}) => {
  const [audioUrl, setAudioUrl] = React.useState<string | null>(null);

  const handleSubmit = async () => {
    const result = await getAudio(filename as string);

    if (result.success && result.data?.base64Audio) {
      const { base64Audio, mimeType } = result.data;

      const binaryString = atob(base64Audio);
      const len = binaryString.length;
      const bytes = new Uint8Array(len);

      for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }

      const blob = new Blob([bytes], { type: mimeType });
      const url = URL.createObjectURL(blob);
      setAudioUrl(url);
    } else {
      alert("Failed to fetch audio");
    }
  };

  return (
    <div className="w-full">
      <div className={`flex ${isUser && "justify-end"}`}>
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
      <div
        className={`flex flex-col gap-1 ${isUser && "hidden"} ${
          isPending && "hidden"
        } text-white`}
      >
        <Button
          onClick={handleSubmit}
          size="icon"
          className="bg-transparent hover:cursor-pointer"
        >
          <FileAudio2Icon size={100} color="white" />
        </Button>
        {audioUrl && <audio src={audioUrl} controls autoPlay />}
      </div>
    </div>
  );
};

export default ChatBubble;
