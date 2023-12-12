import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements, Navigate } from 'react-router-dom';
import Login from './pages/login';
import EditProfile from './pages/profile/edit';
import ViewProfile from './pages/profile/detail';
import AuthLayout from './components/layouts/AuthLayout';
import ProfileLayout from './components/layouts/ProfileLayout';
import AppLayout from './components/layouts/AppLayout';
import { ThemeProvider } from '@mui/material';
import  { themeGenerator } from './styles/theme';
import { useTheme } from './context/themeContext';
import React, { ReactNode } from "react";
import { checkAuth } from "./utils/sessionUtils";

interface RequireAuthProps {
    children: ReactNode
}

const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
    const isAuth = checkAuth();

    return isAuth ? <>{children}</> : <Navigate to={'/login'} replace />
}


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<AppLayout />}>
    <Route index element={<Navigate to="/login" replace />} />

    <Route path='login' element={<AuthLayout />}>
      <Route index element={<Login />} />
    </Route>

    <Route path='profile' element={<ProfileLayout />}>
      <Route index element={<RequireAuth><ViewProfile /></RequireAuth>} />
      <Route path='create' element={<EditProfile mode='create' />} />
      <Route path='edit' element={<RequireAuth><EditProfile mode='edit' /></RequireAuth>} />
    </Route>
    
    <Route path="*" element={<Navigate to="/login" replace />} />
  </Route>
));

function App() {
  const {theme} = useTheme();

  return (
    <ThemeProvider theme={themeGenerator(theme)}>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
