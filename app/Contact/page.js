import React from 'react'

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#1e1e1e] text-white flex flex-col justify-center items-center px-6">
    <h1 className="!text-4xl font-bold mb-4 text-[#FF4C4C]">Contact Us</h1>
    <p className="!text-lg text-center text-gray-300 mb-6">
      Have questions, feedback, or just want to say hi? Drop us a message below.
    </p>
    <form className="w-full max-w-md flex flex-col gap-4">
      <input
        type="text"
        placeholder="Your Name"
        className="bg-[#444444] text-white px-4 py-2 rounded !focus:outline-none"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="bg-[#444444] text-white px-4 py-2 rounded !focus:outline-none"
      />
      <textarea
        placeholder="Your Message"
        className="bg-[#444444] text-white px-4 py-2 rounded h-32 !resize-none f!ocus:outline-none"
      />
      <button
        type="submit"
        className="bg-[#FF4C4C] hover:bg-[#e13a3a] text-white px-4 py-2 rounded font-medium cursor-pointer"
      >
        Send Message
      </button>
    </form>
  </div>
  )
}

export default Contact
