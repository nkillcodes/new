// Vercel serverless function entry point
import type { VercelRequest, VercelResponse } from '@vercel/node';
import express from 'express';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Basic API routes for Vercel
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'CTF API is running' });
});

app.get('/api/stats', (req, res) => {
  res.json({ 
    registrations: 0,
    categories: ['Web Security', 'Cryptography', 'Binary Exploitation', 'Reverse Engineering', 'Steganography', 'OSINT'],
    prizes: '₹50,000',
    dates: {
      qualifiers: 'September 19-20, 2025',
      finale: 'September 26, 2025'
    }
  });
});

// Handle all API requests
export default function handler(req: VercelRequest, res: VercelResponse) {
  return app(req, res);
}