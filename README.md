# LS Collections E-commerce

A full-stack e-commerce application built with MERN stack.

## Features

- User authentication and authorization
- Product catalog with search and filters
- Shopping cart functionality
- Secure payment integration with Razorpay
- Admin dashboard for product management
- Responsive design for mobile and desktop

## Tech Stack

### Frontend

- React.js
- Redux for state management
- Material-UI components
- Tailwind CSS for styling
- Axios for API calls

### Backend

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- Razorpay integration

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/haradeva/LSCollections-Ecommerce.git
cd LSCollections-Ecommerce
```

2. Install dependencies:

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

3. Set up environment variables:

```bash
# Backend
cp backend/.env.example backend/.env
# Frontend
cp frontend/.env.example frontend/.env
```

4. Start the development servers:

```bash
# Start backend server
cd backend
npm run dev

# Start frontend development server
cd frontend
npm start
```

## Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions.

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/YourFeature`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
