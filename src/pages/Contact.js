import React from "react";
import Footer from "../ components/Footer";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("mdklajoy"); // your Formspree endpoint

  return (
    <div className="flex flex-col gap-16">
      {/* Section 1: Green Header */}
      <div className="bg-green-400 text-white py-24 rounded-b-3xl shadow-lg">
        <h1 className="text-6xl font-bold text-center">Contact Us</h1>
      </div>

      {/* Section 2: Form Section */}
      <div className="flex flex-col lg:flex-row gap-10 bg-white shadow-lg rounded-xl">
        {/* Left Side */}
        <div className="lg:w-1/2 flex flex-col justify-center p-10">
          <h2 className="text-4xl font-bold text-orange-500">Get Started</h2>
          <p className="mt-4 text-gray-700">
            Get in touch with us. We're here to assist you.
          </p>
        </div>

        {/* Right Side: Form */}
        <div className="lg:w-1/2 bg-gray-50 p-10 rounded-xl shadow-md">
          {state.succeeded ? (
            <p className="text-green-600 text-lg font-semibold">
              ✅ Thanks for your message! We’ll get back to you soon.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Name + Email + Phone */}
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="flex-1 border px-4 py-3 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="flex-1 border px-4 py-3 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                />

                {/* Phone with fixed +254 */}
                <div className="flex flex-1 border rounded-lg overflow-hidden">
                  <span className="bg-gray-200 px-3 py-3 text-gray-700 flex items-center">
                    +254
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="712345678"
                    required
                    className="flex-1 px-4 py-3 outline-none"
                  />
                </div>
              </div>

              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />

              {/* Message textarea */}
              <textarea
                name="message"
                placeholder="Message"
                required
                className="w-full border px-4 py-3 rounded-lg h-32 focus:ring-2 focus:ring-orange-400 outline-none"
              ></textarea>

              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />

              {/* Submit Button */}
              <button
                type="submit"
                disabled={state.submitting}
                className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-all duration-200"
              >
                {state.submitting ? "Sending..." : "Leave Message"}
              </button>
            </form>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
