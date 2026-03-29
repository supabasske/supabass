import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getWhatsAppLink } from '@/config/contacts';

export const ContactButton = ({ 
  type = 'whatsapp', 
  message = '', 
  className = '',
  variant = 'default' 
}) => {
  if (type === 'whatsapp') {
    return (
      <motion.a
        href={getWhatsAppLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          data-testid="contact-whatsapp-button"
          className={`gap-2 ${className}`}
          variant={variant}
        >
          <MessageCircle className="w-5 h-5" />
          Chat on WhatsApp
        </Button>
      </motion.a>
    );
  }

  return (
    <motion.a
      href="/contact"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        data-testid="contact-email-button"
        className={`gap-2 ${className}`}
        variant={variant}
      >
        <Mail className="w-5 h-5" />
        Send Email
      </Button>
    </motion.a>
  );
};