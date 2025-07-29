# ⭐ MERN Feedback App

A full-stack MERN (MongoDB, Express.js, React.js, Node.js) application where users can register, log in, and share their feedback by giving ratings and comments across different product categories. The app features a modern UI with product reviews, category-based ratings, and real-time feedback management.

![App Demo](https://via.placeholder.com/800x400?text=App+Screenshot)

## 🔧 Tech Stack

### Frontend
- **React 19** with JSX
- **Tailwind CSS** for styling
- **Radix UI** for accessible components
- **React Hook Form** for form validation
- **React Select** for dropdowns
- **Vite** for fast development

### Backend
- **Node.js** with Express.js
- **MongoDB** with Mongoose ODM
- **JWT** for authentication
- **bcrypt** for password hashing
- **cookie-parser** for session management
- **CORS** for cross-origin requests

## ✨ Features

### 🔐 Authentication
- User registration with email validation
- Secure login/logout with JWT tokens
- Session persistence with HTTP-only cookies
- Protected routes and components

### 📝 Feedback System
- **Multi-category ratings**: Performance, Battery Life, Display, Camera, User Experience
- **Star rating system** (0-5 stars)
- **Comment submission** with form validation
- **Real-time feedback updates**

### 📊 Analytics & Display
- **Category-wise average ratings**
- **Overall product rating calculation**
- **Individual comment display** with user information
- **Responsive design** for all devices

### 🎨 UI/UX Features
- **Modern card-based layout**
- **Interactive dialogs** for auth forms
- **Loading states** and error handling
- **Responsive sidebar** with product info
- **Smooth animations** with Tailwind

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud)
- npm or yarn

### Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file with required variables
touch .env
```

Add the following to your `.env` file:
```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/feedback-app
SECRET=your-super-secret-jwt-key
NODE_ENV=development
```

```bash
# Start the backend server
npm start
```

The backend will run on `http://localhost:3000`

### Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

The frontend will run on `http://localhost:5173`

### Full Stack Development

From the root directory:
```bash
# Install concurrently for running both servers
npm install

# Start both frontend and backend simultaneously
npm run dev
```

## 🗂️ Project Structure

```
mern-feedback/
├── backend/
│   ├── controllers/
│   │   ├── comment.js          # Comment CRUD operations
│   │   └── user.js             # User auth operations
│   ├── models/
│   │   ├── comment.js          # Comment schema
│   │   └── user.js             # User schema
│   ├── routes/
│   │   ├── comment.js          # Comment API routes
│   │   └── user.js             # User API routes
│   ├── services/
│   │   ├── auth.js             # JWT token services
│   │   └── hash.js             # Password hashing
│   ├── .env                    # Environment variables
│   ├── index.js                # Express server setup
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── CommentBox.jsx   # Individual comment display
│   │   │   ├── Comments.jsx     # Comments list container
│   │   │   ├── Form.jsx         # Feedback submission form
│   │   │   ├── Header.jsx       # App header with filters
│   │   │   ├── LogButton.jsx    # Auth buttons
│   │   │   ├── MyDialog.jsx     # Login/Register modal
│   │   │   ├── ProductName.jsx  # Product information card
│   │   │   └── Rating.jsx       # Rating display component
│   │   ├── context/
│   │   │   ├── CommentContext.jsx    # Comment state context
│   │   │   ├── CommentProvider.jsx   # Comment state provider
│   │   │   ├── UserContext.jsx       # User auth context
│   │   │   └── UserProvider.jsx      # User auth provider
│   │   ├── App.jsx              # Main app component
│   │   ├── main.jsx            # React app entry point
│   │   └── index.css           # Global styles
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── package.json
├── package.json                 # Root package for dev scripts
└── README.md
```

## 🔌 API Endpoints

### User Authentication
- `POST /users/` - Register new user
- `POST /users/login` - User login
- `POST /users/logout` - User logout
- `GET /users/check-session` - Check authentication status

### Comments/Feedback
- `POST /comments/` - Submit new feedback
- `GET /comments/` - Get all comments
- `GET /comments/:id` - Get specific comment

## 🎯 Usage

### For Users
1. **Visit the app** at `http://localhost:5173`
2. **Register/Login** using the buttons in the sidebar
3. **Submit feedback** by filling out the form with:
   - Your comment/review
   - Category selection (Performance, Battery, etc.)
   - Rating (0-5 stars)
4. **View all feedback** in the comments section
5. **Check ratings** in the sidebar analytics

### For Developers
1. **Component Structure**: Each UI element is a separate component for modularity
2. **State Management**: Uses React Context for global state (user auth, comments)
3. **Form Handling**: React Hook Form for validation and submission
4. **API Integration**: Fetch API with proper error handling
5. **Authentication**: JWT tokens stored in HTTP-only cookies

## 🔧 Configuration

### Environment Variables

**Backend** (`.env`)
```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
SECRET=your_jwt_secret_key
NODE_ENV=development
```

### Customization

**Product Information**: Modify [`ProductName.jsx`](frontend/src/components/ProductName.jsx)
```jsx
<h2 className='text-3xl font-bold'>Your Product Name</h2>
<p><b>Category</b>: Your Category</p>
<p><b>Seller</b>: Your Company</p>
```

**Rating Categories**: Update [`Form.jsx`](frontend/src/components/Form.jsx) and [`Header.jsx`](frontend/src/components/Header.jsx)
```jsx
const options = [
  { value: 'yourCategory', label: 'Your Category' },
  // Add more categories
];
```

## 🚀 Deployment

### Backend Deployment (Railway/Heroku)
1. Set environment variables in your hosting platform
2. Update MongoDB URI to your cloud database
3. Set `NODE_ENV=production`

### Frontend Deployment (Netlify/Vercel)
1. Build the project: `npm run build`
2. Update API URLs in fetch calls to your deployed backend
3. Deploy the `dist` folder

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Radix UI** for accessible components
- **Tailwind CSS** for utility-first styling
- **React Hook Form** for form management
- **MongoDB** for database solutions

## 📞 Contact

Your Name - [your.email@example.com](mailto:your.email@example.com)

Project Link: [https://github.com/yourusername/mern-feedback](https://github.com/yourusername/mern-feedback)

---

**Made with ❤️ using the MERN Stack**