import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ContactForm } from '../components/ContactForm';
import { SocialLinks } from '../components/SocialLinks';
import { Mail, Phone, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '@/config/contacts';

export const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact - Supabass Tech</title>
        <meta name="description" content="Get in touch with Supabass. We'd love to hear from you!" />
      </Helmet>

      {/* Gradient Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-100/30 via-violet-100/20 to-slate-100/30 dark:from-cyan-900/10 dark:via-violet-900/10 dark:to-slate-900/20" />
      </div>

      <main className="relative z-10 min-h-screen pt-32 pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-slate-100 mb-6">
              Let's Connect
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-8">
              Have a project in mind? Want to collaborate? We'd love to hear from you.
            </p>
            <SocialLinks className="justify-center" size="large" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="p-6 rounded-xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 shadow-lg" data-testid="contact-info-email">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-cyan-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">Email</h3>
                <a 
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-slate-600 dark:text-slate-400 hover:text-cyan-500 transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>

              <div className="p-6 rounded-xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 shadow-lg" data-testid="contact-info-phone">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-cyan-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">Phone</h3>
                <a 
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="text-slate-600 dark:text-slate-400 hover:text-cyan-500 transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>

              <div className="p-6 rounded-xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 shadow-lg" data-testid="contact-info-location">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-cyan-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">Location</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {CONTACT_INFO.location.city}, {CONTACT_INFO.location.state}
                  <br />
                  {CONTACT_INFO.location.country}
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-2"
            >
              <div className="p-8 rounded-xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 shadow-lg">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                  Send us a message
                </h2>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
};