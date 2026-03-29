# Supabass Tech - Modern React Website

A lively, modern, and animated public-facing website built with React, featuring stunning animations, theme switching, and email integration.

## Features

✨ **Dual Theme System**
- Light theme with aurora gradient waves background
- Dark theme with animated starfield effect
- Smooth transitions and localStorage persistence

🎨 **Animated Backgrounds**
- Homepage: Starfield (dark) / Aurora waves (light)
- Services: Animated hexagon grid
- Illusions: Parallax scrolling with particle effects
- Community: Flowing gradient waves
- Contact: Soft gradient overlay

🎭 **Animations**
- Framer Motion animations throughout
- Cycling headlines on hero section
- Flip cards on services page
- Scroll-triggered reveals
- Hover effects on all interactive elements
- Animated timeline
- Loading transitions between pages

📱 **Responsive Design**
- Mobile-first approach
- Tablet and desktop optimized
- Touch-friendly interactions

♿ **Accessibility**
- ARIA labels on all interactive elements
- Semantic HTML structure
- Keyboard navigation support
- data-testid attributes for testing
- SEO optimized with React Helmet

## Tech Stack

- **React 19** - UI library
- **React Router** - Routing with lazy loading
- **Framer Motion** - Animation library
- **Tailwind CSS** - Styling
- **Shadcn/UI** - Component library
- **EmailJS** - Contact form email service
- **Sonner** - Toast notifications
- **React Helmet Async** - SEO management

## Pages

1. **Home** - Hero with cycling headlines, About section, Tech jokes
2. **Services** - Hexagon grid background with flip cards
3. **Illusions** - Gallery with filters (Projects, Events, Fun)
4. **Community** - Stats, Timeline, Testimonials, Join CTA
5. **Contact** - Contact form with EmailJS integration

## EmailJS Configuration 🔑

To enable the contact form, you need to set up EmailJS:

### Step 1: Create EmailJS Account
- Go to https://www.emailjs.com/
- Sign up for a free account

### Step 2: Add Email Service
- Dashboard → Email Services → Add New Service
- Choose your email provider (Gmail, Outlook, etc.)
- For Gmail: Use app-specific password, not your regular password
- Note down your **Service ID**

### Step 3: Create Email Template
- Dashboard → Email Templates → Create New Template
- Template should include these variables:
  - `{{user_name}}` - Sender's name
  - `{{user_email}}` - Sender's email
  - `{{subject}}` - Email subject
  - `{{message}}` - Email message body
- Note down your **Template ID**

### Step 4: Get Public Key
- Dashboard → Account → General
- Copy your **Public Key**

### Step 5: Update Configuration
Edit `/app/frontend/src/config/emailjs.js`:

```javascript
import emailjs from '@emailjs/browser';

export const initEmailJS = () => {
  emailjs.init('YOUR_PUBLIC_KEY_HERE'); // Replace with your public key
};

export const EMAIL_CONFIG = {
  serviceId: 'YOUR_SERVICE_ID',      // Replace with your service ID
  templateId: 'YOUR_TEMPLATE_ID',    // Replace with your template ID
  publicKey: 'YOUR_PUBLIC_KEY_HERE', // Replace with your public key
};
```

### Step 6: Restart Frontend
```bash
sudo supervisorctl restart frontend
```

## Project Structure

```
/app/frontend/src/
├── components/
│   ├── backgrounds/          # Animated backgrounds
│   ├── ui/                   # Shadcn UI components
│   ├── AnimatedCard.jsx      # Card components
│   ├── ContactForm.jsx       # Email contact form
│   ├── CyclingHeadline.jsx   # Animated headlines
│   ├── Navigation.jsx        # Main navigation
│   └── ThemeToggle.jsx       # Theme switcher
├── contexts/
│   └── ThemeContext.jsx      # Theme state management
├── pages/                    # All page components
├── config/
│   └── emailjs.js            # EmailJS configuration
└── App.js                    # Main app component
```

## Design System

### Colors
- **Light Mode:** `#f8fafc` background, `#0ea5e9` accent
- **Dark Mode:** `#020617` background, `#38bdf8` accent

### Typography
- **Headings:** Manrope (bold, extrabold)
- **Body:** Inter (normal, medium)

## Browser Support

- Chrome/Edge, Firefox, Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

**Note:** Remember to update the EmailJS configuration before using the contact form!
