# LS Collections - Deployment Guide

## Prerequisites

- Node.js (v14 or higher)
- MongoDB account (for production database)
- Razorpay account
- GitHub account
- Vercel account (for frontend)
- Railway account (for backend) OR Render account

## Frontend Deployment (Vercel)

1. Create a production build:

```bash
cd frontend
npm install
npm run build
```

2. Deploy to Vercel:

- Go to [Vercel](https://vercel.com)
- Connect your GitHub repository
- Set environment variables:
  - `REACT_APP_API_BASE_URL`: Your backend API URL
- Deploy

## Backend Deployment (Railway or Render)

### Option 1: Railway

1. Go to [Railway](https://railway.app)
2. Connect your GitHub repository
3. Set environment variables from `.env.example`
4. Deploy

### Option 2: Render

1. Go to [Render](https://render.com)
2. Create a new Web Service
3. Connect your GitHub repository
4. Set environment variables from `.env.example`
5. Deploy

## Environment Variables Setup

### Frontend (.env)

```
REACT_APP_API_BASE_URL=https://your-backend-url.railway.app
```

### Backend (.env)

```
PORT=5000
NODE_ENV=production
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_secure_jwt_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret
CORS_ORIGIN=https://your-frontend-domain.vercel.app
```

## Git Commits Guide

1. Initial deployment setup:

```bash
git add .
git commit -m "chore: prepare for deployment
- Add environment configuration
- Update database connection
- Add deployment documentation"
```

2. After frontend changes:

```bash
git add frontend/
git commit -m "feat(frontend): prepare for production
- Update API configuration
- Add environment variables
- Fix responsive design issues"
```

3. After backend changes:

```bash
git add backend/
git commit -m "feat(backend): prepare for production
- Update database configuration
- Add error handling
- Configure CORS for production"
```

## Post-Deployment Checklist

1. Test user authentication
2. Verify payment integration
3. Check all API endpoints
4. Test responsive design on multiple devices
5. Verify data persistence
6. Check error handling

## Monitoring and Maintenance

1. Set up error monitoring (recommended: Sentry)
2. Configure performance monitoring
3. Set up automated backups for the database
4. Implement logging solution

## Common Issues and Solutions

1. CORS errors: Make sure CORS_ORIGIN in backend matches your frontend domain
2. MongoDB connection issues: Check connection string and network access
3. Environment variables: Verify all required variables are set in production
4. Build errors: Check package versions and dependencies

Remember to never commit sensitive information like API keys or secrets. Always use environment variables for sensitive data.
