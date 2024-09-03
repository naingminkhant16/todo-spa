import React from 'react';
import {
    Drawer, List,
    ListItem, ListItemIcon,
    ListItemText, Divider,
    Avatar, Typography,
    Box, ListItemButton
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import TaskIcon from '@mui/icons-material/Assignment';
import DoneIcon from '@mui/icons-material/Done';
import LockIcon from '@mui/icons-material/Lock';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { purple, red } from '@mui/material/colors';
import { router, usePage } from '@inertiajs/react';

export default function MyDrawer({ openDrawer, setOpenDrawer, mode }) {
    const props = usePage().props

    const logout = () => {
        router.post('/logout');
    }

    const handleNavigation = (url) => {
        router.get(url)
        setOpenDrawer(false)
    }

    return (
        <>
            <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}   >
                <Box role="presentation">
                    {/* User Profile Section */}
                    <Box sx={{ padding: 3, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Avatar sx={{ width: 80, height: 80, marginBottom: 2 }} />
                        <Typography sx={{ color: mode == 'dark' ? purple[900] : '' }} variant='h6'>{props.auth.name}</Typography>
                        <Typography sx={{ color: mode == 'dark' ? purple[900] : '' }} variant='caption'>{props.auth.email}</Typography>
                    </Box>

                    <Divider />

                    {/* Tasks Section */}
                    <List>
                        <ListItemButton onClick={() => handleNavigation('/')}>
                            <ListItem>
                                <ListItemIcon>
                                    <TaskIcon />
                                </ListItemIcon>
                                <ListItemText primary="My Tasks" />
                            </ListItem>
                        </ListItemButton>

                        <ListItemButton onClick={() => handleNavigation('/done-tasks')}>
                            <ListItem>
                                <ListItemIcon>
                                    <DoneIcon />
                                </ListItemIcon>
                                <ListItemText primary="Done Tasks" />
                            </ListItem>
                        </ListItemButton>
                    </List>

                    <Divider />

                    {/* Profile Section */}
                    <List>
                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <PersonIcon />
                                </ListItemIcon>
                                <ListItemText primary="Profile" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem >
                            <ListItemButton onClick={() => handleNavigation('/change-password')}>
                                <ListItemIcon>
                                    <LockIcon />
                                </ListItemIcon>
                                <ListItemText primary="Change Password" />
                            </ListItemButton>
                        </ListItem>
                    </List>

                    <Divider />

                    {/* Logout Button */}
                    <List>
                        <ListItem>
                            <ListItemButton onClick={logout}>
                                <ListItemIcon sx={{ color: red[500] }}>
                                    <ExitToAppIcon />
                                </ListItemIcon>
                                <ListItemText sx={{ color: red[500] }} primary="Logout" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Drawer >
        </>
    )
}