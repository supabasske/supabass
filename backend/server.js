const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { v4: uuidv4 } = require('uuid');
const nodemailer = require('nodemailer');
const path = require('path');

// Load config
dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();

const corsOrigins = process.env.CORS_ORIGINS ? process.env.CORS_ORIGINS.split(',') : ['*'];
app.use(cors({ origin: corsOrigins.length === 1 && corsOrigins[0] === '*' ? '*' : corsOrigins }));
app.use(express.json());

// Memory store
const STATUS_DB = [];

const apiRouter = express.Router();

apiRouter.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

apiRouter.post('/status', (req, res) => {
  const { client_name } = req.body;
  if (!client_name) {
    return res.status(400).json({ detail: 'client_name is required' });
  }

  const status_obj = {
    id: uuidv4(),
    client_name: client_name,
    timestamp: new Date().toISOString()
  };

  STATUS_DB.push(status_obj);
  res.json(status_obj);
});

apiRouter.get('/status', (req, res) => {
  res.json(STATUS_DB);
});

apiRouter.post('/contact', async (req, res) => {
  const { user_name, user_email, subject, message } = req.body;

  const emailUser = process.env.EMAIL_USER;
  const emailPassword = process.env.EMAIL_PASSWORD;

  if (!emailUser || !emailPassword) {
    console.error("Missing EMAIL_USER or EMAIL_PASSWORD");
    return res.status(500).json({ detail: 'Email not configured on server' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: emailUser,
        pass: emailPassword,
      },
    });

    const htmlTemplate = `
      <div style="font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background-color: #020617; color: #f8fafc;">
        <div style="background-color: #0f172a; border-radius: 20px; padding: 40px; border: 1px solid #1e293b; box-shadow: 0 10px 25px -5px rgba(14, 165, 233, 0.1);">
          
          <div style="text-align: center; margin-bottom: 35px; border-bottom: 1px solid #1e293b; padding-bottom: 25px;">
            <h1 style="margin: 0; font-size: 32px; font-weight: 800; letter-spacing: -0.05em; color: #38bdf8; text-transform: uppercase;">
              SUPABASS<span style="color: #f8fafc;">_</span>
            </h1>
            <p style="margin: 8px 0 0 0; color: #94a3b8; font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase;">Incoming Message Alert</p>
          </div>

          <h2 style="color: #f8fafc; font-size: 22px; font-weight: 700; margin-top: 0; margin-bottom: 25px;">You have a new inquiry!</h2>
          
          <div style="background: linear-gradient(145deg, #1e293b 0%, #0f172a 100%); border-radius: 16px; padding: 25px; margin-bottom: 35px; border-left: 4px solid #0ea5e9;">
            <p style="margin: 0 0 10px 0; color: #38bdf8; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 700;">Sender Profile</p>
            <div style="margin-bottom: 15px;">
              <span style="color: #f8fafc; font-weight: 600; font-size: 20px;">${user_name}</span>
            </div>
            <div>
              <a href="mailto:${user_email}" style="display: inline-block; background-color: rgba(14, 165, 233, 0.1); color: #38bdf8; text-decoration: none; font-size: 14px; font-weight: 600; padding: 10px 20px; border-radius: 8px; border: 1px solid rgba(14, 165, 233, 0.2);">
                Reply to: ${user_email}
              </a>
            </div>
          </div>

          <div style="margin-bottom: 40px;">
            <p style="margin: 0 0 12px 0; color: #38bdf8; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 700;">Message Contents</p>
            <div style="color: #cbd5e1; font-size: 16px; line-height: 1.7; white-space: pre-wrap; background-color: #020617; padding: 25px; border-radius: 12px; border: 1px solid #1e293b;">${message}</div>
          </div>

          <div style="text-align: center; border-top: 1px solid #1e293b; padding-top: 25px;">
            <p style="color: #94a3b8; font-size: 14px; margin: 0 0 12px 0;">
              Contact Details: <a href="mailto:${emailUser}" style="color: #38bdf8; text-decoration: none;">${emailUser}</a>
            </p>
            <p style="color: #64748b; font-size: 12px; font-weight: 500; margin: 0; letter-spacing: 0.05em;">
              SYSTEM GENERATED SECURELY BY SUPABASS
            </p>
          </div>
          
        </div>
      </div>
    `;

    const mailOptions = {
      from: emailUser,
      to: emailUser,
      replyTo: user_email,
      subject: `New Message from ${user_name}: ${subject || 'No Subject'}`,
      text: `Name: ${user_name}\nEmail: ${user_email}\n\nMessage:\n${message}`,
      html: htmlTemplate
    };

    const confirmationHtml = `
      <div style="font-family: 'Inter', system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background-color: #020617; color: #f8fafc;">
        <div style="background-color: #0f172a; border-radius: 20px; padding: 40px; border: 1px solid #1e293b; text-align: center;">
          
          <h1 style="margin: 0 0 20px 0; font-size: 28px; font-weight: 800; letter-spacing: -0.05em; color: #38bdf8;">
            SUPABASS<span style="color: #f8fafc;">_</span>
          </h1>
          
          <h2 style="color: #f8fafc; font-size: 20px; font-weight: 700; margin-bottom: 25px;">Transmission Received</h2>
          
          <p style="color: #cbd5e1; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
            Hey ${user_name},<br><br>
            Thanks for reaching out! This is an automated confirmation that your encrypted message has safely landed in our inbox. Our team will review your inquiry and get back to you very soon.
          </p>
          
          <div style="background-color: rgba(14, 165, 233, 0.05); border: 1px solid #1e293b; border-left: 4px solid #0ea5e9; padding: 20px; text-align: left; margin-bottom: 30px; border-radius: 8px;">
            <p style="margin: 0 0 10px 0; color: #38bdf8; font-size: 11px; text-transform: uppercase; font-weight: 700; letter-spacing: 0.1em;">Your Message Copy</p>
            <p style="margin: 0; color: #94a3b8; font-size: 14px; white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          
          <div style="margin-top: 40px; border-top: 1px solid #1e293b; padding-top: 25px; text-align: center;">
            <p style="color: #94a3b8; font-size: 14px; margin: 0 0 12px 0;">
              Need immediate assistance? Reach out to <br>
              <a href="mailto:${emailUser}" style="color: #38bdf8; text-decoration: none; font-weight: 600;">${emailUser}</a>
            </p>
            <p style="color: #64748b; font-size: 12px; margin: 0; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase;">
              — THE SUPABASS TERMINAL
            </p>
          </div>
        </div>
      </div>
    `;

    const confirmationOptions = {
      from: emailUser,
      to: user_email,
      subject: `[SUPABASS] We've received your message!`,
      text: `Hey ${user_name},\n\nThanks for reaching out! We received your message and will get back to you very soon.\n\nYour message:\n${message}\n\n— The Supabass Team`,
      html: confirmationHtml
    };

    await Promise.all([
      transporter.sendMail(mailOptions),
      transporter.sendMail(confirmationOptions)
    ]);
    res.json({ status: 'success', message: 'Email sent successfully' });
  } catch (error) {
    console.error('Failed to send email:', error);
    res.status(500).json({ detail: error.message });
  }
});

app.use('/api', apiRouter);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Express server is running on port ${PORT}`);
});
