import React from 'react'
import { CakeOutlined, ColorLensOutlined, DeleteOutline, Edit, EmailOutlined, EventNoteOutlined, FamilyRestroomOutlined, LocalPhoneOutlined, PlusOneOutlined } from "@mui/icons-material";
import {
    Box,
    Typography,
    Grid,
    Button,
    Snackbar
} from "@mui/material";
import { clearData, deleteProfile, searchData } from '../../utils/data';
import { ProfileDataType } from "../../types/profile";
import { useNavigate } from 'react-router-dom'
import ConfirmationDialogRaw from '../../components/ConfirmDialog';
import OLAvatar from '../../components/Avatar';
import OLIconButton from '../../components/IconButton';
import OLBox from '../../components/DetailBox';
import OLColorButton from '../../components/ColorButton';
import { localStorageUtil } from '../../utils/localStorageUtils';
import { setSessionStart, checkSessionTimeout, clearSession } from '../../utils/sessionUtils';
import Alert from '../../components/Alert';
import { useTheme } from '../../context/themeContext';

const ViewProfile = () => {
    const email = localStorageUtil.getItem('email') as string;
    const navigate = useNavigate();
    // Delete Confirm
    const [confirmOpen, setConfirmOpen] = React.useState(false);
    const [confirm, setConfirm] = React.useState(false);
    // Session Timeout
    const [openAlert, setOpenAlert] = React.useState(false);
    let profile = searchData({ email }) as ProfileDataType;
    const {setTheme} = useTheme();

    React.useEffect(() => {
        // set Theme
        const favColor = localStorageUtil.getItem('favoriteColor') as string
        setTheme(favColor);

        // Set the session start time when the component mounts
        setSessionStart();

        const interval = setInterval(() => {
            if (checkSessionTimeout()) {
                clearSession();
                setOpenAlert(true);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);


    const handleDelete = () => {
        setConfirmOpen(true);
    };

    const handleClose = (newValue?: boolean) => {
        setConfirmOpen(false);
        try {
            if (newValue) {
                if(typeof email === 'string') deleteProfile(email);
                clearData();
                setConfirm(newValue);
                navigate('/login')
            }
        } catch(e) {
            console.error(e);
        }
    };
    
    const handleCloseAlert = (_?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenAlert(false);
        clearData();
        navigate('/login');
    };

    const handleEdit = () => {
        navigate(`/profile/edit`);
    }


    return (
        profile ?
            <Box
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >

                <Grid
                    justifyContent="flex-start"
                    alignItems="center"
                    container
                    spacing={6}
                    sx={{ my: 6 }}
                >
                    <Grid item>
                        <OLAvatar />
                    </Grid>
                    <Grid item>
                        <Typography variant='h2' color='primary'>{profile.fullName + ' Profile'} </Typography>
                    </Grid>
                </Grid>

                <Grid container sx={{ my: 4 }}>
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

                <OLBox>
                    <Grid container alignItems='center' spacing={2}>
                        <Grid item md={12} sm={12}>
                            <Typography sx={{ my: 2 }} variant='h5'>Contact details</Typography>
                        </Grid>
                        {/* // Email */}
                        <Grid container item md={1} sm={3} alignItems='center' >
                            <EmailOutlined />
                        </Grid>
                        <Grid item md={11} sm={9}>
                            <Typography variant="h6">{profile.email}</Typography>
                        </Grid>

                        {/* // Phone Number */}
                        <Grid container item md={1} sm={3} alignItems='center' >
                            <LocalPhoneOutlined />
                        </Grid>
                        <Grid item md={11} sm={9}>
                            <Typography variant="h6">{profile.phoneNumber}</Typography>
                        </Grid>

                        {/* // Fav Color */}
                        <Grid container item md={1} sm={3} alignItems='center' >
                            <ColorLensOutlined />
                        </Grid>
                        <Grid item md={11} sm={9}>
                            <OLColorButton title={profile.favoriteColor} />
                        </Grid>

                    </Grid>
                </OLBox>

                <Grid container justifyContent={'flex-end'} spacing={1} sx={{ marginTop: 6 }}>
                    <Grid item>
                        <Button color='primary' variant='contained' startIcon={<Edit />} onClick={handleEdit}>Edit</Button>
                    </Grid>
                    <Grid item>
                        <Button variant='outlined' startIcon={<DeleteOutline />} onClick={handleDelete}>Delete</Button>
                    </Grid>
                </Grid>
                <ConfirmationDialogRaw
                    id="ringtone-menu"
                    keepMounted
                    open={confirmOpen}
                    onClose={handleClose}
                    value={confirm}
                />
                <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleCloseAlert}>
                    <Alert onClose={handleCloseAlert} severity="warning" sx={{ width: '100%' }}>
                    {"The session is going to time out."}
                    </Alert>
                </Snackbar>
            </Box>
            : <></>
    )
}

export default ViewProfile