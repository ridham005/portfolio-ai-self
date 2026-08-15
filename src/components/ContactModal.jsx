import React, { useState } from 'react';
import { X, Send, CheckCircle2, Mail, Phone, MapPin } from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-zinc-950 border border-zinc-700 text-white rounded-none p-6 md:p-8 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-800 pb-6 mb-6">
          <div className="flex items-center gap-3">
            <div className="m-stripe-vertical h-6"></div>
            <div>
              <span className="text-xs font-mono font-bold text-sky-400">INITIATE COMMUNICATION</span>
              <h2 className="display-sm text-white tracking-tight">CONTACT RIDHAM ///</h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="button-icon hover:bg-zinc-800"
          >
            <X size={20} />
          </button>
        </div>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <CheckCircle2 size={48} className="text-emerald-500 mx-auto animate-bounce" />
            <h3 className="display-sm text-white">TRANSMISSION RECEIVED ///</h3>
            <p className="body-md text-zinc-400 max-w-md mx-auto">
              Your message has been successfully logged. Ridham will review your inquiry and respond shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="label-uppercase text-xs text-zinc-400 block mb-2">
                  FULL NAME *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name"
                  className="text-input"
                />
              </div>

              <div>
                <label className="label-uppercase text-xs text-zinc-400 block mb-2">
                  EMAIL ADDRESS *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@company.com"
                  className="text-input"
                />
              </div>
            </div>

            <div>
              <label className="label-uppercase text-xs text-zinc-400 block mb-2">
                PROJECT SUBJECT / TITLE
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="e.g. Next.js Web App / Engineering Consultation"
                className="text-input"
              />
            </div>

            <div>
              <label className="label-uppercase text-xs text-zinc-400 block mb-2">
                SPECIFICATION / MESSAGE *
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Detail your project requirements, timeline, or inquiries..."
                className="text-input h-32 py-3"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-zinc-800">
              <div className="text-xs text-zinc-500 font-mono">
                DIRECT EMAIL /// ridham@portfolio-ai.com
              </div>

              <button
                type="submit"
                className="button-primary w-full sm:w-auto"
              >
                <span>TRANSMIT MESSAGE ///</span>
                <Send size={16} />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
