import React from 'react'
import { PermIdentityOutlined } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';
import {
    Container,
    CssBaseline,
    Box,
    Avatar,
    Typography,
    Button,
    Snackbar
} from "@mui/material";
import Alert from "../../components/alert";
import { MyTextField as Input } from '../../components/Input'
import { useState } from "react";
import { profileSchema } from "../../libs/yupSchema";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { ProfileDataType } from "../../types/profile";
import searchData from '../../utils/search';
import ColorPicker from '../../components/colorPicker';
import saveProfile from '../../utils/save';

type Props = {
    type: 'create' | 'edit'
}

const capitalizeString = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

const EditProfile = ({ type }: Props) => {
    const [message, setMessage] = useState("");
    const [openAlert, setOpenAlert] = useState(false);
    const { control, handleSubmit, formState: { errors } } = useForm<ProfileDataType>({
        resolver: yupResolver(profileSchema),
        defaultValues: {
            email: '',
            password: '',
            fullName: '',
            phoneNumber: '',
            favoriteColor: 'blue'
        }
    });
    const navigate = useNavigate();

    const onSubmit = async (data: ProfileDataType) => {
        try {
            const isAlreadyEmail = searchData({email: data.email});
            if (!isAlreadyEmail) {
                saveProfile(data);
                navigate('/profile');
            } else {
                setMessage('Email has already been existed.');
                setOpenAlert(true);
            }
        } catch (e: any) {
            setMessage(e);
            setOpenAlert(true);
        }
    }

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenAlert(false);
    };


    return (
        <>
            <Container maxWidth="xs">
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
                    <Typography variant="h5">{capitalizeString(type) + ' Profile'}</Typography>
                    <Box sx={{ mt: 1 }}>
                        <form onSubmit={handleSubmit(onSubmit)}>

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

                            <Controller
                                control={control}
                                name="phoneNumber"
                                render={({ field }) => (
                                // <PhoneNumberInput
                                //     id="phoneNumber"
                                //     label="Phone Number"
                                //     value={value}
                                //     onChange={onChange}
                                //     helperText={errors.phoneNumber?.message}
                                //     error={errors.phoneNumber ? true : false}
                                // />
                                <Input
                                    id="phoneNumber"
                                    label="Phone Number"
                                    helperText={errors.phoneNumber?.message}
                                    error={errors.phoneNumber ? true : false}
                                    {...field}
                                />
                                )}
                            />

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

                            <Button
                                type='submit'
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                {capitalizeString(type)}
                            </Button>
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