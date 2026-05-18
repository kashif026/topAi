import { Box, Typography, Chip, Stack } from "@mui/material";
import { COLORS } from "../../../constants/color";

const actions = [
  "🧠 AI Search",
  "🎯 Smart Filters",
  "🏆 Top 100 AI",
  "💸 AI Deals & LTDs",
  "📘 Tool Playbooks",
  "🗂️ All Categories",
];

const AboutTopAI = () => {
  return (
    <Box
      sx={{
        mt: { xs: 4, md: 6 },
        mb: { xs: 4, md: 6 },
        width: "100%",
      }}
    >
      {/* Title */}
      <Stack
        direction="row"
        spacing={1}
        sx={{ alignItems: "center", flexWrap: "wrap" }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: "20px",
              sm: "22px",
            },
            lineHeight: 1,
          }}
        >
          👋
        </Typography>

        <Typography
          sx={{
            fontSize: {
              xs: "20px",
              sm: "22px",
              md: "24px",
            },
            fontWeight: 600,
            color: "#111827",
            lineHeight: 1.3,
          }}
        >
          About TopAI.tools
        </Typography>
      </Stack>

      {/* Divider */}
      <Box
        sx={{
          height: "1px",
          backgroundColor: "#E5E7EB",
          mt: { xs: 1.5, md: 2 },
          width: "100%",
        }}
      />

      {/* Content Box */}
      <Box
        sx={{
          mt: { xs: 2, md: 2.5 },
          backgroundColor: COLORS.blue.light,
          borderRadius: {
            xs: "10px",
            sm: "12px",
          },
          px: {
            xs: 2,
            sm: 3,
            md: 4,
          },
          py: {
            xs: 2.5,
            sm: 3,
          },
          width: "100%",
          overflow: "hidden",
        }}
      >
        {/* Description */}
        <Typography
          sx={{
            fontSize: {
              xs: "14px",
              sm: "15px",
              md: "16px",
            },
            color: "#374151",
            lineHeight: {
              xs: 1.8,
              md: 1.9,
            },
            maxWidth: "1100px",
            wordBreak: "break-word",
          }}
        >
          TopAI.tools is the AI tools discovery platform — built for every way
          you might be looking. Search by describing a task, browse new tools
          daily, follow categories, find alternatives, or explore stacks for
          your role. AI-powered search breaks any task into steps and matches a
          specific tool to each one. Playbooks show you how to execute. Free to
          use.{" "}
          <Box
            component="span"
            sx={{
              color: "#16A34A",
              fontWeight: 500,
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            Start exploring →
          </Box>
        </Typography>

        {/* Action Chips */}
        <Box
          sx={{
            mt: { xs: 2, sm: 2.5 },
            display: "flex",
            flexWrap: "wrap",
            gap: {
              xs: 1,
              sm: 1.5,
            },
          }}
        >
          {actions.map((item, index) => (
            <Chip
              key={index}
              label={item}
              variant="outlined"
              sx={{
                borderRadius: "999px",
                px: {
                  xs: 0.5,
                  sm: 1,
                },
                py: 0.5,
                height: "auto",
                fontSize: {
                  xs: "12px",
                  sm: "13px",
                  md: "14px",
                },
                borderColor: "#16A34A",
                color: "#065F46",
                backgroundColor: "#F0FDF4",

                "& .MuiChip-label": {
                  px: {
                    xs: 1,
                    sm: 1.5,
                  },
                  py: {
                    xs: 0.75,
                    sm: 1,
                  },
                },

                "&:hover": {
                  backgroundColor: "#DCFCE7",
                },
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default AboutTopAI;
