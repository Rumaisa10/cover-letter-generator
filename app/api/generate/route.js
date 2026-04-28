import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(request) {
  const { cv, jobDescription } = await request.json();

  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

  const prompt = `
    You are a cover letter generator. Given the following CV and job description, generate a tailored cover letter.
    
    Requirements:
    - Keep it concise (200–300 words)
    - Make it personalized to the role
    - Highlight relevant skills and projects
    - Show enthusiasm but keep it professional
    - Avoid generic phrases like "I am writing to apply"
    - End with a strong closing
    
    Tone: Confident, clear, and modern

    CV / Experience:
    ${cv}

    Job Description:
    ${jobDescription}
  `;

  const result = await model.generateContent(prompt);
  const letter = result.response.text();

  return Response.json({ letter });
}