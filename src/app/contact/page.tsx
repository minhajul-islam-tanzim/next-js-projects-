"use client";

import { motion } from "motion/react";
import { useState } from "react";

const Contactpage = () => {
  const text = "Send me about your experiance";
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)


  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="mt-[155] flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 md:px-12 gap-10">
        {/* TEXT Container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col items-center justify-center text-4xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            
          </div>
        </div>

        {/* form container */}
      <form className="h-1/2 py-10 px-10 lg:h-full lg:w-1/2 flex flex-col gap-4 items-center justify-center bg-red-50 rounded-xl">
  <span className="text-2xl font-semibold text-gray-800">Tanzim.dev</span>

  <textarea
    rows={6}
    placeholder="Write your message here..."
    className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-700"
  ></textarea>

  <span className="w-full text-sm text-gray-600">My Mail Address</span>
  <input
    type="text"
    placeholder="Enter your email"
    className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-700"
  />

  <span className="w-full text-sm text-gray-600">Regards</span>

  <button
    type="submit"
    className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-gray-300 transition-colors duration-300"
  >
    Send
  </button>
              {success && <span className="text-green-500 font-semibold">Your message has been sent successfully</span>}
              {error && <span className="text-red-500 font-semibold">Something went Wrong</span>}

</form>
      </div>
    </motion.div>
  );
};

export default Contactpage;