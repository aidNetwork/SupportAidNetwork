import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitted(false);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 2000); // Simulated delay
  };

  return (
    <section className="bg-blue-50 py-16 px-4 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Get In Touch</h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          We’re here to help you with any questions or concerns. Reach out to us through the form below or contact us directly via phone or email.
          Your feedback is important to us, and we look forward to hearing from you!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-start max-w-5xl mx-auto">
        {/* Contact Info Box */}
        <div className="bg-blue-600 text-white rounded-xl p-8 shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
          <p className="text-sm mb-6 text-blue-100">
            We’ll create high-quality linkable content and build at least 40 high-authority.
          </p>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <FaPhone className="text-white" />
              +8801779717666
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-white" />
              aidnetwork00@gmail.com
            </li>
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-white" />
              1145 SW Cypress st 41 MCMINNVILLE OREGON 97128
            </li>
          </ul>

          <div className="mt-10 w-36 h-36 bg-gradient-to-br from-white/20 to-white/5 rounded-full blur-2xl opacity-40"></div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Your Name</label>
              <input
                type="text"
                placeholder="John Trengely"
                className="w-full border-b border-gray-300 py-2 outline-none"
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium">Your Email</label>
              <input
                type="email"
                placeholder="hello@nurency.com"
                className="w-full border-b border-gray-300 py-2 outline-none"
                required
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">Your Subject</label>
            <input
              type="text"
              placeholder="I want to know about your services"
              className="w-full border-b border-gray-300 py-2 outline-none"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message here..."
              className="w-full border-b border-gray-300 py-2 outline-none"
              required
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className={`flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full transition w-full sm:w-auto`}
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </button>

            {submitted && !loading && (
              <p className="text-green-600 text-sm mt-4">Message sent successfully!</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
