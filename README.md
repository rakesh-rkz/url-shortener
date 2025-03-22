# URL Shortener Application

This is a URL shortener application built using React, TypeScript, Tailwind CSS, react-toastify, and Firebase. The application allows users to shorten long URLs and manage their shortened links.

**Live App URL :** [url-shortner.com](https://url-shortner-dc0d9.web.app/) 

## Features

- **URL Shortening**: Convert long URLs into short, shareable links.
- **Firebase Integration**: Store and retrieve shortened URLs using Firebase.
- **User Notifications**: Inform users of successful actions or errors using react-toastify.
- **Responsive Design**: Stylish and responsive UI using Tailwind CSS.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **react-toastify**: A library for displaying toast notifications.
- **Firebase**: A cloud-based platform for backend services, including Firestore for database storage.

## Installation

Follow these steps to get the application up and running on your local machine:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/rakesh-rkz/url-shortener.git
   cd url-shortener

2. **Install dependencies:**

    ```bash
    npm install

3. **Set up Firebase:**

- Go to the Firebase Console and create a new project.
- Add a web app to your Firebase project and copy the Firebase configuration object.
- Create a .env file in the root of your project and add your Firebase configuration:

    ````env
    REACT_APP_FIREBASE_API_KEY=your-api-key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
    REACT_APP_FIREBASE_PROJECT_ID=your-project-id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
    REACT_APP_FIREBASE_APP_ID=your-app-id

4. **Start the development server:**

    ```bash
    npm start

Open **http://localhost:3000** in your browser to see the application

## Usage
- Shorten URLs: Enter a long URL in the input field and click "Shorten" to generate a short link.
- Manage Links: View a list of your shortened links and access or delete them as needed.

## Development
- Start the development server: npm start
- Build the project for production: npm run build
- Run tests: `npm test`

## Contact
For any questions or feedback, feel free to reach out:

Your Name: [Rakesh] rakeshrkz2101@gmail.com \
GitHub: [Rakesh](https://github.com/rakesh-rkz) 