export const getTaxAdvice = async (userQuery: string) => {
  try {
    const response = await fetch("/api/gemini", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userQuery }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Request failed");
    }

    return data.text;
  } catch (error) {
    console.error("AI Fetch Error:", error);
    return "I'm having trouble connecting to the AI brain right now. Please reach out to Lucia directly using the contact form below.";
  }
};
