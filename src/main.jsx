import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import App from "./App";
import SupportPage from "@/Pages/SupportPage";
import BookPage from "@/Pages/BookPage";
import NotFoundPage from "@/Pages/NotFoundPage";
import "@/index.css";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/support',
    element: <SupportPage />
  },
  {
    path: 'books/:id',
    element: <BookPage />
    
  },
  {
    path: '/books',
    element: <Navigate to="/" replace />
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
