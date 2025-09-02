import React, { useState, useEffect } from "react";
import Footer from "../ components/Footer";
import { useForm, ValidationError } from "@formspree/react";
import ReCAPTCHA from "react-google-recaptcha";
import { sanitizeInput } from "../utils/sanitize";
import { ToastContainer, toast } from "react-toastify";
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

    // sanitize inputs before sending
    form.name.value = sanitizeInput(form.name.value);
    form.email.value = sanitizeInput(form.email.value);
    form.phone.value = sanitizeInput(form.phone.value);
    form.message.value = sanitizeInput(form.message.value);

    handleSubmit(e); // Formspree will handle sending
  };

  //  Show toast after successful submission
  useEffect(() => {
    if (state.succeeded) {
      toast.success("Thanks for your message! We’ll get back to you soon.", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        className: "bg-green-500 text-white rounded-lg shadow-lg",
        bodyClassName: "text-white font-medium",
        progressClassName: "bg-white",
      });
    }
  }, [state.succeeded]);

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
          {!state.succeeded ? (
            <form
              onSubmit={handleSanitizedSubmit}
              className="flex flex-col gap-4"
            >
              {/* Name + Email + Phone */}
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

                {/* Phone with fixed +254 */}
                <div className="flex flex-1 border rounded-lg overflow-hidden">
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
                maxLength="500"
                className="w-full border px-4 py-3 rounded-lg h-32 focus:ring-2 focus:ring-orange-400 outline-none"
              ></textarea>

              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />

              {/* reCAPTCHA */}
              <ReCAPTCHA
                sitekey="6LeQB7orAAAAAO0wYtyGSghWFJF0YLQ8s-kX_Hqo" // your site key
                onChange={() => setCaptchaValid(true)}
                onExpired={() => setCaptchaValid(false)}
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
          ) : (
            <p className="text-gray-600 text-lg font-semibold">
              Your message has been sent successfully.
              We will get back to you shortly.
            </p>
          )}
        </div>
      </div>
      <Footer />

      {/* Toastify container with global override */}
      <ToastContainer
        toastClassName="rounded-lg shadow-lg"
        bodyClassName="text-white font-medium"
        progressClassName="bg-white"
      />
    </div>
  );
}
