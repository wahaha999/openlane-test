import { Navigate, Outlet } from "react-router-dom"
import { Box } from '@mui/material';
import React, { ReactNode } from "react";
import { checkAuth } from "../../utils/sessionUtils";

interface RequireAuthProps {
    children: ReactNode
}

const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
    const isAuth = checkAuth();

    return isAuth ? <>{children}</> : <Navigate to={'/login'} replace />
}

export default function ProfileLayout() {
    return (
        <RequireAuth>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginRight: 'auto',
                    marginLeft: 'auto',
                }}
            >
                <Outlet />
            </Box>
        </RequireAuth>
    )
}