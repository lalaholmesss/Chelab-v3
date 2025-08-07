import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import heroBg from "../../assets/images/bg-homepage.jpg";
import { useState, useEffect } from 'react';

export default function SearchBar() {
  const [input, setInput] = useState('');
  const [responseText, setResponseText] = useState('');
  const [loading, setLoading] = useState(false);
  const [isBgLoaded, setIsBgLoaded] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const img = new Image();
    img.src = heroBg;
    img.onload = () => {
      setIsBgLoaded(true);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    setResponseText('');
    setError('');

    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${import.meta.env.VITE_API_KEY}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [{ text: input }],
              },
            ],
            generationConfig: {
              maxOutputTokens: 200,
            },
          }),
        }
      );

      const data = await res.json();

      if (data?.candidates?.length > 0) {
        const rawText = data.candidates[0].content.parts[0].text;
        const cleanText = rawText.replace(/\*\*/g, '');
        setResponseText(cleanText);
      } else {
        setError('No response from Gemini.');
      }
    } catch (err) {
      console.error('Error fetching from Gemini:', err);
      setError('An error occurred. Check console.');
    }

    setLoading(false);
  };

  return (
    <div
      className="bg-cover bg-center h-screen relative flex items-center justify-center transition-opacity duration-500"
      style={{
        backgroundImage: isBgLoaded ? `url(${heroBg})` : "none",
        opacity: isBgLoaded ? 1 : 0,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
      
      <div className="relative z-10 flex flex-col  text-center bottom-20 text-white gap-6 w-full max-w-[1000px] px-4">
        <h1 className="text-7xl pb-3 uppercase font-bold ">Welcome!</h1>
        <h2 className="text-2xl font-light">The first feeling of chemists</h2>
      {/* <form
          className="w-full flex flex-col gap-8 items-center bg-white rounded-xl relative overflow-hidden p-8 z-10"
          onSubmit={handleSubmit}
        >
          <div className="relative w-full max-w-[800px]">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="absolute left-5 top-1/2 transform -translate-y-1/2 text-lightgray"
            />

            <input
              type="text"
              placeholder="Enter Prompt"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full pl-14 pr-6 py-3 rounded-xl text-lg text-black placeholder-gray-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="bg-main text-white text-2xl cursor-pointer px-8 py-3 rounded-lg border-none hover:bg-blue-800 transition font-extralight"
            disabled={loading}
          >
            {loading ? "Searching..." : "Search"}
          </button>
        </form>

        {(responseText || error) && (
          <div className="bg-white text-black max-w-[800px] p-3 rounded-xl shadow-lg text-left">
            {error && <p className="text-red-500">{error}</p>}
            {responseText && <p className="whitespace-pre-line">{responseText}</p>}
          </div>
        )}*/}
        
      </div>
    </div>
  );
}