import { Grid, Typography } from '@mui/material'
import OLAvatar from '../../../../components/avatar'

interface PropsType {
    name: string;
}

const MyAvatar = ({name}: PropsType) => {
    return (
        <Grid
            justifyContent="flex-start"
            alignItems="center"
            container
            spacing={6}
            sx={{ mb: 5 }}
        >
            <Grid item>
                <OLAvatar />
            </Grid>
            <Grid item>
                <Typography variant='h2' color='primary'>{name + ' Profile'} </Typography>
            </Grid>
        </Grid>
    )
}

export default MyAvatar