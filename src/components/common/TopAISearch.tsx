import { Box, InputBase, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const TopAISearch = () => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "900px",
        mx: "auto",

        display: "flex",
        alignItems: "center",

        border: "2px solid #18181B",
        borderRadius: "999px",

        px: {
          xs: 1.2,
          sm: 2,
        },

        py: {
          xs: 0.8,
          sm: 1,
        },

        backgroundColor: "#F9FAFB",

        gap: 1,

        // IMPORTANT
        flexWrap: "nowrap",
        my: { xs: 3, sm: 4 },
      }}
    >
      {/* Search Icon */}
      <SearchIcon
        sx={{
          color: "#9CA3AF",
          fontSize: {
            xs: 20,
            sm: 22,
          },
          flexShrink: 0,
        }}
      />

      {/* Input */}
      <InputBase
        placeholder="What do you want to create today?"
        sx={{
          flex: 1,
          minWidth: 0,

          fontSize: {
            xs: 13,
            sm: 15,
            md: 16,
          },

          color: "#18181B",

          "& input": {
            py: 0.5,
          },

          "& input::placeholder": {
            color: "#6B7280",
            opacity: 1,
          },
        }}
      />

      {/* Button */}
      <Button
        variant="contained"
        sx={{
          textTransform: "none",
          borderRadius: "10px",

          px: {
            xs: 1.5,
            sm: 2.5,
          },

          py: {
            xs: 0.7,
            sm: 0.9,
          },

          minWidth: "fit-content",

          fontSize: {
            xs: 12,
            sm: 14,
          },

          whiteSpace: "nowrap",

          flexShrink: 0,

          backgroundColor: "#4DA167",

          "&:hover": {
            backgroundColor: "#3f8f59",
          },
        }}
      >
        Enter
      </Button>
    </Box>
  );
};

export default TopAISearch;