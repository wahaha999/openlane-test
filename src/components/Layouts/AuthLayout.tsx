import { Outlet } from "react-router-dom"
import { Box } from '@mui/material';

export default function AuthLayout() {
    return (
        <>
            <Box
                sx={{
                    mt: 20,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginRight: 'auto',
                    marginLeft: 'auto',
                    maxWidth: "500px"
                }}
            >
                <Outlet />
            </Box>
        </>
    )
}