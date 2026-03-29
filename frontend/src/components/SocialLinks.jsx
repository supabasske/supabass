import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, MessageCircle, Twitter } from 'lucide-react';
import { CONTACT_INFO, getWhatsAppLink } from '@/config/contacts';

export const SocialLinks = ({ className = '', size = 'default' }) => {
  const iconSize = size === 'large' ? 'w-6 h-6' : 'w-5 h-5';
  const buttonSize = size === 'large' ? 'w-12 h-12' : 'w-10 h-10';

  const socials = [
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: getWhatsAppLink(),
      color: 'hover:bg-green-500/20 hover:text-green-500',
      testId: 'whatsapp-link',
    },
    {
      name: 'GitHub',
      icon: Github,
      url: CONTACT_INFO.social.github.url,
      color: 'hover:bg-slate-500/20 hover:text-slate-400',
      testId: 'github-link',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: CONTACT_INFO.social.linkedin.url,
      color: 'hover:bg-blue-500/20 hover:text-blue-500',
      testId: 'linkedin-link',
    },
  ];

  return (
    <div className={`flex items-center gap-3 ${className}`} data-testid="social-links">
      {socials.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          data-testid={social.testId}
          className={`${buttonSize} rounded-full bg-white/5 dark:bg-slate-800/50 backdrop-blur-sm border border-white/10 flex items-center justify-center transition-all ${social.color}`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1, duration: 0.3 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          aria-label={social.name}
        >
          <social.icon className={iconSize} />
        </motion.a>
      ))}
    </div>
  );
};