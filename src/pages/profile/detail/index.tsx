import React from 'react'
import { ArrowBackOutlined, DeleteOutline, Edit } from "@mui/icons-material";
import {
    Box,
    Grid,
    Button,
    Snackbar
} from "@mui/material";
import { clearData, deleteProfile, searchData } from '../../../utils/data';
import { ProfileDataType } from "../../../types/profile";
import { useNavigate } from 'react-router-dom'
import ConfirmationDialogRaw from '../../../components/confirmDialog';
import { localStorageUtil } from '../../../utils/localStorageUtils';
import { setSessionStart, checkSessionTimeout, clearSession } from '../../../utils/sessionUtils';
import Alert from '../../../components/alert';
import { useTheme } from '../../../context/themeContext';
import MyAvatar from './components/myAvatar';
import IconButtonList from './components/iconButtonList';
import ContactDetail from './components/contactDetail';

const ViewProfile = () => {
    const email = localStorageUtil.getItem<string>('email') as string;
    const navigate = useNavigate();
    // Delete Confirm
    const [confirmOpen, setConfirmOpen] = React.useState(false);
    const [confirm, setConfirm] = React.useState(false);
    // Session Timeout
    const [openAlert, setOpenAlert] = React.useState(false);
    let profile = searchData({ email }) as ProfileDataType;
    const { setTheme } = useTheme();

    React.useEffect(() => {
        const favColor = localStorageUtil.getItem<string>('favoriteColor') as string
        setTheme(favColor);
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
                if (typeof email === 'string') deleteProfile(email);
                clearData();
                setConfirm(newValue);
                navigate('/login')
            }
        } catch (e) {
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

    const handleLogOut = () => {
        clearData();
        navigate('/login')
    }


    return (
        profile ?
            <Box
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
                <Button
                    sx={{ maxWidth: 170, my: 5 }}
                    variant='outlined'
                    startIcon={<ArrowBackOutlined />}
                    onClick={handleLogOut}
                >
                    Log out
                </Button>

                <MyAvatar name={profile.fullName} />

                <IconButtonList />

                <ContactDetail profile={profile} />

                <Grid container justifyContent={'flex-end'} spacing={1} sx={{ py: 6 }}>
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