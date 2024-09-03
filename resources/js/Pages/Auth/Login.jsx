import { router, usePage } from "@inertiajs/react";
import { Alert, Box, Button, Card, CardContent, Container, Divider, TextField, Typography } from "@mui/material";
import { useRef } from "react";

export default function Login() {
    const email = useRef("");
    const password = useRef("");
    const { errors } = usePage().props;
    const clear = () => {
        email.current.value = "";
        password.current.value = "";
    }

    const login = () => {
        const values = {
            email: email.current.value,
            password: password.current.value
        }

        router.post('/login', values);
    }

    return (
        <Box>
            <Container maxWidth="xs" sx={{ mt: 5 }}>
                <Card sx={{ py: 2, px: 3 }}>
                    <CardContent>
                        <Typography variant="h5" sx={{ textAlign: "center", textTransform: "uppercase" }}>Login</Typography>
                        <Divider sx={{ mt: 2, mb: 1 }} />

                        <TextField sx={{ mt: 3 }} label="Email" variant="standard" type="email" inputRef={email} fullWidth />
                        {errors.email && <Alert sx={{ mt: 1 }} severity="error">{errors.email}</Alert>}

                        <TextField sx={{ mt: 3 }} label="Password" variant="standard" type="password" inputRef={password} fullWidth />
                        {errors.password && <Alert sx={{ mt: 1 }} severity="error">{errors.password}</Alert>}

                        <Box sx={{ textAlign: "center" }}>
                            <Button sx={{ mt: 3, mr: 1 }} variant="outlined" onClick={clear}>Clear</Button>
                            <Button sx={{ mt: 3 }} variant="contained" onClick={login}>Login</Button>
                        </Box>

                        <Typography variant="caption" sx={{ textAlign: "center", display: "block", mt: 1 }}>
                            Don't have account?
                            <Typography variant="caption"
                                sx={{ textDecoration: "underline", cursor: "pointer" }}
                                onClick={() => router.get('/register')}>
                                Register
                            </Typography>
                        </Typography>
                    </CardContent>
                </Card>
            </Container>

        </Box >
    )
}