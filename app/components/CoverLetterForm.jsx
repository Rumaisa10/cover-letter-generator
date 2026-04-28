"use client";
import { useState } from "react";

export default function CoverLetterForm({ setGeneratedLetter }) {
  const [cv, setCv] = useState("");
  const [jobDescription, setJobDescription] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cv, jobDescription }),
      });
      const data = await response.json();
      setGeneratedLetter(data.letter);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className="max-w-2xl mx-auto mt-10 px-5">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        AI Cover Letter Generator
      </h1>
      <p className="text-gray-500 mb-8">
        Paste your experience and the job description to generate a tailored
        cover letter.
      </p>

      <div className="flex flex-col gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Your CV / Experience
          </label>
          <textarea
            value={cv}
            onChange={(e) => setCv(e.target.value)}
            rows={6}
            placeholder="Paste your CV or describe your skills and experience..."
            className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm resize-none focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Job Description
          </label>
          <textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            rows={6}
            placeholder="Paste the job description here..."
            className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm resize-none focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <button
          onClick={handleClick}
          className="w-full py-3 bg-black text-white font-medium rounded-xl hover:bg-gray-800 transition-colors"
        >
          Generate Cover Letter
        </button>
      </div>
    </div>
  );
}
