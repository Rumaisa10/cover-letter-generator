'use client'
import CoverLetterForm from "./components/CoverLetterForm";
import CoverLetterOutput from "./components/CoverLetterOutput";
import { useState } from "react";


export default function Home() {
  const [generatedLetter,setGeneratedLetter] = useState('')

  return (
    <main>
      <CoverLetterForm setGeneratedLetter={setGeneratedLetter}></CoverLetterForm>
      <CoverLetterOutput generatedLetter={generatedLetter}></CoverLetterOutput>
    </main>
  );
}