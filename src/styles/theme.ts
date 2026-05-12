import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#6366F1", // Indigo (modern SaaS feel)
        },
        secondary: {
            main: "#10B981", // Green accent
        },
        background: {
            default: "#F9FAFB",
            paper: "#FFFFFF",
        },
    },

    typography: {
        fontFamily: "Inter, sans-serif",
        h1: { fontWeight: 700 },
        h2: { fontWeight: 600 },
        h3: { fontWeight: 600 },
    },

    shape: {
        borderRadius: 12,
    },
});

export default theme;