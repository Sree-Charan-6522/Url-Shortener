"use client"
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

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
        setShortenedLink(`https://url-shortener-q7ip.vercel.app/${data.shortName}`);
      } else {
        console.error(data.error || 'Error shortening URL');
        alert(data.error || 'Error shortening URL');
      }
      setLongUrl(''); // Clear the input field after shortening
      setShortName(''); // Clear the input field after shortening
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const buref = useRef(null);
  const suref = useRef(null);
  const btnref = useRef(null);

  const handleInputs = (e) => {
    const burl = buref.current?.value.trim() ||'';
    const surl = suref.current?.value.trim() ||'';
    const isfilled = burl !== '' && surl !== '';
    if (isfilled) {
      handleShorten();
    } else {
      alert('Please fill in both fields!');
    }
    e.preventDefault(); // Prevent default form submission
  }

  return (
    <div className="h-[53.7em] w-full flex justify-center items-center">
      <div className="w-full sm:w-[80%] md:w-[50%] lg:w-[30%] bg-dark-contrast rounded-lg flex flex-col justify-center items-center gap-5 !px-4 !py-6 !border-2 !border-gray-500 shadow-lg">
        <h1 className="!text-3xl text-dark-muted !font-bold">Shorten Your Links</h1>
        <p className="text-dark-muted !text-sm !mt-2">Paste your long URL below to shorten it.</p>
        <div className="flex flex-col justify-center items-center gap-4 !mt-4 w-full">
          <input
          ref={buref}
            type="text"
            placeholder="Enter your long URL here"
            className="w-full h-10 bg-dark-contrast rounded-lg !px-4 !text-sm !sm:text-base"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
          />
          <input
            ref={suref}
            type="text"
            placeholder="Enter your long Short Name"
            className="w-full h-10 bg-dark-contrast rounded-lg !px-4 !text-sm !sm:text-base"
            value={shortName}
            onChange={(e) => setShortName(e.target.value)}
          />
          <motion.div className='hover:!text-lg' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <button
            
            className="bg-accent-red hover:bg-accent-redHover !px-10 w-full h-10 rounded-lg text-white cursor-pointer !font-bold !text-md sm:!text-base"
            onClick={(e)=>{handleInputs(e)}} >
            Shorten
          </button>
            </motion.div>
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
