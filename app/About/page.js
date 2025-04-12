import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen bg-[#1e1e1e] text-white flex flex-col justify-center items-center px-6">
      <h1 className="!text-4xl font-bold mb-4 text-[#FF4C4C]">About Us</h1>
      <p className="max-w-2xl text-center !text-lg text-gray-300">
        Welcome to our URL Shortener! We built this tool to be simple, fast, and completely privacy-focused.
        No logins, no tracking — just paste and shorten your links.
      </p>
      <p className="max-w-2xl text-center mt-4 text-gray-400">
        Created using Next.js and Tailwind CSS, this app works great on mobile, tablet, and desktop.
        We believe in open access, and you can even find our code on GitHub!
      </p>
    </div>
  )
}

export default About
