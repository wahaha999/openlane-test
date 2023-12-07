import { LockOutlined } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';
import {
    Container,
    CssBaseline,
    Box,
    Avatar,
    Typography,
    Button,
    Grid,
    Snackbar
} from "@mui/material";
import Alert from "../../components/alert";
import { MyTextField as Input } from '../../components/Input'
import { useState } from "react";
import { Link } from "react-router-dom";
import { loginSchema } from "../../libs/yupSchema";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginFormValues } from "../../types/login";
import searchData from "../../utils/search";

const Login = () => {
    const [message, setMessage] = useState("");
    const [openAlert, setOpenAlert] = useState(false);
    const { control, handleSubmit, formState: { errors } } = useForm<LoginFormValues>({
        resolver: yupResolver(loginSchema),
        defaultValues: {
            email: '', // Initialize email with an empty string or a default value
            password: '' // Initialize password with an empty string or a default value
        }
    });
    const navigate = useNavigate();

    const onSubmit = async (data: LoginFormValues) => {
        try {
            const isSuccess = searchData(data);
            if (isSuccess) {
                navigate(`/profile/${data.email}`);
            } else {
                setMessage('Email or password is correct.');
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
                        <LockOutlined />
                    </Avatar>
                    <Typography variant="h5">Login</Typography>
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
                                name="password"
                                control={control}
                                render={({ field }) => (
                                    <Input
                                        id="password"
                                        label="Password"
                                        type="password"
                                        helperText={errors.password?.message}
                                        error={!!errors.password}
                                        {...field} // Spread the field props into Input
                                    />
                                )}
                            />

                            <Button
                                type='submit'
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Login
                            </Button>
                            <Grid container justifyContent={"flex-end"}>
                                <Grid item>
                                    <Link to="/profile/create">Don't have a profile? Create a new one</Link>
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

export default Login