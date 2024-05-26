This is the frontend for the Library Service application, built with React and Vite. This project provides a user interface for managing library resources and interacting with the backend service.
Features

    View detailed information about each book
    CRUD Operations for each element
    Responsive design for desktop and mobile devices

Getting Started
Prerequisites

    Node.js 
    npm 

Installation

    Clone the repository and install dependencies:

```
git clone https://github.com/sleepyren/library-service/tree/main/frontend/react
cd library-service-frontend
npm install
```

### Choose the correct host and port for the backend service
```
VITE_BACKEND_PORT = '8080'
VITE_BACKEND_HOST = 'http://localhost:'
```

Running the Server

To run the application in development mode, use the following command:
```
npm run dev
```

This will start the development server and open the application in your default web browser. The server will automatically reload if you make changes to the code.
Building for Production

To create a production build of the application, use the following command:

```
npm run build
```

This will generate the optimized production files in the dist directory.
Previewing the Production Build

To preview the production build locally, use the following command:

```
npm run preview
```

This will serve the contents of the dist directory on a local server, allowing you to test the production build.
Deployment

After building the application, you can deploy the contents of the dist directory to your preferred web hosting service (e.g., Netlify, Vercel, GitHub Pages).
Project Structure

    src/ - Contains the source code for the application
        components/ - Reusable React components
        pages/ - Page components for different routes
        assets/ - Static assets like images and styles
    public/ - Public assets and the index.html file
    dist/ - Production build output (generated after running npm run build)
    vite.config.js - Vite configuration file