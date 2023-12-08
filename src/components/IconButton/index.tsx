import React from 'react'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import { styled } from '@mui/material'

const StyledIconButton = styled(IconButton)<IconButtonProps>(({ theme }) => ({
    width: '50px', height: '50px',
    '&.MuiIconButton-root': {
        backgroundColor: theme.palette.primary.main,
        opacity: '0.4',
        color: "#001635"
    },
}))

interface PropsType {
    children: React.ReactNode
}

export default function OLIconButton({ children }: PropsType) {
    return (
        <StyledIconButton>
            {children}
        </StyledIconButton>
    )
}