"use server";

export const getAudio = async (filename: string) => {
  try {
    const response = await fetch(`${process.env.API_URL}/audio/${filename}`);

    if (!response.ok) {
      return { success: false, message: "Audio not found" };
    }

    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const base64Audio = buffer.toString("base64");

    return {
      success: true,
      data: {
        base64Audio,
        mimeType: response.headers.get("content-type") || "audio/wav",
      },
    };
  } catch {
    return { success: false, message: "Error fetching audio" };
  }
};
