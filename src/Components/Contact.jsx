import React, { useState } from 'react';
import { Coffee, Calendar, Send, Clock, MapPin, Linkedin, Github, Twitter, Mail } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'Please fill in all fields.' });
      return;
    }

    try {
      setIsSubmitting(true);
      setStatus({ type: '', message: '' });

      const response = await fetch('https://formspree.io/f/xpwyybzo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });

      if (response.ok) {
        setStatus({ type: 'success', message: 'Thanks! I\'ll get back to you soon.' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Network error. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Coffee className="text-emerald-400 w-8 h-8" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ready to Innovate Together?
            </h2>
          </div>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Let's grab a coffee (virtual or real) and discuss how we can bring your ideas to life.
            I'm always excited to connect with forward-thinking individuals and organizations.
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">

          {/* Coffee Chat Option */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">30-Min Coffee Chat</h3>
                <p className="text-emerald-400">Quick & Personal</p>
              </div>
            </div>

            <p className="text-gray-300 mb-6">
              Perfect for brainstorming, getting advice, or just talking tech over virtual coffee.
              No pressure, just good conversation.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Clock className="w-4 h-4" />
                <span>Available Weekends, 9 AM - 6 PM IST</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>India timezone (virtual meetings)</span>
              </div>
            </div>

            <a
              href="https://calendly.com/harsh2004mckv"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-emerald-700 transition duration-300 transform hover:scale-105 text-center block"
            >
              Schedule Coffee Chat
            </a>
          </div>

          {/* Project Inquiry */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                <Send className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Project Inquiry</h3>
                <p className="text-emerald-400">Detailed Discussion</p>
              </div>
            </div>

            <p className="text-gray-300 mb-6">
              Have a specific project in mind? Tell me about it and I'll get back to you
              within 24 hours with thoughts and next steps.
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors"
                  required
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Tell me about your project, idea, or just say hi..."
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full border border-emerald-600 text-emerald-400 font-semibold py-3 px-6 rounded-lg hover:bg-emerald-600 hover:text-white transition duration-300 transform hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending…' : 'Send Message'}
              </button>

              {status.message && (
                <p className={`text-center ${status.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                  {status.message}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="text-center mb-12">
          <p className="text-lg text-gray-300 mb-6">
            Or find me on social platforms:
          </p>

          <div className="flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/harsh-kumar-singh-57392b27a"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-800 hover:bg-emerald-600 border border-gray-700 hover:border-emerald-500 rounded-full p-4 transition-all duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-emerald-400 group-hover:text-white" />
            </a>
            <a
              href="https://github.com/Mickey3970"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-800 hover:bg-emerald-600 border border-gray-700 hover:border-emerald-500 rounded-full p-4 transition-all duration-300 transform hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 text-emerald-400 group-hover:text-white" />
            </a>
            <a
              href="mailto:harsh2004mckv@gmail.com"
              className="group bg-gray-800 hover:bg-emerald-600 border border-gray-700 hover:border-emerald-500 rounded-full p-4 transition-all duration-300 transform hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-6 h-6 text-emerald-400 group-hover:text-white" />
            </a>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-gray-400 mb-4">
            ⚡ Quick response guaranteed • 🌏 India-based • ☕ Always up for good coffee
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span>📧 Response within 24 hours</span>
            <span>•</span>
            <span>🔒 Your ideas are safe with me</span>
            <span>•</span>
            <span>💬 No commitment required</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;