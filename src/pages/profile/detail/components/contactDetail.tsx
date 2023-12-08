import Box, { BoxProps } from '@mui/material/Box'
import { Grid, Typography, styled } from "@mui/material"
import { EmailOutlined, LocalPhoneOutlined, ColorLensOutlined } from "@mui/icons-material"
import OLColorButton from "../../../../components/colorButton"
import { ProfileDataType } from "../../../../types/profile"

type Props = {
    profile: ProfileDataType
}

const StyledBox = styled(Box)<BoxProps>(() => ({
    backgroundColor: '#f0f3f9',
    marginTop: '16px',
    padding: '16px 16px 32px 20px',
    borderRadius: '12px'
}))

const ContactDetail = ({profile}: Props) => {
    return (
        <StyledBox>
            <Grid container alignItems='center' spacing={2}>
                <Grid item md={12} sm={12}>
                    <Typography sx={{ my: 2 }} variant='h5'>Contact details</Typography>
                </Grid>
                <Grid container item md={1} sm={2} alignItems='center' >
                    <EmailOutlined />
                </Grid>
                <Grid item md={11} sm={10}>
                    <Typography variant="h6">{profile.email}</Typography>
                </Grid>

                <Grid container item md={1} sm={2} alignItems='center' >
                    <LocalPhoneOutlined />
                </Grid>
                <Grid item md={11} sm={10}>
                    <Typography variant="h6">{profile.phoneNumber}</Typography>
                </Grid>

                <Grid container item md={1} sm={2} alignItems='center' >
                    <ColorLensOutlined />
                </Grid>
                <Grid item md={11} sm={10}>
                    <OLColorButton title={profile.favoriteColor} />
                </Grid>
            </Grid>
        </StyledBox>
    )
}

export default ContactDetail