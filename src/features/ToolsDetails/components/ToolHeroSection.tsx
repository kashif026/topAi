import React from "react";
import {
  Box,
  Button,
  Chip,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ThumbUpRoundedIcon from "@mui/icons-material/ThumbUpRounded";
import ThumbDownRoundedIcon from "@mui/icons-material/ThumbDownRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";

type ToolData = {
  title: string;
  verified: boolean;
  likes: number;
  dislikes: number;
  reviews: number;
  category: string;
  description: string;
  tags: string[];
  input: string[];
  output: string[];
  users: number;
  image: string;
};

const toolData: ToolData = {
  title: "Bing Image Creator",
  verified: true,
  likes: 21,
  dislikes: 5,
  reviews: 26,
  category: "Mainstream",
  description: "Generate images from text descriptions for free.",
  tags: ["Free", "Art Generation", "Art Generation"],
  input: ["Text", "Image"],
  output: ["Image"],
  users: 573,
  image:
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1800&auto=format&fit=crop",
};

const LabelBadge = ({ label, dark }: { label: string; dark?: boolean }) => {
  return (
    <Box
      sx={{
        px: 1.4,
        py: 0.4,
        borderRadius: "8px",
        bgcolor: dark ? "#000" : "#1f9d55",
        color: "#fff",
        fontSize: "0.8rem",
        fontWeight: 700,
        lineHeight: 1,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: 46,
        textTransform: "capitalize",
      }}
    >
      {label}
    </Box>
  );
};

const ToolHeroSection: React.FC = () => {
  return (
    <Box
      sx={{
        background: "#eef4f7",
        py: {
          xs: 3,
          md: 4,
        },
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{
            xs: "column",
            lg: "row",
          }}
          spacing={{
            xs: 3,
            md: 4,
          }}
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          {/* LEFT SIDE */}
          <Box
            sx={{
              width: "100%",
              maxWidth: {
                lg: 500,
              },
            }}
          >
            {/* Breadcrumb */}
            <Stack
              direction="row"
              spacing={1}
              sx={{ mb: 1.5, alignItems: "center", flexWrap: "wrap" }}
            >
              <HomeRoundedIcon
                sx={{
                  color: "#43a463",
                  fontSize: 16,
                }}
              />

              <Typography sx={{ fontSize: "0.85rem", color: "#64748b" }}>
                /
              </Typography>

              <Typography
                sx={{
                  fontSize: "0.85rem",
                  color: "#43a463",
                  fontWeight: 500,
                }}
              >
                Art Generation
              </Typography>

              <Typography sx={{ fontSize: "0.85rem", color: "#64748b" }}>
                /
              </Typography>

              <Typography
                sx={{
                  fontSize: "0.85rem",
                  color: "#64748b",
                }}
              >
                {toolData.title}
              </Typography>
            </Stack>

            {/* TITLE */}
            <Stack
              direction="row"
              spacing={1}
              sx={{ mb: 1, alignItems: "center", flexWrap: "wrap" }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "2rem",
                    sm: "2rem",
                    // md: '3rem',
                  },
                  fontWeight: 800,
                  lineHeight: 1.05,
                  letterSpacing: "-1.5px",
                  color: "#031926",
                }}
              >
                {toolData.title}
              </Typography>

              <Stack
                direction="row"
                spacing={0.4}
                sx={{ alignItems: "center" }}
              >
                <VerifiedRoundedIcon
                  sx={{
                    color: "#1f9d55",
                    fontSize: 18,
                  }}
                />

                <Typography
                  sx={{
                    color: "#475569",
                    fontSize: "0.95rem",
                  }}
                >
                  Verified
                </Typography>
              </Stack>
            </Stack>

            {/* STATS */}
            <Stack
              direction="row"
              spacing={1.5}
              sx={{ mb: 2, alignItems: "center", flexWrap: "wrap" }}
            >
              <Stack
                direction="row"
                spacing={0.4}
                sx={{ alignItems: "center" }}
              >
                <ThumbUpRoundedIcon
                  sx={{
                    color: "#16a34a",
                    fontSize: 18,
                  }}
                />

                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: "0.95rem",
                  }}
                >
                  {toolData.likes}
                </Typography>
              </Stack>

              <Typography sx={{ color: "#94a3b8" }}>·</Typography>

              <Stack
                direction="row"
                spacing={0.4}
                sx={{ alignItems: "center" }}
              >
                <ThumbDownRoundedIcon
                  sx={{
                    color: "#ef4444",
                    fontSize: 18,
                  }}
                />

                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: "0.95rem",
                  }}
                >
                  {toolData.dislikes}
                </Typography>

                <Typography
                  sx={{
                    color: "#64748b",
                    fontSize: "0.9rem",
                  }}
                >
                  ({toolData.reviews} reviews)
                </Typography>
              </Stack>

              <Stack
                direction="row"
                spacing={0.4}
                sx={{ alignItems: "center" }}
              >
                <AutoAwesomeRoundedIcon
                  sx={{
                    color: "#06b6d4",
                    fontSize: 16,
                  }}
                />

                <Typography
                  sx={{
                    color: "#06b6d4",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                  }}
                >
                  {toolData.category}
                </Typography>
              </Stack>
            </Stack>

            {/* DESCRIPTION */}
            <Typography
              sx={{
                fontSize: {
                  xs: "1rem",
                  md: "1.05rem",
                },
                color: "#1f2937",
                lineHeight: 1.7,
                mb: 2,
                maxWidth: 480,
              }}
            >
              {toolData.description}
            </Typography>

            {/* TAGS */}
            <Stack
              direction="row"
              spacing={1}
              useFlexGap
              sx={{ mb: 2.5, flexWrap : "wrap" }}
            >
              {toolData.tags.map((tag, index) => (
                <Chip
                  key={`${tag}-${index}`}
                  label={tag}
                  size="small"
                  variant="outlined"
                  sx={{
                    height: 32,
                    borderRadius: "8px",
                    borderColor: "#94a3b8",
                    bgcolor: "#fff",
                    fontSize: "0.8rem",
                    color: "#475569",
                  }}
                />
              ))}
            </Stack>

            {/* INPUT OUTPUT */}
            <Stack
              direction="row"
              spacing={1}
             
              sx={{ mb: 3 , alignItems: "center", flexWrap: "wrap" }}
            >
              <Typography
                sx={{
                  fontSize: "0.95rem",
                  color: "#475569",
                }}
              >
                In:
              </Typography>

              <Stack direction="row" spacing={0.8}>
                {toolData.input.map((item) => (
                  <LabelBadge key={item} label={item} dark />
                ))}
              </Stack>

              <Typography sx={{ color: "#64748b" }}>→</Typography>

              <Typography
                sx={{
                  fontSize: "0.95rem",
                  color: "#475569",
                }}
              >
                Out:
              </Typography>

              <Stack direction="row" spacing={0.8}>
                {toolData.output.map((item) => (
                  <LabelBadge key={item} label={item} />
                ))}
              </Stack>
            </Stack>

            {/* ACTIONS */}
            <Stack
              direction="row"
              spacing={1.5}
           sx={{ alignItems: "center", flexWrap: "wrap" }}
            >
              <IconButton
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: "10px",
                  border: "1px solid #43a463",
                  bgcolor: "#fff",
                  color: "#43a463",
                }}
              >
                <FavoriteBorderRoundedIcon />
              </IconButton>

              <Button
                endIcon={<OpenInNewRoundedIcon />}
                sx={{
                  height: 48,
                  px: 3,
                  borderRadius: "10px",
                  bgcolor: "#43a463",
                  color: "#fff",
                  fontSize: "1rem",
                  fontWeight: 600,
                  textTransform: "none",

                  "&:hover": {
                    bgcolor: "#368a52",
                  },
                }}
              >
                Try Now
              </Button>

              <Stack direction="row" spacing={0.8} sx={{ alignItems: "center" }}>
                <Typography
                  sx={{
                    color: "#2f9e44",
                    fontSize: "0.95rem",
                  }}
                >
                  I use this
                </Typography>

                <Box
                  sx={{
                    px: 1,
                    py: 0.35,
                    borderRadius: "7px",
                    bgcolor: "#2f9e44",
                    color: "#fff",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    lineHeight: 1,
                  }}
                >
                  {toolData.users}
                </Box>
              </Stack>
            </Stack>
          </Box>

          {/* RIGHT IMAGE */}
          <Box
            sx={{
              width: "100%",
              maxWidth: {
                xs: "100%",
                lg: 760,
              },
              borderRadius: "18px",
              overflow: "hidden",
              bgcolor: "#fff",
              boxShadow: "0 8px 30px rgba(15,23,42,0.08)",
            }}
          >
            <Box
              component="img"
              src={toolData.image}
              alt={toolData.title}
              sx={{
                width: "100%",
                height: {
                  xs: 240,
                  sm: 320,
                  md: 420,
                },
                objectFit: "cover",
                display: "block",
              }}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default ToolHeroSection;
