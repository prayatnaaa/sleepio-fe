import React from "react";

type VideoBubbleProps = {
  isUser: boolean;
  videoUrl: string;
  videoTitle: string;
};

const VideoBubble: React.FC<VideoBubbleProps> = ({
  isUser,
  videoUrl,
  videoTitle,
}) => {
  console.log(videoTitle);
  return (
    <div className={`w-full flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`w-fit max-w-[70%] px-2 py-2 rounded-xl overflow-hidden ${
          isUser
            ? "flex justify-end rounded-br-none bg-blue-500"
            : "rounded-bl-none bg-gray-700"
        }`}
      >
        <video
          title={videoTitle}
          src={videoUrl}
          controls
          className="rounded-md max-w-full h-auto z-0"
        />
        {videoTitle && (
          <div className="static w-full text-center px-4 z-50">
            <p className="text-white text-sm bg-black/70 inline-block px-2 py-1 rounded">
              {videoTitle}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoBubble;
