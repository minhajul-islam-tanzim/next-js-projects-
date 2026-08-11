"use client";

import { motion } from "motion/react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contactpage = () => {
  const text = "Send me about your experiance";
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("SERVICE:", process.env.NEXT_PUBLIC_SERVICE_ID);
    console.log("TEMPLATE:", process.env.NEXT_PUBLIC_TEMPLATE_ID);
    console.log("PUBLIC KEY:", process.env.NEXT_PUBLIC_PUBLIC_KEY);

    setLoading(true);
    setSuccess(false);
    setError(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_PUBLIC_KEY!
      )
      .then(() => {
        setSuccess(true);
        setLoading(false);
        formRef.current?.reset();
      })
      .catch((err) => {
        console.error(err);
        setError(true);
        setLoading(false);
      });
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="mt-[155px] flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 md:px-12 gap-10">
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
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="h-1/2 py-10 px-10 lg:h-full lg:w-1/2 flex flex-col gap-4 items-center justify-center bg-red-50 rounded-xl"
        >
          <span className="text-2xl font-semibold text-gray-800">
            Send a Message to Tanzim
          </span>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-700"
          />

          <span className="w-full text-sm text-gray-600">
            Your Email Address
          </span>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-700"
          />

          <span className="w-full text-sm text-gray-600">Regards</span>

          <textarea
            name="message"
            rows={6}
            placeholder="Write your message here..."
            required
            className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-700"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-gray-300 transition-colors duration-300 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send"}
          </button>

          {success && (
            <span className="text-green-500 font-semibold">
              Your message has been sent successfully
            </span>
          )}
          {error && (
            <span className="text-red-500 font-semibold">
              Something went Wrong
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default Contactpage;