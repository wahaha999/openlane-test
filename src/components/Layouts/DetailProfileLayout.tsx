import React from "react"
import { Outlet } from "react-router-dom"
import { Container } from '@mui/material';

export default function DetailProfileLayout() {
    return (
        <Container>
            <main>
                <Outlet />
            </main>
        </Container>
    )
}