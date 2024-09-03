import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { CssBaseline } from '@mui/material';
import { purple } from '@mui/material/colors';
import { router } from '@inertiajs/react';
import { useApp } from '../Layout/Layout';
import Brightness6Icon from '@mui/icons-material/Brightness6';

export default function Navbar() {
    const { openDrawer, setOpenDrawer } = useApp();
    const { mode, setMode } = useApp();
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{}}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={() => setOpenDrawer(!openDrawer)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Todos
                        </Typography>
                        <Button onClick={() => mode == 'dark' ? setMode('light') : setMode('dark')}><Brightness6Icon sx={{ color: 'white' }} /></Button>
                    </Toolbar>
                </AppBar>
            </Box >
            <CssBaseline />
        </>
    )
}