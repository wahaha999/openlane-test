import { LockOutlined, LoginOutlined } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Avatar,
    Typography,
    Button,
    Grid,
    Snackbar
} from "@mui/material";
import Alert from "../../components/alert";
import { CustomizedInput as Input } from '../../components/input'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { loginSchema } from "../../libs/yupSchema";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginFormValues } from "../../types/login";
import { clearData, saveData, searchData } from "../../utils/data";
import { useTheme } from '../../context/themeContext';

const Login = () => {
    const [message, setMessage] = useState("");
    const [openAlert, setOpenAlert] = useState(false);
    const { control, handleSubmit, formState: { errors } } = useForm<LoginFormValues>({
        resolver: yupResolver(loginSchema),
        defaultValues: {
            email: '', 
            password: '' 
        }
    });
    const navigate = useNavigate();
    const {setTheme} = useTheme();

    useEffect(() => {
        clearData()
        setTheme('blue');
    }, [])

    const onSubmit = async (data: LoginFormValues) => {
        try {
            const isSuccess = searchData(data);
            if (isSuccess) {
                saveData(isSuccess);
                navigate(`/profile`);
            } else {
                setMessage('Email or password is correct.');
                setOpenAlert(true);
            }
        } catch (e: any) {
            setMessage(e.message);
            setOpenAlert(true);
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
                                {...field}
                            />
                        )}
                    />

                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        sx={{ mt: 2 }}
                    >
                        <Grid item lg={8} md={8} sm={12}>
                            <Link to="/profile/create">Don't have a profile? Create a new one</Link>
                        </Grid>
                        <Grid item lg={4} md={4} sm={12} sx={{ textAlign: "right" }}>
                            <Button
                                type='submit'
                                variant="contained"
                                startIcon={<LoginOutlined />}
                            >
                                Login
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
        </>
    )
}

export default Login