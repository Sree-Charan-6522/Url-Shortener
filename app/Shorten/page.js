"use client"
import { useState } from 'react';

const Short = () => {
  const [longUrl, setLongUrl] = useState('');
  const [shortName, setShortName] = useState('');
  const [shortenedLink, setShortenedLink] = useState('');

  const handleShorten = async () => {
    try {
      const response = await fetch('/api/shorten', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ longUrl, shortName }),
      });

      const data = await response.json();

      if (response.ok) {
        // Set the shortened link to the state
        setShortenedLink(`http://localhost:3000/${data.shortName}`);
      } else {
        console.error(data.error || 'Error shortening URL');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="w-full sm:w-[80%] md:w-[50%] lg:w-[30%] bg-dark-contrast rounded-lg flex flex-col justify-center items-center gap-5 !px-4 !py-6 !border-2 !border-gray-500 shadow-lg">
        <h1 className="!text-3xl text-dark-muted !font-bold">Shorten Your Links</h1>
        <p className="text-dark-muted !text-sm !mt-2">Paste your long URL below to shorten it.</p>
        <div className="flex flex-col justify-center items-center gap-4 !mt-4 w-full">
          <input
            type="text"
            placeholder="Enter your long URL here"
            className="w-full h-10 bg-dark-contrast rounded-lg !px-4 !text-sm !sm:text-base"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter your long Short Name"
            className="w-full h-10 bg-dark-contrast rounded-lg !px-4 !text-sm !sm:text-base"
            value={shortName}
            onChange={(e) => setShortName(e.target.value)}
          />
          <button
            className="bg-accent-red hover:bg-accent-redHover w-full h-10 rounded-lg text-white cursor-pointer !font-bold !text-sm sm:text-base"
            onClick={handleShorten}
          >
            Shorten
          </button>
          {shortenedLink && (
            <div className="mt-4 w-full">
              <p className="text-center text-sm sm:text-base">Shortened URL: 
                <a href={shortenedLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{shortenedLink}</a>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Short;
