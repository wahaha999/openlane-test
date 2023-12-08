import { Outlet } from "react-router-dom"
import { Box } from '@mui/material';

export default function ProfileLayout() {
    return (
        <Box
            sx={{
                // mt: 20,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginRight: 'auto',
                marginLeft: 'auto',
            }}
        >
            <Outlet />
        </Box>
    )
}