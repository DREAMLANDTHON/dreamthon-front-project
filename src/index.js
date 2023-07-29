import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NotFound from "./pages/NotFound";
import Chatbot from "./pages/chatbot/Chatbot";
import Welcome from "./pages/Welcome";
import Register from "./pages/Register";
import Login from "./pages/Login";
import SelectedKeyword from "./pages/chatbot/components/SelectedKeyword";
import Chats from "./pages/chatbot/components/Chats";
import ProtectedRoute from "./pages/ProtectedRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <NotFound/>,
        children: [
            { index: true, path: '/', element: <Welcome/>},
            { path: '/login', element: <Login/>},
            { path: '/register', element: <Register/>},
            {
                path: '/Chatbot',
                element: <Chatbot/>,
                children: [
                    { path: '/Chatbot', element: <SelectedKeyword/>},
                    {
                        path: '/Chatbot/:keyword',
                        element:
                        <ProtectedRoute>
                            <Chats/>
                        </ProtectedRoute>
                    },
                ]
            },
        ],
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
