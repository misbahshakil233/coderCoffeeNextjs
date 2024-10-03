"use client";
import React from 'react';

const Contact = () => {
  return (
    <section className="py-20 px-10 bg-white" id="contact">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Left Column: Contact Form */}
        <div className="flex-1 md:pr-10 mb-10 md:mb-0">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-gray-700 mb-6">
            We would love to hear from you! Whether you have a question about our coffee, services, or anything else, feel free to reach out to us.
          </p>
          <form action="https://formspree.io/f/meojybyj" method="POST" className="bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows="4" // Uncommenting this for better accessibility
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button type="submit" className="w-full bg-yellow-500 text-white p-3 rounded-lg font-semibold hover:bg-yellow-600 transition">
              Send Message
            </button>
          </form>
        </div>

        {/* Right Column: Coffee Image */}
        <div className="flex-1">
          <img
            src="https://thumbs.dreamstime.com/z/girl-calling-mobile-phone-drinking-coffee-sitting-park-bicycle-background-54997427.jpg?w=576"
            alt="Girl drinking coffee"
            className="w-full h-[400px] object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="mt-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.044629056728!2d67.06455567520358!3d24.96459617786143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb340959f743d53%3A0x187dcbe4eb81b078!2sNagan%20Chowrangi%20Flyover%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1727887096048!5m2!1sen!2s"
          width="100%" // Set to 100% for full width
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map"
        ></iframe>
      </div>
    </section> 
  );
};

export default Contact;
