# Edit Your Contact Information - Supabass

## Quick Edit Guide

All contact information is centralized in one file for easy editing!

### File to Edit: `/app/frontend/src/config/contacts.js`

---

## What to Update

### 1. Email
```javascript
email: 'bodoro2017@gmail.com',  // ✅ Already set
```

### 2. Phone Number
```javascript
phone: '+1 (555) 123-4567',  // ⚠️ UPDATE THIS with your real phone
```

### 3. Location
```javascript
location: {
  city: 'San Francisco',      // ⚠️ UPDATE with your city
  state: 'CA',                // ⚠️ UPDATE with your state
  country: 'United States',   // ⚠️ UPDATE with your country
},
```

### 4. WhatsApp
```javascript
whatsapp: {
  number: '+1234567890',           // ⚠️ UPDATE with format: +[country code][number]
  display: '+1 (234) 567-890',     // ⚠️ UPDATE to match your formatted number
},
```

**Example WhatsApp formats:**
- US: `+12345678900`
- UK: `+447123456789`
- Nigeria: `+2348012345678`
- India: `+919876543210`

### 5. GitHub
```javascript
github: {
  username: 'supabass',                    // ⚠️ UPDATE with your GitHub username
  url: 'https://github.com/supabass',      // ⚠️ UPDATE with your GitHub profile URL
},
```

### 6. LinkedIn
```javascript
linkedin: {
  handle: 'supabass',                              // ⚠️ UPDATE with your LinkedIn handle
  url: 'https://linkedin.com/company/supabass',    // ⚠️ UPDATE with your LinkedIn URL
},
```

**LinkedIn URL formats:**
- Personal: `https://linkedin.com/in/yourname`
- Company: `https://linkedin.com/company/yourcompany`

### 7. Twitter (Optional)
```javascript
twitter: {
  handle: '@supabass',                      // ⚠️ UPDATE with your Twitter handle
  url: 'https://twitter.com/supabass',      // ⚠️ UPDATE with your Twitter profile
},
```

---

## Complete Example

Here's what your edited file should look like:

```javascript
export const CONTACT_INFO = {
  company: 'Supabass',
  email: 'bodoro2017@gmail.com',           // ✅ Your email
  phone: '+234 801 234 5678',              // ← Example: Nigerian number
  location: {
    city: 'Lagos',                          // ← Your city
    state: 'Lagos',                         // ← Your state
    country: 'Nigeria',                     // ← Your country
  },
  
  social: {
    whatsapp: {
      number: '+2348012345678',             // ← WhatsApp with country code
      display: '+234 801 234 5678',         // ← Formatted display
    },
    github: {
      username: 'yourhandle',               // ← Your GitHub username
      url: 'https://github.com/yourhandle', // ← Your GitHub URL
    },
    linkedin: {
      handle: 'yourcompany',
      url: 'https://linkedin.com/company/yourcompany',
    },
    twitter: {
      handle: '@yourhandle',
      url: 'https://twitter.com/yourhandle',
    },
  },
};
```

---

## After Editing

1. Save the file: `/app/frontend/src/config/contacts.js`
2. Restart frontend:
   ```bash
   sudo supervisorctl restart frontend
   ```
3. Wait 10 seconds
4. Refresh your browser

---

## Where Your Contacts Appear

✅ **Contact Page** (`/contact`)
- Email, phone, location cards
- Social media icons (WhatsApp, GitHub, LinkedIn)

✅ **Home Page** (`/`)
- Social media icons below hero section

✅ **Services Page** (`/services`)
- WhatsApp button on each service card flip side
- Pre-filled message: "Hi Supabass! I'm interested in [Service Name] services."

---

## Testing Your WhatsApp Link

1. Update the `number` in contacts.js
2. Restart frontend
3. Click any WhatsApp button/icon
4. Should open WhatsApp Web/App with your number!

---

## Need Help?

- WhatsApp format guide: https://faq.whatsapp.com/general/contacts/how-to-add-an-international-phone-number
- GitHub profile: https://github.com/settings/profile
- LinkedIn profile: https://www.linkedin.com/in/me/
