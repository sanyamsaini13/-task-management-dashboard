# Task Management Dashboard

A responsive frontend Task Management Dashboard built using React, React Router, Tailwind CSS, and Vite.

The application allows users to manage tasks through a clean dashboard interface with task creation, editing, deletion, searching, filtering, status tracking, and localStorage persistence.

## Live Demo

[View Live Application](https://task-management-dashboard-jmh3bf7fj-sanyam1.vercel.app)

## Features

- Login page with form validation
- Remember Me functionality
- Protected routes
- Responsive dashboard
- Task statistics
  - Total Tasks
  - Pending Tasks
  - In Progress Tasks
  - Completed Tasks
- Task progress indicator
- Recent tasks section
- View all tasks
- Add new tasks
- Edit existing tasks
- Delete tasks with confirmation
- Task details page
- Search tasks by title
- Filter tasks by status
- Filter tasks by priority
- Status and priority badges
- Empty state handling
- Loading state
- localStorage persistence
- Responsive sidebar and mobile navigation
- 404 page

## Technologies Used

- React
- JavaScript (ES6+)
- React Router
- Tailwind CSS
- Vite
- HTML5
- CSS3
- LocalStorage
- Git & GitHub

## React Concepts Used

- Functional Components
- Props
- useState
- useEffect
- useMemo
- Context API
- Custom Hooks
- Event Handling
- Conditional Rendering
- React Router
- Protected Routes
- Reusable Components

## Project Structure

```text
src/
├── components/
│   ├── DashboardCard.jsx
│   ├── Header.jsx
│   ├── Layout.jsx
│   ├── PriorityBadge.jsx
│   ├── ProtectedRoute.jsx
│   ├── Sidebar.jsx
│   ├── StatusBadge.jsx
│   └── TaskForm.jsx
├── context/
│   ├── TaskProvider.jsx
│   └── taskContext.js
├── data/
│   └── mockTasks.js
├── pages/
│   ├── AddTask.jsx
│   ├── Dashboard.jsx
│   ├── EditTask.jsx
│   ├── Login.jsx
│   ├── NotFound.jsx
│   ├── TaskDetails.jsx
│   └── Tasks.jsx
├── App.jsx
├── index.css
└── main.jsx
```

## Installation and Setup

Clone the repository:

```bash
git clone https://github.com/sanyamsaini13/-task-management-dashboard.git
```

Navigate to the project directory:

```bash
cd -task-management-dashboard
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

## Login

This project uses frontend-only authentication for demonstration purposes.

You can log in using any valid email address and a password containing at least 6 characters.

Example:

```text
Email: demo@example.com
Password: 123456
```

No backend authentication server is used.

## Data Persistence

Tasks and login-related information are stored in the browser using `localStorage`.

This allows task changes to remain available after refreshing the page.

## Responsive Design

The application is designed to work across desktop, tablet, and mobile devices.

On smaller screens, the sidebar changes into a mobile navigation menu.

## Screenshots

Screenshots of the application can be added here to demonstrate the Login, Dashboard, Task List, Add Task, Edit Task, and Task Details interfaces.

## Author

**Sanyam Saini**

GitHub: [sanyamsaini13](https://github.com/sanyamsaini13)

## Assignment

This project was developed as a React.js Developer technical assignment for IndraQ Innovation Pvt. Ltd.