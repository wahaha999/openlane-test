import React from 'react'
import Box, { BoxProps } from '@mui/material/Box'
import { styled } from '@mui/material'

const StyledBox = styled(Box)<BoxProps>(({ theme }) => ({
    backgroundColor: '#f0f3f9',
    marginTop: '16px',
    padding: '16px 16px 32px 20px',
    borderRadius: '12px'
}))

interface PropsType {
    children: React.ReactNode
}

export default function OLBox({ children }: PropsType) {
    return (
        <StyledBox>
            {children}
        </StyledBox>
    )
}