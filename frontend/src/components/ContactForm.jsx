import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export const ContactForm = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.user_name.trim()) {
      toast.error('Name is required');
      return;
    }
    if (!formData.user_email.trim()) {
      toast.error('Email is required');
      return;
    }
    if (!validateEmail(formData.user_email)) {
      toast.error('Please provide a valid email address');
      return;
    }
    if (!formData.subject.trim()) {
      toast.error('Subject is required');
      return;
    }
    if (!formData.message.trim()) {
      toast.error('Message is required');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000';
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Server error occurred');
      }

      console.log('✅ Email sent successfully');
      
      setSubmitStatus('success');
      toast.success('Message sent successfully!');
      
      setFormData({
        user_name: '',
        user_email: '',
        subject: '',
        message: '',
      });

      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('❌ Email sending failed:', error);
      setSubmitStatus('error');
      
      toast.error(`Failed to send message: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative">
      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: -20 }}
          className="mb-6 p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-sm"
          data-testid="success-message"
        >
          <div className="flex items-center gap-3">
            <CheckCircle className="w-6 h-6 text-emerald-500" />
            <div>
              <h3 className="text-lg font-semibold text-emerald-700 dark:text-emerald-300">
                Message Received!
              </h3>
              <p className="text-sm text-emerald-600 dark:text-emerald-400">
                Thank you for reaching out. We'll get back to you soon.
              </p>
            </div>
          </div>
        </motion.div>
      )}

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="user_name" className="text-slate-700 dark:text-slate-300">
              Name *
            </Label>
            <Input
              id="user_name"
              name="user_name"
              type="text"
              value={formData.user_name}
              onChange={handleChange}
              placeholder="Your name"
              data-testid="contact-name-input"
              className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border-slate-300 dark:border-slate-600 focus:ring-cyan-500"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="user_email" className="text-slate-700 dark:text-slate-300">
              Email *
            </Label>
            <Input
              id="user_email"
              name="user_email"
              type="email"
              value={formData.user_email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              data-testid="contact-email-input"
              className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border-slate-300 dark:border-slate-600 focus:ring-cyan-500"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject" className="text-slate-700 dark:text-slate-300">
            Subject *
          </Label>
          <Input
            id="subject"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            placeholder="What is this about?"
            data-testid="contact-subject-input"
            className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border-slate-300 dark:border-slate-600 focus:ring-cyan-500"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-slate-700 dark:text-slate-300">
            Message *
          </Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message here..."
            rows={6}
            data-testid="contact-message-input"
            className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border-slate-300 dark:border-slate-600 focus:ring-cyan-500 resize-none"
            required
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          data-testid="contact-submit-button"
          className="w-full md:w-auto px-8 py-6 rounded-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold shadow-lg hover:shadow-cyan-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
              />
              Sending...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Send className="w-5 h-5" />
              Send Message
            </span>
          )}
        </Button>
      </form>
    </div>
  );
};