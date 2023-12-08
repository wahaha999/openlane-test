import { Grid } from "@mui/material"
import OLIconButton from "../../../../components/iconButton"
import { FamilyRestroomOutlined, EventNoteOutlined, CakeOutlined, PlusOneOutlined } from "@mui/icons-material"

type Props = {}

const IconButtonList = (_: Props) => {
    return (
        <Grid container sx={{ my: 2 }}>
            <Grid item md={1}>
                <OLIconButton>
                    <FamilyRestroomOutlined />
                </OLIconButton>
            </Grid>
            <Grid item md={1}>
                <OLIconButton>
                    <EventNoteOutlined />
                </OLIconButton>
            </Grid>
            <Grid item md={1}>
                <OLIconButton>
                    <CakeOutlined />
                </OLIconButton>
            </Grid>
            <Grid item md={1}>
                <OLIconButton>
                    <PlusOneOutlined />
                </OLIconButton>
            </Grid>
            <Grid item md={8}>
                <div style={{ height: '100%', borderTop: '1px solid rgb(32,33,36)', position: 'relative', top: '50%' }}></div>
            </Grid>
        </Grid>
    )
}

export default IconButtonList