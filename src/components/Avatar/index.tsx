import React from 'react'
import Avatar, { AvatarProps } from '@mui/material/Avatar'
import { styled } from '@mui/material'
import { Person } from '@mui/icons-material'

const StyledAvatar = styled(Avatar)<AvatarProps>(({ theme }) => ({
    m: 6, backgroundColor: theme.palette.primary.main, width: '160px', height: '160px'
}))

export default function OLAvatar() {
    return (
        <StyledAvatar>
            <Person sx={{fontSize: '100px'}} />
        </StyledAvatar>
    )
}