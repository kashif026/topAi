
import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

export default function Layout() {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                backgroundColor: '#fafafa',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <Box
                component="main"
                sx={{
                    flex: 1,
                    width: '100%',
                    py: { xs: 3, md: 5 },
                }}
            >
                <Container
                    maxWidth="xl"
                    sx={{
                        px: {
                            xs: 2,
                            sm: 3,
                            md: 4,
                        },
                    }}
                >
                    <Outlet />
                </Container>
            </Box>

            {/* Footer */}
            <Box
                component="footer"
                sx={{
                    borderTop: '1px solid #e4e4e7',
                    py: 3,
                    px: 2,
                    textAlign: 'center',
                    backgroundColor: '#ffffff',
                    color: '#71717a',
                    fontSize: '14px',
                    fontWeight: 500,
                }}
            >
                © 2026 TopAI Clone. All rights reserved.
            </Box>
        </Box>
    );
}