import { Box, Typography, Chip } from "@mui/material";

const categories = [
  "🤖 AI Assistant",
  "🖼️ Image generation",
  "🎬 Video generation",
  "🤖🧱 Chatbot builder",
  "💻 Code assistant",
  "📘 Study assistant",
  "✏️ Writing assistant",
  "📝 Content creation",
  "🎨 All categories",
  "🏆 Top 100 AIs",
];

const TopCategories = () => {
  return (
    <Box sx={{ mt: 6 }}>
      {/* Title */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        {/* Green left bar */}
        <Box
          sx={{
            width: "4px",
            height: "24px",
            backgroundColor: "#16A34A",
            borderRadius: "4px",
          }}
        />

        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: 600,
            color: "#111827",
          }}
        >
          Top AI Tools Categories
        </Typography>
      </Box>

      {/* Subtitle */}
      <Typography
        sx={{
          mt: 1,
          color: "#6B7280",
          fontSize: "14px",
        }}
      >
        Check out the most popular AI tools categories
      </Typography>

      {/* Chips */}
      <Box
        sx={{
          mt: 3,
          display: "flex",
          flexWrap: "wrap",
          gap: 1.5,
        }}
      >
        {categories.map((item, index) => (
          <Chip
            key={index}
            label={item}
            sx={{
              borderRadius: "999px",
              px: 1,
              py: 1,
              fontSize: "14px",
              backgroundColor: "#F3F4F6",
              border: "1px solid #E5E7EB",
              cursor: "pointer",

              "&:hover": {
                backgroundColor: "#E5E7EB",
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default TopCategories;