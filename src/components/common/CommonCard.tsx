import { Box, Chip, IconButton, Stack, Typography } from "@mui/material";

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

export default function CommonCard({
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
        borderRadius: {
          xs: "14px",
          sm: "16px",
        },
        overflow: "hidden",
        transition: "all 0.15s ease",
        cursor: "pointer",
        height: "100%",
        display: "flex",
        flexDirection: "column",

        "&:hover": {
          borderColor: {
            md: "#d4d4d8",
          },
          backgroundColor: {
            md: "#fcfcfc",
          },
        },
      }}
    >
      {/* TOP IMAGE */}
      <Box
        sx={{
          width: "100%",
          height: {
            xs: 160,
            sm: 180,
            md: 200,
          },
          overflow: "hidden",
          backgroundColor: "#f4f4f5",
          borderBottom: "1px solid #f1f5f9",
          flexShrink: 0,
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
            sm: 2,
          },
          display: "flex",
          flexDirection: "column",
          flex: 1,
          minWidth: 0,
        }}
      >
        {/* TOP HEADER */}
        <Stack
          direction="row"
          spacing={1}
          sx={{
            alignItems: "flex-start",
            justifyContent: "space-between",
            minWidth: 0,
          }}
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
              useFlexGap
              sx={{
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "13px",
                    sm: "14px",
                    md: "15px",
                  },
                  fontWeight: 700,
                  color: "#111827",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: {
                    xs: "normal",
                    sm: "nowrap",
                  },
                  lineHeight: 1.4,
                  maxWidth: "100%",
                  wordBreak: "break-word",
                }}
              >
                {title}
              </Typography>

              {isFree && (
                <Chip
                  label="Free"
                  size="small"
                  sx={{
                    height: {
                      xs: 20,
                      sm: 18,
                    },
                    fontSize: {
                      xs: "9px",
                      sm: "10px",
                    },
                    fontWeight: 600,
                    backgroundColor: "#eefbf3",
                    color: "#16a34a",
                    borderRadius: "5px",
                    flexShrink: 0,

                    "& .MuiChip-label": {
                      px: {
                        xs: 0.7,
                        sm: 0.8,
                      },
                    },
                  }}
                />
              )}
            </Stack>
          </Box>

          {/* ACTIONS */}
          <Stack
            direction="row"
            spacing={0.5}
            sx={{
              flexShrink: 0,
              alignItems: "center",
            }}
          >
            <IconButton
              size="small"
              sx={{
                width: {
                  xs: 32,
                  sm: 28,
                },
                height: {
                  xs: 32,
                  sm: 28,
                },
              }}
            >
              <BookmarkBorderIcon
                sx={{
                  fontSize: {
                    xs: 18,
                    sm: 16,
                  },
                  color: "#9ca3af",
                }}
              />
            </IconButton>

            <IconButton
              size="small"
              sx={{
                width: {
                  xs: 32,
                  sm: 28,
                },
                height: {
                  xs: 32,
                  sm: 28,
                },
              }}
            >
              <OpenInNewIcon
                sx={{
                  fontSize: {
                    xs: 17,
                    sm: 15,
                  },
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
              md: "14px",
            },
            color: "#6b7280",
            lineHeight: 1.6,
            display: "-webkit-box",
            WebkitLineClamp: {
              xs: 3,
              sm: 3,
            },
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            wordBreak: "break-word",
          }}
        >
          {description}
        </Typography>

        {/* FOOTER */}
        <Stack
          direction="row"
          spacing={1}
          sx={{
            mt: "auto",
            pt: {
              xs: 1.5,
              sm: 2,
            },
            alignItems: {
              xs: "flex-start",
              sm: "center",
            },
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 1,
          }}
        >
          {/* LEFT META */}
          <Stack
            direction="row"
            spacing={0.8}
            useFlexGap
            sx={{
              alignItems: "center",
              flexWrap: "wrap",
              minWidth: 0,
            }}
          >
            <Chip
              label={category}
              size="small"
              sx={{
                height: {
                  xs: 24,
                  sm: 22,
                },
                fontSize: {
                  xs: "9px",
                  sm: "10px",
                },
                backgroundColor: "#f4f4f5",
                color: "#52525b",
                borderRadius: "6px",

                "& .MuiChip-label": {
                  px: {
                    xs: 0.8,
                    sm: 1,
                  },
                },
              }}
            />

            {tags.slice(0, 2).map((tag) => (
              <Typography
                key={tag}
                sx={{
                  fontSize: {
                    xs: "10px",
                    sm: "11px",
                  },
                  color: "#9ca3af",
                  fontWeight: 500,
                  wordBreak: "break-word",
                }}
              >
                #{tag}
              </Typography>
            ))}
          </Stack>

          {/* DATE */}
          <Typography
            sx={{
              fontSize: {
                xs: "10px",
                sm: "11px",
              },
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