import { Box, Typography } from "@mui/material";

const categories = [
  "For you 👀",
  "Explore AI tools 🔧",
  "All categories 🎨",
  "Free AI tools 💸",
  "AI use cases 🤖",
  "Trending 🔥",
  "Writing ✍️",
  "Image Generation 🎨",
  "Video Editing 🎬",
  "Productivity ⚡",
  "Marketing 📈",
  "Coding 💻",
  "For you 👀",
  "Explore AI tools 🔧",
  "All categories 🎨",
  "Free AI tools 💸",
  "AI use cases 🤖",
  "Trending 🔥",
  "Writing ✍️",
  "Image Generation 🎨",
  "Video Editing 🎬",
  "Productivity ⚡",
  "Marketing 📈",
  "Coding 💻",
];

function PopularToolsCategory() {
  return (
    <Box
      sx={{
        mt: { xs: 4, md: 6 },
        mb: { xs: 4, md: 6 },
        width: "100%",
      }}
    >
      {/* Heading */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.2,
          mb: { xs: 2, md: 3 },
        }}
      >
        <Box
          sx={{
            width: "5px",
            height: { xs: "18px", sm: "22px" },
            bgcolor: "#22c55e",
            borderRadius: "20px",
            flexShrink: 0,
          }}
        />

        <Typography
          component="h2"
          sx={{
            fontWeight: 700,
            fontSize: {
              xs: "1rem",
              sm: "1.25rem",
              md: "1.5rem",
            },
            lineHeight: 1.2,
            color: "#0f172a",
          }}
        >
          Popular tools categories
        </Typography>
      </Box>

      {/* Categories */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1.2,
        }}
      >
        {categories.map((item, idx) => (
          <Box
            key={idx}
            sx={{
              flex: "1 0 auto",
              px: { xs: 1.8, sm: 2.2 },
              py: { xs: 0.8, sm: 1 },
              borderRadius: "999px",
              border: "1px solid #e2e8f0",
              bgcolor: "#f8fafc",
              color: "#334155",
              fontSize: {
                xs: "0.75rem",
                sm: "0.82rem",
              },
              fontWeight: 500,
              cursor: "pointer",
              whiteSpace: "nowrap",
              transition: "all 0.25s ease",
              userSelect: "none",
              

              "&:hover": {
                bgcolor: "#ffffff",
                borderColor: "#2563eb",
                color: "#2563eb",
                transform: "translateY(-2px)",
                boxShadow: "0 4px 12px rgba(37,99,235,0.12)",
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

export default PopularToolsCategory;