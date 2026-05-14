import {
  Box,
  Chip,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

interface ToolCardProps {
  title: string;
  description: string;
  category: string;
  image: string;
  tags?: string[];
  isFree?: boolean;
  launchDate?: string;
}

export default function ToolCard({
  title,
  description,
  category,
  image,
  tags = [],
  isFree = false,
  launchDate = "Today",
}: ToolCardProps) {
  return (
    <Box
      sx={{
        width: "100%",

        backgroundColor: "#ffffff",

        border: "1px solid #e5e7eb",

        borderRadius: "16px",

        overflow: "hidden",

        transition: "all 0.15s ease",

        cursor: "pointer",

        height: "100%",

        display: "flex",

        flexDirection: "column",

        "&:hover": {
          borderColor: "#d4d4d8",
          backgroundColor: "#fcfcfc",
        },
      }}
    >
      {/* TOP IMAGE */}
      <Box
        sx={{
          width: "100%",

          height: {
            xs: 180,
            sm: 190,
            md: 200,
          },

          overflow: "hidden",

          backgroundColor: "#f4f4f5",

          borderBottom: "1px solid #f1f5f9",
        }}
      >
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{
            width: "100%",
            height: "100%",

            objectFit: "cover",

            display: "block",
          }}
        />
      </Box>

      {/* CONTENT */}
      <Box
        sx={{
          p: {
            xs: 1.5,
            sm: 1.8,
          },

          display: "flex",

          flexDirection: "column",

          flex: 1,
        }}
      >
        {/* TOP HEADER */}
        <Stack
          direction="row"
          alignItems="flex-start"
          justifyContent="space-between"
          spacing={1}
        >
          {/* TITLE + FREE */}
          <Box
            sx={{
              minWidth: 0,
              flex: 1,
            }}
          >
            <Stack
              direction="row"
              spacing={0.8}
              alignItems="center"
              flexWrap="wrap"
              useFlexGap
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "14px",
                    sm: "15px",
                  },

                  fontWeight: 700,

                  color: "#111827",

                  overflow: "hidden",

                  textOverflow: "ellipsis",

                  whiteSpace: "nowrap",

                  maxWidth: "100%",
                }}
              >
                {title}
              </Typography>

              {isFree && (
                <Chip
                  label="Free"
                  size="small"
                  sx={{
                    height: 18,

                    fontSize: "10px",

                    fontWeight: 600,

                    backgroundColor: "#eefbf3",

                    color: "#16a34a",

                    borderRadius: "5px",

                    "& .MuiChip-label": {
                      px: 0.8,
                    },
                  }}
                />
              )}
            </Stack>
          </Box>

          {/* ACTIONS */}
          <Stack
            direction="row"
            spacing={0.3}
            alignItems="center"
            sx={{
              flexShrink: 0,
            }}
          >
            <IconButton
              size="small"
              sx={{
                width: 28,
                height: 28,
              }}
            >
              <BookmarkBorderIcon
                sx={{
                  fontSize: 16,
                  color: "#9ca3af",
                }}
              />
            </IconButton>

            <IconButton
              size="small"
              sx={{
                width: 28,
                height: 28,
              }}
            >
              <OpenInNewIcon
                sx={{
                  fontSize: 15,
                  color: "#9ca3af",
                }}
              />
            </IconButton>
          </Stack>
        </Stack>

        {/* DESCRIPTION */}
        <Typography
          sx={{
            mt: 1,

            fontSize: {
              xs: "12px",
              sm: "13px",
            },

            color: "#6b7280",

            lineHeight: 1.5,

            display: "-webkit-box",

            WebkitLineClamp: 3,

            WebkitBoxOrient: "vertical",

            overflow: "hidden",
          }}
        >
          {description}
        </Typography>

        {/* FOOTER */}
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={1}
          sx={{
            mt: "auto",

            pt: 2,
          }}
        >
          {/* LEFT META */}
          <Stack
            direction="row"
            spacing={0.8}
            alignItems="center"
            flexWrap="wrap"
            useFlexGap
          >
            <Chip
              label={category}
              size="small"
              sx={{
                height: 22,

                fontSize: "10px",

                backgroundColor: "#f4f4f5",

                color: "#52525b",

                borderRadius: "6px",

                "& .MuiChip-label": {
                  px: 1,
                },
              }}
            />

            {tags.slice(0, 2).map((tag) => (
              <Typography
                key={tag}
                sx={{
                  fontSize: "11px",

                  color: "#9ca3af",

                  fontWeight: 500,
                }}
              >
                #{tag}
              </Typography>
            ))}
          </Stack>

          {/* DATE */}
          <Typography
            sx={{
              fontSize: "11px",

              color: "#a1a1aa",

              whiteSpace: "nowrap",

              flexShrink: 0,
            }}
          >
            {launchDate}
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}