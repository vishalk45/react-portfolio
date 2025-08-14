import React from "react";
import contactimg from "./assets/contact.png";

const Contact = () => {
  return (
    <section
      className="relative py-16 bg-gradient-to-br from-pink-50 via-white to-pink-100"
      id="contact"
    >
      {/* Decorative gradient blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      <div id="contactPage" className="relative w-[80%] mx-auto flex justify-center gap-25  items-center">
        {/* Left: Contact Info + Form */}
        <div id="contact-form" className=" w-[600px]">
          <h2 className="text-4xl font-extrabold mb-4 text-gray-800">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            I’m open for freelance projects, creative collaborations, and exciting job offers.
            Reach me at{" "}
            <span className="font-semibold text-pink-600">9162731262</span> or
            email me at{" "}
            <span className="font-semibold text-pink-600">
              vp0254743@gmail.com
            </span>
            .
          </p>

          {/* Contact Form */}
          <form
            action="https://formspree.io/f/xdkdekor"
            method="POST"
            className=" space-y-4 bg-white/80 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-gray-100"
          >
            <input 
              type="text"
              name="name"
              placeholder="Your Name*"
              required
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email*"
              required
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200"
            />
            <input
              type="phone"
              name="phone"
              placeholder="Contact Number"
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Write a message"
              required
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-md hover:shadow-xl"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Image */}
        <div id="contactImg" className="flex justify-center h-[600px] w-[700px] rounded-2xl shadow-lg overflow-hidden">
          <img
            src={contactimg}
            alt="Contact illustration"
            className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;

