import React, { useState } from "react";
import {
    Box,
    Typography,
    TextField,
    Button,
    Chip,

    Stack,
    alpha,
} from "@mui/material";


const TRENDING_TAGS = [
    "ChatGPT",
    "Image Generation",
    "Coding",
    "Writing",
    "Productivity",
    "Video",
    "Design",
    "Marketing",
];

const STATS = [
    { value: "3,576+", label: "AI Tools" },
    { value: "50+", label: "Categories" },
    { value: "1M+", label: "Monthly Users" },
];

const HeroSection: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = () => {
        if (searchQuery.trim()) {
            console.log("Searching for:", searchQuery);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") handleSearch();
    };

    const handleTagClick = (tag: string) => {
        setSearchQuery(tag);
    };

    return (
        <Box
            sx={{
                background:
                    "linear-gradient(135deg, #0f0f1a 0%, #1a1030 40%, #0d1a2e 100%)",
                minHeight: "100vh",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
                py: { xs: 10, md: 12 },
                boxSizing: "border-box",
            }}
        >
            {/* Background glow blobs */}
            <Box
                sx={{
                    position: "absolute",
                    top: "10%",
                    left: "5%",
                    width: 400,
                    height: 400,
                    borderRadius: "50%",
                    background:
                        "radial-gradient(circle, rgba(120,60,220,0.18) 0%, transparent 70%)",
                    pointerEvents: "none",
                }}
            />
            <Box
                sx={{
                    position: "absolute",
                    bottom: "10%",
                    right: "5%",
                    width: 350,
                    height: 350,
                    borderRadius: "50%",
                    background:
                        "radial-gradient(circle, rgba(30,120,255,0.15) 0%, transparent 70%)",
                    pointerEvents: "none",
                }}
            />

            <Box
                sx={{
                    position: "relative",
                    zIndex: 1,
                    width: "100%",
                    maxWidth: 800,
                    mx: "auto",
                    px: { xs: 3, sm: 4, md: 6 },
                    boxSizing: "border-box",
                }}
            >
                <Stack spacing={5} sx={{ alignItems: 'center,', textAlign: "center", width: '100%' }}>
                    {/* Badge */}
                    <Chip
                        label="🔥 Discover the Best AI Tools"
                        sx={{
                            background: alpha("#7c3aed", 0.2),
                            border: `1px solid ${alpha("#7c3aed", 0.5)}`,
                            color: "#c4b5fd",
                            fontWeight: 600,
                            fontSize: "0.8rem",
                            px: 1,
                            height: 32,
                        }}
                    />

                    {/* Headline */}
                    <Box>
                        <Typography
                            variant="h1"
                            sx={{
                                fontSize: { xs: "2.4rem", sm: "3.2rem", md: "4rem" },
                                fontWeight: 800,
                                lineHeight: 1.15,
                                color: "#ffffff",
                                mb: 2,
                                letterSpacing: "-0.02em",
                            }}
                        >
                            Find the Best{" "}
                            <Box
                                component="span"
                                sx={{
                                    background:
                                        "linear-gradient(90deg, #a855f7 0%, #3b82f6 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}
                            >
                                AI Tools
                            </Box>{" "}
                            for Every Task
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                color: alpha("#fff", 0.55),
                                fontWeight: 400,
                                fontSize: { xs: "1rem", md: "1.15rem" },
                                maxWidth: 560,
                                mx: "auto",
                                lineHeight: 1.7,
                            }}
                        >
                            Explore our curated directory of 3,500+ AI tools across 50+
                            categories. Find exactly what you need to boost your productivity.
                        </Typography>
                    </Box>

                    {/* Search bar */}
                    <Box sx={{ width: "100%", maxWidth: 640, mx: "auto" }}>
                        <Box
                            sx={{
                                display: "flex",
                                gap: 0,
                                background: alpha("#fff", 0.07),
                                border: `1px solid ${alpha("#fff", 0.12)}`,
                                borderRadius: "14px",
                                p: "6px",
                                backdropFilter: "blur(12px)",
                                "&:focus-within": {
                                    border: `1px solid ${alpha("#7c3aed", 0.7)}`,
                                    boxShadow: `0 0 0 3px ${alpha("#7c3aed", 0.15)}`,
                                },
                                transition: "all 0.2s ease",
                            }}
                        >
                            <TextField
                                fullWidth
                                placeholder="Search AI tools... e.g. ChatGPT, Midjourney"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyDown={handleKeyDown}
                                variant="standard"
                            // InputProps={{
                            //     startAdornment: (
                            //         <InputAdornment position="start">
                            //             <SearchIcon
                            //                 sx={{ color: alpha("#fff", 0.4), ml: 1, fontSize: 22 }}
                            //             />
                            //         </InputAdornment>
                            //     ),
                            //     disableUnderline: true,
                            //     sx: {
                            //         color: "#fff",
                            //         fontSize: "1rem",
                            //         px: 1,
                            //         py: 0.5,
                            //         "& input::placeholder": {
                            //             color: alpha("#fff", 0.35),
                            //             opacity: 1,
                            //         },
                            //     },
                            // }}
                            />
                            <Button
                                onClick={handleSearch}
                                variant="contained"
                                sx={{
                                    background:
                                        "linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)",
                                    color: "#fff",
                                    fontWeight: 700,
                                    borderRadius: "10px",
                                    px: 3,
                                    py: 1.2,
                                    whiteSpace: "nowrap",
                                    textTransform: "none",
                                    fontSize: "0.95rem",
                                    flexShrink: 0,
                                    "&:hover": {
                                        background:
                                            "linear-gradient(135deg, #6d28d9 0%, #4338ca 100%)",
                                    },
                                    boxShadow: "none",
                                }}
                            >
                                Search
                            </Button>
                        </Box>
                    </Box>

                    {/* Trending tags */}
                    <Box>
                        <Typography
                            variant="body2"
                            sx={{
                                color: alpha("#fff", 0.4),
                                mb: 1.5,
                                fontSize: "0.8rem",
                                textTransform: "uppercase",
                                letterSpacing: "0.08em",
                                fontWeight: 600,
                            }}
                        >
                            Trending
                        </Typography>
                        <Stack
                            direction="row"
                            spacing={1}

                            sx={{ gap: 1, flexWrap: "wrap", justifyContent: "center" }}
                        >
                            {TRENDING_TAGS.map((tag) => (
                                <Chip
                                    key={tag}
                                    label={tag}
                                    onClick={() => handleTagClick(tag)}
                                    size="small"
                                    sx={{
                                        background: alpha("#fff", 0.06),
                                        border: `1px solid ${alpha("#fff", 0.1)}`,
                                        color: alpha("#fff", 0.65),
                                        fontSize: "0.8rem",
                                        fontWeight: 500,
                                        cursor: "pointer",
                                        "&:hover": {
                                            background: alpha("#7c3aed", 0.25),
                                            border: `1px solid ${alpha("#7c3aed", 0.5)}`,
                                            color: "#c4b5fd",
                                        },
                                        transition: "all 0.18s ease",
                                    }}
                                />
                            ))}
                        </Stack>
                    </Box>

                    {/* Stats */}
                    <Stack
                        direction={{ xs: "column", sm: "row" }}
                        spacing={{ xs: 3, sm: 6 }}

                        sx={{ alignItems: "center" }}
                        divider={
                            <Box
                                sx={{
                                    width: { xs: 40, sm: 1 },
                                    height: { xs: 1, sm: 36 },
                                    background: alpha("#fff", 0.12),
                                    display: { xs: "none", sm: "block" },
                                }}
                            />
                        }
                    >
                        {STATS.map((stat) => (
                            <Box key={stat.label} sx={{ textAlign: 'center' }} >
                                <Typography
                                    sx={{
                                        fontSize: "1.8rem",
                                        fontWeight: 800,
                                        color: "#fff",
                                        lineHeight: 1,
                                        mb: 0.4,
                                        background:
                                            "linear-gradient(90deg, #a78bfa 0%, #60a5fa 100%)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        backgroundClip: "text",
                                    }}
                                >
                                    {stat.value}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: "0.82rem",
                                        color: alpha("#fff", 0.45),
                                        fontWeight: 500,
                                        textTransform: "uppercase",
                                        letterSpacing: "0.06em",
                                    }}
                                >
                                    {stat.label}
                                </Typography>
                            </Box>
                        ))}
                    </Stack>
                </Stack>
            </Box>
        </Box>
    );
};

export default HeroSection;