import React from 'react'
import { CancelOutlined, ColorLensOutlined, EmailOutlined, LocalPhoneOutlined, LockOutlined, PermIdentityOutlined, PersonOutline, SaveOutlined } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';
import {
    Container,
    CssBaseline,
    Box,
    Avatar,
    Typography,
    Button,
    Snackbar,
    Grid
} from "@mui/material";
import Alert from "../../components/alert";
import { CustomizedInput as Input, PhoneInput } from '../../components/input'
import { useState } from "react";
import { profileSchema } from "../../libs/yupSchema";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { ProfileDataType } from "../../types/profile";
import { searchData, saveProfile, getData, updateProfile, clearData } from '../../utils/data';
import ColorPicker from '../../components/colorPicker';
import { localStorageUtil } from '../../utils/localStorageUtils';
import { defaultValues } from '../../libs/constant';
import { useTheme } from '../../context/themeContext';

interface PropsType {
    mode: string;
}

const capitalizeString = (str: string) => {
    let capitalizedStr = str.charAt(0).toUpperCase() + str.slice(1)
    if (str === 'edit') {
        let name = localStorageUtil.getItem<string>('fullName');
        capitalizedStr = capitalizedStr + " " + name;
    }
    return capitalizedStr + ' Profile'
}


const EditProfile: React.FC<PropsType> = ({ mode }) => {
    const isCreate = mode === 'create';
    const [message, setMessage] = useState("");
    const [openAlert, setOpenAlert] = useState(false);
    const { control, handleSubmit, formState: { errors } } = useForm<ProfileDataType>({
        resolver: yupResolver(profileSchema),
        defaultValues: (isCreate ? defaultValues : getData())
    });
    const navigate = useNavigate();
    const { setTheme } = useTheme();
    const prevFavColor = localStorageUtil.getItem<string>('favoriteColor') as string;

    React.useEffect(() => {
        setTheme(prevFavColor);
    }, [])

    const onSubmit = async (data: ProfileDataType) => {
        try {
            if (!isCreate) {
                updateProfile(data);
                navigate(`/profile`);
            } else {
                const isAlreadyEmail = searchData({ email: data.email });
                if (!isAlreadyEmail) {
                    saveProfile(data);
                    navigate(`/profile`);
                } else {
                    setMessage('Email has already been existed.');
                    setOpenAlert(true);
                }
            }
        } catch (e: any) {
            setMessage(e);
            setOpenAlert(true);
        }
    }

    const handleCancel = () => {
        if (isCreate) {
            clearData();
            navigate('/login');
        } else {
            localStorageUtil.setItem('favoriteColor', prevFavColor)
            navigate('/profile')
        }
    }

    const handleClose = (_?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenAlert(false);
    };


    return (
        <>
            <Container maxWidth="md">
                <CssBaseline />
                <Box
                    sx={{
                        mt: 20,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: "primary.light" }}>
                        <PermIdentityOutlined />
                    </Avatar>
                    <Typography variant="h5" color='primary'>{capitalizeString(mode)}</Typography>
                    <Box sx={{ mt: 1 }}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Grid container>
                                <Grid item container md={2} sm={12} justifyContent={'center'} alignItems='center'>
                                    <EmailOutlined />
                                </Grid>
                                <Grid item md={10} sm={12}>
                                    <Controller
                                        control={control}
                                        name="email"
                                        render={({ field }) => (<Input
                                            id="email"
                                            label="Email Address"
                                            autoFocus
                                            helperText={errors.email?.message}
                                            error={errors.email ? true : false}
                                            {...field}
                                        />)}
                                    />
                                </Grid>


                                <Grid item container md={2} sm={12} justifyContent={'center'} alignItems='center'>
                                    <LockOutlined />
                                </Grid>
                                <Grid item md={10} sm={12}>
                                    <Controller
                                        control={control}
                                        name="password"
                                        render={({ field }) => (<Input
                                            id="password"
                                            label="Password"
                                            type='password'
                                            helperText={errors.password?.message}
                                            error={errors.password ? true : false}
                                            {...field}
                                        />)}
                                    />
                                </Grid>


                                <Grid item container md={2} sm={12} justifyContent={'center'} alignItems='center'>
                                    <PersonOutline />
                                </Grid>
                                <Grid item md={10} sm={12}>
                                    <Controller
                                        control={control}
                                        name="fullName"
                                        render={({ field }) => (<Input
                                            id="fullName"
                                            label="Full Name"
                                            helperText={errors.fullName?.message}
                                            error={errors.fullName ? true : false}
                                            {...field}
                                        />)}
                                    />
                                </Grid>

                                <Grid item container md={2} sm={12} justifyContent={'center'} alignItems='center'>
                                    <LocalPhoneOutlined />
                                </Grid>
                                <Grid item md={10} sm={12}>
                                    <Controller
                                        control={control}
                                        name="phoneNumber"
                                        render={({ field }) => (
                                            <PhoneInput
                                                {...field}
                                                label="Phone Number"
                                                variant="outlined"
                                                helperText={errors.phoneNumber?.message}
                                                error={errors.phoneNumber ? true : false}
                                            />
                                        )}
                                    />
                                </Grid>

                                <Grid item container md={2} sm={12} justifyContent={'center'} alignItems='center'>
                                    <ColorLensOutlined />
                                </Grid>
                                <Grid item md={10} sm={12}>
                                    <Controller
                                        name="favoriteColor"
                                        control={control}
                                        render={({ field: { onChange, value } }) => (
                                            <ColorPicker
                                                value={value}
                                                onChange={(e) => onChange(e)}
                                            />
                                        )}
                                    />
                                </Grid>
                            </Grid>

                            <Grid container direction={'row'} justifyContent="flex-end" spacing={1}
                                sx={{ textAlign: "right", mt: 4, mb: 2 }}>
                                <Grid item>
                                    <Button
                                        type='submit'
                                        variant="contained"
                                        startIcon={<SaveOutlined />}
                                    >
                                        Save
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button
                                        variant='outlined'
                                        onClick={handleCancel}
                                        startIcon={<CancelOutlined />}
                                    >
                                        Cancel
                                    </Button>
                                </Grid>
                            </Grid>


                        </form>
                        <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose}>
                            <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
                                {message}
                            </Alert>
                        </Snackbar>
                    </Box>
                </Box>
            </Container>
        </>
    )

}

export default EditProfile