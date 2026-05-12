import { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Box,
    Typography,
    Button,
    IconButton,

    Drawer,
    List,
    ListItemButton,
    ListItemText,
    Divider,
    useMediaQuery,
    Avatar,

} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { Menu } from '@mui/icons-material';

const Search = styled('div')(() => ({
    position: 'relative',
    borderRadius: 14,
    backgroundColor: '#f4f4f5',
    '&:hover': {
        backgroundColor: '#ececec',
    },
    width: '100%',
    maxWidth: 420,
    border: '1px solid #e4e4e7',
    transition: 'all 0.2s ease',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#71717a',
}));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     color: '#18181b',
//     width: '100%',
//     '& .MuiInputBase-input': {
//         padding: theme.spacing(1.4, 1.4, 1.4, 0),
//         paddingLeft: `calc(1em + ${theme.spacing(5)})`,
//         transition: theme.transitions.create('width'),
//         fontSize: '14px',
//         fontWeight: 500,
//     },
// }));

const navItems = [
    'Tools',
    'Categories',
    'Top 100',
    'Submit Tool',
    'Community',
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box sx={{ width: 280, pt: 2 }}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    px: 3,
                    pb: 2,
                }}
            >
                <AutoAwesomeIcon sx={{ color: '#6d28d9', fontSize: 28 }} />
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 800,
                        letterSpacing: '-0.5px',
                    }}
                >
                    TopAI
                </Typography>
            </Box>

            <Divider />

            <List>
                {navItems.map((item) => (
                    <ListItemButton key={item}>
                        <ListItemText
                            primary={item}
                        // primaryTypographyProps={{
                        //     fontSize: 15,
                        //     fontWeight: 600,
                        // }}
                        />
                    </ListItemButton>
                ))}
            </List>

            <Box sx={{ px: 2, pt: 2 }}>
                <Button
                    fullWidth
                    variant="contained"
                    sx={{
                        borderRadius: 3,
                        textTransform: 'none',
                        background: 'linear-gradient(135deg, #7c3aed, #9333ea)',
                        py: 1.2,
                        fontWeight: 700,
                        boxShadow: 'none',
                    }}
                >
                    Sign In
                </Button>
            </Box>
        </Box>
    );

    return (
        <>
            <AppBar
                position="sticky"
                elevation={0}
                sx={{
                    backgroundColor: 'rgba(255,255,255,0.88)',
                    backdropFilter: 'blur(12px)',
                    borderBottom: '1px solid #e4e4e7',
                    color: '#18181b',
                }}
            >
                <Toolbar
                    sx={{
                        minHeight: '74px !important',
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: 2,
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 4,
                            flex: 1,
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                                cursor: 'pointer',
                            }}
                        >
                            <AutoAwesomeIcon
                                sx={{
                                    color: '#7c3aed',
                                    fontSize: 30,
                                }}
                            />

                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 900,
                                    letterSpacing: '-0.8px',
                                    fontSize: '1.35rem',
                                }}
                            >
                                TopAI
                            </Typography>
                        </Box>

                        {!isMobile && (
                            <Search>
                                <SearchIconWrapper>
                                    <SearchIcon sx={{ fontSize: 20 }} />
                                </SearchIconWrapper>

                                {/* <StyledInputBase
                                    placeholder="Search AI tools, categories, workflows..."
                                    inputProps={{ 'aria-label': 'search' }}
                                /> */}
                            </Search>
                        )}
                    </Box>

                    {!isMobile ? (
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 0.5,
                            }}
                        >
                            {navItems.map((item) => (
                                <Button
                                    key={item}
                                    endIcon={<KeyboardArrowDownIcon sx={{ fontSize: 18 }} />}
                                    sx={{
                                        color: '#18181b',
                                        textTransform: 'none',
                                        fontWeight: 600,
                                        fontSize: '14px',
                                        borderRadius: 3,
                                        px: 1.8,
                                        py: 1,
                                        '&:hover': {
                                            backgroundColor: '#f4f4f5',
                                        },
                                    }}
                                >
                                    {item}
                                </Button>
                            ))}

                            <Button
                                variant="contained"
                                sx={{
                                    textTransform: 'none',
                                    borderRadius: 3,
                                    px: 2.5,
                                    py: 1,
                                    ml: 1,
                                    fontWeight: 700,
                                    background: 'linear-gradient(135deg, #7c3aed, #9333ea)',
                                    boxShadow: 'none',
                                    '&:hover': {
                                        boxShadow: 'none',
                                        background: 'linear-gradient(135deg, #6d28d9, #7e22ce)',
                                    },
                                }}
                            >
                                Sign In
                            </Button>

                            <Avatar
                                sx={{
                                    width: 38,
                                    height: 38,
                                    bgcolor: '#18181b',
                                    fontSize: 14,
                                    fontWeight: 700,
                                    ml: 1,
                                }}
                            >
                                AI
                            </Avatar>
                        </Box>
                    ) : (
                        <IconButton onClick={handleDrawerToggle}>
                            <Menu />
                        </IconButton>
                    )}
                </Toolbar>
            </AppBar>

            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
            >
                {drawer}
            </Drawer>
        </>
    );
}
