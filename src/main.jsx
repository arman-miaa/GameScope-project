import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import router from './routes/Routes';
import AuthProvider from './provider/AuthProvider';
import { ToastContainer } from 'react-toastify';
 import "react-toastify/dist/ReactToastify.css";
import ThemeProvider from './provider/ThemeProvider ';


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router} />
        <ToastContainer position="top-center" autoClose={3000} />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
);
