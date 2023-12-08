import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import { styled, Tooltip } from '@mui/material'
import { Circle } from '@mui/icons-material'

const StyledIconButton  = styled(IconButton)<IconButtonProps>(({ theme }) => ({
    width: '30px', height: '30px',
    '&.MuiIconButton-root': {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.main
    },
}))

interface PropsType {
    title: string
}

export default function OLColorButton({title} : PropsType) {
    return (
        <Tooltip title={title} placement="right">
            <StyledIconButton>
                <Circle />
            </StyledIconButton>
        </Tooltip>
    )
}