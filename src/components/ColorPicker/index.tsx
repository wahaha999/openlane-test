import { Stack, IconButton, Tooltip, Fade } from '@mui/material'
import { Circle } from '@mui/icons-material'
import { favoriteColors, primaryColors } from '../../libs/constant'
import './index.css';
import { useTheme } from '../../context/themeContext';

type Props = {
    onChange: (col: string) => void,
    value: string
}

const ColorPicker = ({ value, onChange }: Props) => {
    const { setTheme } = useTheme();

    const handleChange = (col: string) => {
        setTheme(col);
        onChange(col);
    }

    return (
        <div style={{ marginTop: 16, marginBottom: 8 }}>
            <p>Please select your favorite color</p>
            <Stack direction="row" spacing={1}>
                {
                    favoriteColors.map((col, index) => (
                        <Tooltip
                            key={index}
                            title={col}
                            TransitionComponent={Fade}
                            TransitionProps={{ timeout: 600 }}
                        >
                            <IconButton onClick={() => handleChange(col)} className={col === value ? 'selected' : ''} key={col} aria-label="circle" sx={{ color: primaryColors[index] }}>
                                <Circle />
                            </IconButton>
                        </Tooltip>
                    ))
                }
            </Stack>
        </div>
    )
}

export default ColorPicker