import { Box, Typography } from "@mui/material";
import TopAISearch from "../../../components/common/TopAISearch";

export default function AllToolsHeroSection() {
  return (
    <Box
      sx={{
        bgcolor: "#ffffff",
        textAlign: "center",
        px: { xs: 2, sm: 3, md: 4 },
        pt: { xs: 6, sm: 8, md: 10 },
        pb: { xs: 5, sm: 6, md: 7 },
      }}
    >
      {/* HEADING */}
      <Typography
        sx={{
          fontSize: { xs: 28, sm: 40, md: 42, lg: 45 },
          fontWeight: 600,
          lineHeight: 1.2,
          color: "#0f172a",
          mb: 2,
          maxWidth: 900,
          mx: "auto",
        }}
      >
        All Ai Tools
      </Typography>

      {/* STATS */}
      <Typography
        sx={{
          fontSize: { xs: 11, sm: 13, md: 13 },
          color: "#475569",
          mb: { xs: 3, md: 4 },
        }}
      >
        Explore the full list of AI sites in one place, updated daily
      </Typography>

      {/* SEARCH (FIXED) */}
      <TopAISearch />

      {/* PILLS (FIXED) */}
      <Box
        sx={{
          maxWidth: 900,
          mx: "auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 1,
        }}
      >
        {[
          "For you 👀",
          "Explore AI tools 🔧",
          "All categories 🎨",
          "Free AI tools 💸",
          "AI use cases 🤖",
          "Trending 🔥",
        ].map((item) => (
          <Box
            key={item}
            sx={{
              px: 2,
              py: 1,
              borderRadius: "999px",
              border: "1px solid #e2e8f0",
              fontSize: { xs: 12, sm: 13 },
              cursor: "pointer",
              whiteSpace: "nowrap",
              "&:hover": {
                bgcolor: "#f1f5f9",
              },
            }}
          >
            {item}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
