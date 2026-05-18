import { Box, Typography } from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { COLORS } from "../../constants/color";

interface ToolsCardHeaderProps {
  title: string;
  actionText?: string;
}

const ToolsCardHeader: React.FC<ToolsCardHeaderProps> = ({
  title,
  actionText = "Popular AI",
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: COLORS.green.light,
        borderRadius: "12px",
        px: {
          xs: 1.5,
          sm: 2,
          md: 2.5,
        },
        py: {
          xs: 1.2,
          sm: 1.5,
        },
        border: "1px solid #E5E7EB",
        position: "relative",
        overflow: "hidden",
        minHeight: {
          xs: "40px",
          sm: "40px",
        },

        // Left green border
        "&::before": {
          content: '""',
          position: "absolute",
          left: {
            xs: 6,
            sm: 10,
          },
          top: 15,
          bottom: 15,
          width: {
            xs: "5px",
            sm: "7px",
          },
          borderRadius: "7px",
          backgroundColor: "#16A34A",
        },
      }}
    >
      {/* Left Side */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: {
            xs: 1,
            sm: 1.5,
          },
          pl: {
            xs: 1,
            sm: 1.5,
          },
          flex: 1,
          minWidth: 0,
        }}
      >
        <EmojiEventsIcon
          sx={{
            color: "#F59E0B",
            fontSize: {
              xs: 20,
              sm: 24,
            },
            flexShrink: 0,
          }}
        />

        <Typography
          sx={{
            fontWeight: 600,
            fontSize: {
              xs: "15px",
              sm: "17px",
              md: "18px",
            },
            color: "#111827",
            lineHeight: 1.3,
            wordBreak: "break-word",
          }}
        >
          {title}
        </Typography>
      </Box>

      {/* Right Side */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 0.5,
          cursor: "pointer",
          color: "#16A34A",
          fontWeight: 500,
          flexShrink: 0,
          ml: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: "12px",
              sm: "14px",
            },
            whiteSpace: "nowrap",
          }}
        >
          {actionText}
        </Typography>

        <ArrowForwardIosIcon
          sx={{
            fontSize: {
              xs: 10,
              sm: 12,
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default ToolsCardHeader;