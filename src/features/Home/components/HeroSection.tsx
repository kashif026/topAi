import {
  Box,
  Typography,
  Paper,
  InputBase,
  Stack,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function HeroSection() {
  return (
    <Box
      sx={{
        bgcolor: "#ffffff",
        textAlign: "center",
        px: { xs: 2, sm: 3, md: 4 },
        pt: { xs: 5, sm: 7, md: 9 },
        pb: { xs: 4, sm: 5, md: 6 },
      }}
    >
      {/* HEADING */}
      <Typography
        sx={{
          fontSize: { xs: 26, sm: 38, md: 52 },
          fontWeight: 800,
          lineHeight: 1.15,
          color: "#0f172a",
          mb: 2,
        }}
      >
        Find the Exact AI Tool You Need,{" "}
        <Box component="span" sx={{ color: "#16a34a" }}>
          Instantly.
        </Box>
      </Typography>

      {/* STATS */}
      <Typography
        sx={{
          fontSize: { xs: 12, sm: 14 },
          color: "#475569",
          mb: { xs: 3, md: 4 },
        }}
      >
        <Box component="span" sx={{ color: "#16a34a", fontWeight: 700 }}>
          22554+
        </Box>{" "}
        AI Tools &nbsp; • &nbsp;
        <Box component="span" sx={{ color: "#16a34a", fontWeight: 700 }}>
          120+
        </Box>{" "}
        Categories &nbsp; • &nbsp;
        <Box component="span" sx={{ color: "#16a34a", fontWeight: 700 }}>
          Daily
        </Box>{" "}
        Updates
      </Typography>

      {/* SEARCH */}
      <Box
        sx={{
          width: "100%",
          maxWidth: 780,
          mx: "auto",
          mb: { xs: 3, md: 4 },
        }}
      >
        <Paper
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: { xs: "column", sm: "row" },
            gap: 1,
            borderRadius: 999,
            border: "2px solid #0f172a",
            px: { xs: 1.5, sm: 2 },
            py: { xs: 1, sm: 1.2 },
          }}
        >
          <SearchIcon sx={{ color: "#94a3b8" }} />

          <InputBase
            placeholder="What do you want to create today?"
            sx={{
              flex: 1,
              width: "100%",
              fontSize: { xs: 14, sm: 16 },
              color: "#0f172a",
              textAlign: { xs: "center", sm: "left" },
            }}
          />

          <Button
            sx={{
              width: { xs: "100%", sm: "auto" },
              bgcolor: "#16a34a",
              color: "#fff",
              borderRadius: 999,
              px: 2.5,
              py: 1,
              textTransform: "none",
              fontWeight: 600,
              whiteSpace: "nowrap",
              "&:hover": { bgcolor: "#15803d" },
            }}
          >
            Enter = AI Search
          </Button>
        </Paper>
      </Box>

      {/* PILLS (CENTERED FIXED) */}
      <Stack
        width="100%"
        spacing={1}
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        gap={1}
        sx={{
          maxWidth: 900,
          mx: "auto",
          
        }}
      >
        {[
          "For you 👀",
          "Explore AI tools 🔧",
          "All categories 🎨",
          "Free AI tools 💸",
          "AI use cases 🤖",
          "AI use cases 🤖",
          "AI use cases 🤖",
        ].map((item) => (
          <Box
            key={item}
            sx={{
              padding: "10px",
              borderRadius: 999,
              border: "1px solid #e2e8f0",
              fontSize: 13,
              color: "#0f172a",
              cursor: "pointer",
              transition: "0.2s",
              "&:hover": {
                bgcolor: "#f1f5f9",
              },
            }}
          >
            {item}
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
