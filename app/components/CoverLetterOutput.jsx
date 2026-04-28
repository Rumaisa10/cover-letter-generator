// CoverLetterOutput.jsx
export default function CoverLetterOutput({generatedLetter}) {
  const handleCopy = () =>{
    navigator.clipboard.writeText(generatedLetter)
  }
  return (
     <div className="max-w-2xl mx-auto mt-10 px-5">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        Your Generated Cover Letter
      </h1>
      <div className="text-gray-700 bg-gray-50 border border-gray-200 rounded-xl p-5 min-h-48 text-sm leading-relaxed whitespace-pre-wrap">
        {generatedLetter}
      </div>
      <button onClick={handleCopy} className="mt-2 w-full py-3 bg-blue-500 text-white font-medium rounded-xl hover:bg-gray-800 transition-colors">Copy</button>
      </div>
  )
}