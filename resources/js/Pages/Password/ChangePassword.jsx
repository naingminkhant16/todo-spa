import { Box, Button, Checkbox, Container, Divider, FormControlLabel, TextField, Typography } from "@mui/material";
import Layout from "../../Layout/Layout";
import { useRef, useState } from "react";
import { router } from "@inertiajs/react";

export default function ChangePassword({ errors }) {
    const oldPassword = useRef('');
    const newPassword = useRef('');
    const confirmPassword = useRef('');
    const [showPassword, setShowPassword] = useState(false);

    const handleChangePassword = () => {
        const values = {
            oldPassword: oldPassword.current.value,
            newPassword: newPassword.current.value,
            confirmPassword: confirmPassword.current.value
        }

        router.post('/change-password', values, {
            onSuccess: () => {

            },
            onError: (errors) => {

            }
        });
    }

    return (
        <Layout>
            <Container maxWidth="xs">
                <Divider sx={{ mt: 1 }}>Change Password</Divider>
                <Box sx={{ mt: 3 }}>
                    <TextField type={showPassword ? 'password' : 'text'} label="Old Password" variant="outlined" fullWidth inputRef={oldPassword} />
                </Box>
                <Box sx={{ mt: 1 }}>
                    <TextField type={showPassword ? 'password' : 'text'} label="New Password" variant="outlined" fullWidth inputRef={newPassword} />
                </Box>
                <Box sx={{ mt: 1 }}>
                    <TextField type={showPassword ? 'password' : 'text'} label="Confirm New Password" variant="outlined" fullWidth inputRef={confirmPassword} />
                </Box>
                <Box sx={{ mt: 1, ml: 1 }}>
                    <FormControlLabel control={
                        <Checkbox defaultChecked={showPassword} onChange={() => setShowPassword(!showPassword)} />
                    } label="Show password" />
                </Box>
                <Button variant="contained" onClick={handleChangePassword} fullWidth>Change</Button>
                <Button sx={{ mt: 1 }} color="error" variant="outlined" onClick={() => router.get('/')} fullWidth>Cancel</Button>
            </Container>
        </Layout>
    );
}
