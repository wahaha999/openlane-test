import OLBox from "../../../../components/detailBox"
import { Grid, Typography } from "@mui/material"
import { EmailOutlined, LocalPhoneOutlined, ColorLensOutlined } from "@mui/icons-material"
import OLColorButton from "../../../../components/colorButton"
import { ProfileDataType } from "../../../../types/profile"

type Props = {
    profile: ProfileDataType
}

const ContactDetail = ({profile}: Props) => {
    return (
        <OLBox>
            <Grid container alignItems='center' spacing={2}>
                <Grid item md={12} sm={12}>
                    <Typography sx={{ my: 2 }} variant='h5'>Contact details</Typography>
                </Grid>
                <Grid container item md={1} sm={3} alignItems='center' >
                    <EmailOutlined />
                </Grid>
                <Grid item md={11} sm={9}>
                    <Typography variant="h6">{profile.email}</Typography>
                </Grid>

                <Grid container item md={1} sm={3} alignItems='center' >
                    <LocalPhoneOutlined />
                </Grid>
                <Grid item md={11} sm={9}>
                    <Typography variant="h6">{profile.phoneNumber}</Typography>
                </Grid>

                <Grid container item md={1} sm={3} alignItems='center' >
                    <ColorLensOutlined />
                </Grid>
                <Grid item md={11} sm={9}>
                    <OLColorButton title={profile.favoriteColor} />
                </Grid>
            </Grid>
        </OLBox>
    )
}

export default ContactDetail