import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import React, { createContext, useContext, useState } from 'react';
import MyDrawer from '../Components/MyDrawer';
import Navbar from '../Components/Navbar';

const AppContext = createContext();
export const useApp = () => useContext(AppContext);

export default function Layout({ children }) {
    const [openDrawer, setOpenDrawer] = useState(false);
    const [mode, setMode] = useState('dark');
    const theme = createTheme({
        palette: {
            mode,
            primary: {
                light: '#7986cb',
                main: '#3f51b5',
                dark: '#303f9f',
                contrastText: '#fff',
            },
            secondary: {
                light: '#9fa8da',
                main: '#5c6bc0',
                dark: '#3949ab',
                contrastText: '#000',
            },
        }
    })
    return (
        <AppContext.Provider value={{ openDrawer, setOpenDrawer, mode, setMode }}>
            <ThemeProvider theme={theme}>
                <Navbar />
                {children}
                <MyDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
                <CssBaseline />
            </ThemeProvider>
        </AppContext.Provider >
    );
}


