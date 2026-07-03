# Blog Platform

A full-stack blog application that allows users to create, edit, manage, and publish blog posts with secure authentication and rich text editing capabilities.

## Live Demo

[Visit Website](https://blog-appwrite-plum.vercel.app)

---

## Features

- User authentication (Signup, Login, Logout)
- Create and publish blog posts
- Rich text editor for writing formatted content
- Upload featured images for blog posts
- Edit existing blog posts
- Delete posts created by the user
- View all published blog posts
- Protected routes for authenticated users
- Responsive frontend design

---

## Tech Stack

### Frontend
- React.js
- Redux Toolkit
- React Router DOM
- TinyMCE Editor

### Backend / Services
- Appwrite Authentication
- Appwrite Database
- Appwrite Storage

### Deployment
- Vercel

---

## Project Architecture

The application follows a frontend + Backend-as-a-Service architecture.

Frontend handles:
- User Interface
- State management
- Routing
- Authentication state persistence

Appwrite handles:
- User authentication
- Database operations
- File storage
- Session management

---

## Folder Structure

src/
│
├── components/       Reusable UI components  
├── pages/            Application pages  
├── appwrite/         Appwrite service configuration  
├── store/            Redux store configuration  
├── conf/             Environment variables configuration  
└── main.jsx          Application entry point  

---

## Core Functionalities

### Authentication
Users can create accounts, login securely, and maintain authenticated sessions using Appwrite authentication services.

### Blog Management
Authenticated users can:
- Create new posts
- Update existing posts
- Delete their own posts
- Upload blog cover images

### Rich Text Editing
Integrated TinyMCE editor allows users to write formatted blog content with a better writing experience.

---

## Challenges Faced During Development

While deploying the application, several production-level issues were encountered and resolved:

- CORS configuration issues with Appwrite
- Environment variable configuration issues on Vercel
- React Router refresh issue causing 404 errors on deployment
- TinyMCE domain verification issues
- API request debugging in production environment

These issues helped in understanding real-world deployment workflows and debugging cloud-hosted applications.

---

## Installation

Clone the repository

```bash
git clone https://github.com/AyanDutta521/Blog-Appwrite
```

Install dependencies

```bash
npm install
```

Run locally

```bash
npm run dev
```

---

## Environment Variables

Create a `.env` file in the root directory.

```env
VITE_APPWRITE_URL=
VITE_APPWRITE_PROJECT_ID=
VITE_APPWRITE_DATABASE_ID=
VITE_APPWRITE_COLLECTION_ID=
VITE_APPWRITE_BUCKET_ID=
```

---

## Future Improvements

- Add comments system
- Add user profile page
- Implement search functionality
- Add blog categories and tags
- Improve loading performance
- Add dark mode

---

## Learning Outcomes

This project helped in understanding:

- Frontend architecture using React
- State management with Redux Toolkit
- Authentication workflows
- Backend-as-a-Service architecture
- Production deployment and debugging
- Handling third-party integrations

---

## Author

Ayan Dutta
