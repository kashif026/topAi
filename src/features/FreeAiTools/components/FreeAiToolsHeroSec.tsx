import { Box, Typography } from "@mui/material";
import TopAISearch from "../../../components/common/TopAISearch";

export default function FreeAiToolHeroSec() {
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
        2752+ Free Ai Tools
      </Typography>

      {/* STATS */}
      <Typography
        sx={{
          fontSize: { xs: 11, sm: 13, md: 13 },
          color: "#475569",
          mb: { xs: 3, md: 4 },
        }}
      >
        The largest list of free AI tools —— updated daily
      </Typography>

      {/* SEARCH (FIXED) */}
      <TopAISearch />

      <Typography
        sx={{
          mt: 3,
          fontSize: { xs: 11, sm: 13, md: 13 },
          color: "#475569",
          position: "relative",
          zIndex: 1,
          top: -20,
        }}
      >
        Tip: include free in your search — e.g. free image generator, free
        writing assistant
      </Typography>
    </Box>
  );
}
