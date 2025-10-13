import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import ReCAPTCHA from "react-google-recaptcha";
import { sanitizeInput } from "../utils/sanitize";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [state, handleSubmit] = useForm("mdklajoy");
  const [captchaValid, setCaptchaValid] = useState(false);

  const handleSanitizedSubmit = (e) => {
    e.preventDefault();

    if (!captchaValid) {
      toast.error("Please verify the reCAPTCHA.", {
        position: "top-right",
        autoClose: 4000,
        className: "bg-red-500 text-white rounded-lg shadow-lg",
        bodyClassName: "text-white font-medium",
        progressClassName: "bg-white",
      });
      return;
    }

    const form = e.target;
    form.name.value = sanitizeInput(form.name.value);
    form.email.value = sanitizeInput(form.email.value);
    form.phone.value = sanitizeInput(form.phone.value);
    form.message.value = sanitizeInput(form.message.value);

    handleSubmit(e);
  };

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Thanks for your message! We’ll get back to you soon.", {
        position: "top-right",
        autoClose: 4000,
        className: "bg-green-500 text-white rounded-lg shadow-lg",
        bodyClassName: "text-white font-medium",
        progressClassName: "bg-white",
      });
    }
  }, [state.succeeded]);

  return (
    <>
      {/* Section 1: Header */}
      <motion.div
        className="relative w-full text-white text-center py-16 px-4 overflow-hidden"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div
          className="absolute inset-0 bg-orange-500"
          style={{
            clipPath: "polygon(0 0, 70% 0, 70% 100%, 0% 100%)",
          }}
        ></div>

        <div
          className="absolute inset-0 bg-green-900"
          style={{
            clipPath:
              window.innerWidth >= 768
                ? "polygon(60% 0, 100% 0, 100% 100%, 50% 100%)"
                : "polygon(60% 0, 100% 0, 100% 100%, 48% 100%)",
          }}
        ></div>

        <h1 className="relative text-4xl md:text-6xl font-bold">Contact Us</h1>
      </motion.div>

      {/* Section 2: Form */}
      <motion.div
        className="flex flex-col lg:flex-row gap-8 md:gap-10 bg-white shadow-lg rounded-xl mx-4 sm:mx-6 md:mx-12 lg:mx-20 overflow-hidden mt-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        {/* Left Side */}
        <div className="lg:w-1/2 flex flex-col justify-center p-6 sm:p-8 md:p-10 text-center lg:text-left">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Get Started
          </motion.h2>
          <motion.p
            className="mt-4 text-gray-700 text-base sm:text-lg"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Get in touch with us. We're here to assist you.
          </motion.p>
        </div>

        {/* Right Side: Form */}
        <motion.div
          className="lg:w-1/2 bg-gray-50 p-6 sm:p-8 md:p-10 rounded-xl shadow-md"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          {!state.succeeded ? (
            <form onSubmit={handleSanitizedSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  maxLength="50"
                  className="flex-1 border px-4 py-3 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  maxLength="100"
                  className="flex-1 border px-4 py-3 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                />
              </div>

              <div className="flex border rounded-lg overflow-hidden">
                <span className="bg-gray-200 px-3 py-3 text-gray-700 flex items-center">
                  +254
                </span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="712345678"
                  pattern="[0-9]{9}"
                  title="Enter a valid 9-digit phone number"
                  required
                  className="flex-1 px-4 py-3 outline-none"
                />
              </div>

              <ValidationError prefix="Email" field="email" errors={state.errors} />

              <textarea
                name="message"
                placeholder="Message"
                required
                maxLength="500"
                className="w-full border px-4 py-3 rounded-lg h-32 focus:ring-2 focus:ring-orange-400 outline-none"
              ></textarea>

              <ValidationError prefix="Message" field="message" errors={state.errors} />

              <div className="flex justify-center md:justify-start">
                <ReCAPTCHA
                  sitekey="6LeQB7orAAAAAO0wYtyGSghWFJF0YLQ8s-kX_Hqo"
                  onChange={() => setCaptchaValid(true)}
                  onExpired={() => setCaptchaValid(false)}
                />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-all duration-200"
              >
                {state.submitting ? "Sending..." : "Leave Message"}
              </button>
            </form>
          ) : (
            <p className="text-gray-600 text-lg font-semibold text-center lg:text-left">
              Your message has been sent successfully. We will get back to you shortly.
            </p>
          )}
        </motion.div>
      </motion.div>

      <ToastContainer />
    </>
  );
}
