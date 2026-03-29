// Supabass Contact Information
// Update these with your actual contact details

export const CONTACT_INFO = {
  company: 'Supabass',
  email: 'supabasske@gmail.com',
  phone: '+254715808147',
  location: {
    city: 'Nairobi',
    country: 'Kenya',
  },
  
  // Social Media Links - UPDATE THESE
  social: {
    whatsapp: {
      number: '+254715808147',
      display: '+254 715 808147',
    },
    github: {
      username: 'supabass',
      url: 'https://github.com/barryoyoo',
    },
    linkedin: {
      handle: 'supabass',
      url: 'https://linkedin.com/company/supabass',
    },
    twitter: {
      handle: '@supabass',
      url: 'https://twitter.com/supabass',
    },
  },
};

// Helper to format WhatsApp link
export const getWhatsAppLink = (message = '') => {
  const number = CONTACT_INFO.social.whatsapp.number.replace(/[^0-9]/g, '');
  const encodedMessage = encodeURIComponent(message || 'Hi! I found you on your website.');
  return `https://wa.me/${number}?text=${encodedMessage}`;
};