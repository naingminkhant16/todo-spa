import { router, usePage } from "@inertiajs/react";
import { Alert, Box, Button, Card, CardContent, Container, CssBaseline, Divider, TextField, Typography } from "@mui/material";
import { useRef } from "react";


export default function Register() {
    const name = useRef("");
    const email = useRef("");
    const password = useRef("");
    const password_confirmation = useRef("");
    const { errors } = usePage().props;

    const register = () => {
        const values = {
            name: name.current.value,
            email: email.current.value,
            password: password.current.value,
            password_confirmation: password_confirmation.current.value
        }
        router.post("/register", values);
    }
    const clear = () => {
        name.current.value = "";
        email.current.value = "";
        password.current.value = "";
        password_confirmation.current.value = "";
    }
    return (
        <Box>
            <Container maxWidth="xs" sx={{ mt: 5 }}>
                <Card sx={{ py: 2, px: 3 }}>
                    <CardContent>
                        <Typography variant="h5" sx={{ textAlign: "center", textTransform: "uppercase" }}>Register</Typography>
                        <Divider sx={{ mt: 2, mb: 1 }} />

                        <TextField label="Name" variant="standard" fullWidth inputRef={name} />
                        {errors.name && <Alert sx={{ mt: 1 }} severity="error">{errors.name}</Alert>}

                        <TextField sx={{ mt: 3 }} label="Email" variant="standard" type="email" inputRef={email} fullWidth />
                        {errors.email && <Alert sx={{ mt: 1 }} severity="error">{errors.email}</Alert>}

                        <TextField sx={{ mt: 3 }} label="Password" variant="standard" type="password" inputRef={password} fullWidth />
                        {errors.password && <Alert sx={{ mt: 1 }} severity="error">{errors.password}</Alert>}

                        <TextField sx={{ mt: 3 }} label="Confirm Password" variant="standard" type="password" inputRef={password_confirmation} fullWidth />
                        {errors.password_confirmation && <Alert sx={{ mt: 1 }} severity="error">{errors.password_confirmation}</Alert>}

                        <Box sx={{ textAlign: "center" }}>
                            <Button sx={{ mt: 3, mr: 1 }} variant="outlined" onClick={clear}>Clear</Button>
                            <Button sx={{ mt: 3 }} variant="contained" onClick={register}>Register</Button>
                        </Box>

                        <Typography variant="caption" sx={{ textAlign: "center", display: "block", mt: 1 }}>
                            Already have account?
                            <Typography variant="caption"
                                sx={{ textDecoration: "underline", cursor: "pointer" }}
                                onClick={() => router.get('/login')}>
                                Login</Typography>
                        </Typography>
                    </CardContent>
                </Card>
            </Container>
            <CssBaseline />
        </Box >
    )
}
