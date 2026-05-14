import { Box, Typography, Paper, InputBase, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function HeroSection() {
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
          fontSize: { xs: 28, sm: 40, md: 52, lg: 60 },
          fontWeight: 800,
          lineHeight: 1.2,
          color: "#0f172a",
          mb: 2,
          maxWidth: 900,
          mx: "auto",
        }}
      >
        Find the Exact AI Tool You Need{" "}
        <Box component="span" sx={{ color: "#16a34a" }}>
          Instantly.
        </Box>
      </Typography>

      {/* STATS */}
      <Typography
        sx={{
          fontSize: { xs: 13, sm: 14, md: 15 },
          color: "#475569",
          mb: { xs: 3, md: 4 },
        }}
      >
        <Box component="span" sx={{ color: "#16a34a", fontWeight: 700 }}>
          22554+
        </Box>{" "}
        AI Tools •{" "}
        <Box component="span" sx={{ color: "#16a34a", fontWeight: 700 }}>
          120+
        </Box>{" "}
        Categories •{" "}
        <Box component="span" sx={{ color: "#16a34a", fontWeight: 700 }}>
          Daily
        </Box>{" "}
        Updates
      </Typography>

      {/* SEARCH (FIXED) */}
      <Box
        sx={{
          width: "100%",
          maxWidth: 720,
          mx: "auto",
          mb: { xs: 4, md: 5 },
        }}
      >
        <Paper
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: "999px",
            border: "2px solid #0f172a",
            overflow: "hidden",
            height: { xs: 48, sm: 56 },
          }}
        >
          {/* INPUT */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flex: 1,
              px: 2,
              minWidth: 0, // 👈 IMPORTANT (prevents overflow)
            }}
          >
            <SearchIcon sx={{ color: "#94a3b8", mr: 1 }} />

            <InputBase
              placeholder="What do you want to create today?"
              sx={{
                flex: 1,
                fontSize: { xs: 13, sm: 16 },
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            />
          </Box>

          {/* BUTTON */}
          <Button
            sx={{
              height: "100%",
              px: { xs: 2, sm: 3 },

              borderRadius: 0,
              bgcolor: "#16a34a",
              color: "#fff",
              fontWeight: 600,
              fontSize: { xs: 12, sm: 15 }, // 👈 smaller on mobile
              whiteSpace: "nowrap",
              flexShrink: 0, // 👈 prevents shrinking
              "&:hover": { bgcolor: "#15803d" },
            }}
          >
            AI Search
          </Button>
        </Paper>
      </Box>

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
          "New tools ✨",
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
