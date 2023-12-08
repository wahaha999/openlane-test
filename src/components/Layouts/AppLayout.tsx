import { Outlet } from "react-router-dom"
import { Container } from '@mui/material';

export default function AppLayout() {
    return (
        <Container maxWidth='md'>
            <Outlet />
        </Container>
    )
}