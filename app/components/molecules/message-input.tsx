"use client";

import React from "react";
import { SendIcon } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface ChatInputProps {
  submitHandler: (userInput: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ submitHandler }) => {
  const [inputValue, setInputValue] = React.useState("");
  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!inputValue.trim()) return;

    submitHandler(inputValue.trim());
    setInputValue("");
  };

  return (
    <div className="w-full flex gap-4 justify-center">
      <div className="grid w-full items-center gap-1.5">
        <form className="relative" onSubmit={handleSubmit}>
          <Textarea
            placeholder="Ask anything about sleep..."
            className="w-full rounded-lg bg-gray-950 pl-3 text-white h-24"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
          />
          <Button
            className="absolute right-2.5 bottom-2.5 bg-white p-4"
            type="submit"
            disabled={!inputValue}
            size="icon"
          >
            <SendIcon size={100} color="black" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ChatInput;
