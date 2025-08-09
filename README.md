# Personal Portfolio 2.0

This is my personal developer portfolio — a showcase of my work, skills, and personality — built with a React frontend and Vercel serverless API routes for secure backend features.

## Features

### Modern Frontend
- Built with React and Tailwind CSS for a responsive and polished design
- Deployed on Vercel for fast, global performance

### AI-Powered Chat
- Integrated OpenAI GPT backend
- API key is kept secure via Vercel serverless functions
- Users can interact with an AI assistant directly within the portfolio

### Dev Mode (Terminal Navigation)
- A built-command style navigation system called Dev Mode
- Allows browsing of portfolio content via a simulated terminal interface
- Supports quick command shortcuts for projects, skills, and contact information

## Scripts

From the root directory:

```bash
# Run frontend in development mode (CRA)
cd frontend && npm start

# Build frontend for production
cd frontend && npm run build

# Run local API and frontend together using Vercel
vercel dev
