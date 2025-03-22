import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import { ToastContainer } from 'react-toastify';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <BrowserRouter>
      <div className="bg-cream min-h-screen">
        <ToastContainer />
        <App />
      </div>
    </BrowserRouter>
  </>
);

