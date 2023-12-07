import React from 'react';
import { PermIdentityOutlined } from "@mui/icons-material";
import {
    Container,
    CssBaseline,
    Box,
    Avatar,
    Typography,
    Grid
} from "@mui/material";
import searchData from '../../utils/search';
import { useParams } from 'react-router-dom';
import { ProfileDataType } from "../../types/profile";
import { MyTextField } from '../../components/Input';

const ViewProfile = () => {
    const { email } = useParams();
    let profile: (ProfileDataType | false) = searchData({ email });

    return (
        profile ?
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
                        <Typography variant="h5">{profile.fullName + ' Profile'}</Typography>
                        <Box sx={{ mt: 1 }}>
                            <Grid container spacing={2}>
                                
                                // Email
                                <Grid item xs={6} md={4}>
                                    <Typography>Email</Typography>
                                </Grid>
                                <Grid item xs={6} md={8}>
                                    <MyTextField
                                        value={profile.email}
                                        disabled
                                    />
                                </Grid>
                                
                                // Email
                                <Grid item xs={6} md={4}>
                                    <Typography>Email</Typography>
                                </Grid>
                                <Grid item xs={6} md={8}>
                                    <MyTextField
                                        value={profile.email}
                                        disabled
                                    />
                                </Grid>
                                
                                // Email
                                <Grid item xs={6} md={4}>
                                    <Typography>Email</Typography>
                                </Grid>
                                <Grid item xs={6} md={8}>
                                    <MyTextField
                                        value={profile.email}
                                        disabled
                                    />
                                </Grid>
                                
                                // Email
                                <Grid item xs={6} md={4}>
                                    <Typography>Email</Typography>
                                </Grid>
                                <Grid item xs={6} md={8}>
                                    <MyTextField
                                        value={profile.email}
                                        disabled
                                    />
                                </Grid>
                                
                                // Email
                                <Grid item xs={6} md={4}>
                                    <Typography>Email</Typography>
                                </Grid>
                                <Grid item xs={6} md={8}>
                                    <MyTextField
                                        value={profile.email}
                                        disabled
                                    />
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </>
            : <></>
    )
}

export default ViewProfile