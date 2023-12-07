import { Stack, IconButton } from '@mui/material'
import { Circle } from '@mui/icons-material'
import { favoriteColors } from '../libs/constant'

type Props = {
    onChange: (col: string) => void,
    value: string
}

const ColorPicker = ({value, onChange}: Props) => {
    return (
        <div>
            <Stack direction="row" spacing={1}>
                {
                    favoriteColors.map(col => (                        
                        <IconButton onClick={() => onChange(col)} className={col === value ? 'selected' : ''} key={col} aria-label="circle" color="secondary">
                            <Circle />
                        </IconButton>
                    ))
                }
            </Stack>
        </div>
    )
}

export default ColorPicker