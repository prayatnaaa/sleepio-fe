"use server";

export const postChat = async (query: string) => {
  const response = await fetch(`${process.env.API_URL}/ask`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  });

  // console.log(response);

  if (!response.ok) {
    return { success: false, message: "Failed to generate reponses" };
  }

  const data = await response.json();

  return {
    success: true,
    message: "Success",
    data: {
      // content: data.content.documents[0],
      content: data.content,
      audioFile: data.audio,
    },
  };
};
