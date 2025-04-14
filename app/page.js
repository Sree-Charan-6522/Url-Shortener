"use client"

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React,{ useState, useEffect } from "react";

export default function Home() {
  
  const TypewriterEffect = () => {
    const text = [
    "  Our URL Shortener is fast, efficient, and easy to use. ",
    " No personal information required – Just shorten and share. ",
    " Your privacy is our priority, and we don’t track you! ",
    " Welcome to our URL Shortener! We make linking easy and simple. "];
    const [displayedText, setDisplayedText] = useState("");
  
    useEffect(() => {
      let index = 0;
      let ti = 0;
      const interval = setInterval(() => {
        if (ti < text.length && index < text[ti].length) {
          setDisplayedText((prevText) => prevText + text[ti][index]);
          index += 1;
        } else {
          index = 0;
          ti += 1;
          if (ti === text.length) {
            ti = 0;
          }
          setDisplayedText(""); // Clear text for next iteration
        }
      }, 200); // Change interval time for speed
      return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);
  
   
    return (
      <motion.div className="text-center !mt-4 !text-xl text-gray-300"  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <p className="font-serif">
          {displayedText}
          <motion.span className="!font-extrabold !text-2xl" animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 0.5 }}>|</motion.span>
        </p> {/* Typewriter text */}
      </motion.div>
    );
  };


  return (
    <div className=" text-white flex max-md:flex max-md:flex-col max-md:h-[50em] w-screen h-[53.7em]">

      <div className="w-[80%] max-md:h-[50%] max-md:w-full flex flex-col max-md: justify-center items-center !mt-5 gap-4 !px-4">
        <h1 className="!text-3xl text-center text-shadow-[0px_25px_50px_#FF4C4C33]">The best <strong><Link href="/">URL-Shortener</Link></strong> in the Market</h1>
        <p className="!text-lg w-5/6 text-center">We are the most straightfoward URL Shortener in the world. Most of the un shortariers will track you or ask you to give your details for login. We understand your needs and hence we have created this URL shortener</p>
        <div className="max-md:w-full max-md:h-[50%] ">
            <TypewriterEffect />
        </div>
      </div>
      <div className="w-[20%] max-md:h-[50%] max-md:w-full flex justify-center max-md:justify-center max-md:items-center items-center">
      
        <div className="relative  h-80 w-80  rounded-full overflow-hidden shadow-[10px_10px_100px_#ff818199] max-md:shadow-[0px_0px_80px_#f47979e8]">
        <Image className="max-md:hidden" src="/me.png" alt="me" fill={true} />
        </div>
      </div>
  </div>
  );
}


// max-md:shadow-[0px_0px_450px_#FF4C4C33] shadow-[0px_25px_50px_#FF4C4C33]