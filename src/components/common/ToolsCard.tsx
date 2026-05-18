import React from "react";
import { Card, Box, Typography, Avatar, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

interface ToolsCardProps {
  name: string;
  description: string;
  image: string;
  verified?: boolean;
}

const ToolsCard: React.FC<ToolsCardProps> = ({
  name,
  description,
  image,
  verified = false,
}) => {
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        p: {
          xs: 1.5,
          sm: 2,
          md: 2.5,
        },
        borderRadius: {
          xs: "14px",
          md: "16px",
        },
        boxShadow: "0px 2px 6px rgba(0,0,0,0.08)",
        border: "1px solid #E5E7EB",
        backgroundColor: "#fff",
        cursor: "pointer",
        transition: "all 0.2s ease",
        width: "100%",
        overflow: "hidden",

        "&:hover": {
          boxShadow: "0px 4px 12px rgba(0,0,0,0.12)",
          transform: {
            md: "translateY(-2px)",
          },
        },
      }}
    >
      {/* Avatar */}
      <Avatar
        src={image}
        alt={name}
        sx={{
          width: {
            xs: 52,
            sm: 58,
            md: 64,
          },
          height: {
            xs: 52,
            sm: 58,
            md: 64,
          },
          mr: {
            xs: 1.5,
            sm: 2,
          },
          border: "1px solid #E5E7EB",
          flexShrink: 0,
        }}
      />

      {/* Content */}
      <Box
        sx={{
          flex: 1,
          minWidth: 0,
        }}
      >
        {/* Title + Verified */}
        <Stack
          direction="row"
          spacing={0.5}
          sx={{
            minWidth: 0,
            alignItems:'center'

          }}
        >
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: {
                xs: "13px",
                sm: "14px",
                md: "15px",
              },
              color: "#111827",
              lineHeight: 1.4,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {name}
          </Typography>

          {verified && (
            <CheckCircleIcon
              sx={{
                color: "#16A34A",
                fontSize: {
                  xs: 14,
                  sm: 15,
                },
                flexShrink: 0,
              }}
            />
          )}
        </Stack>

        {/* Description */}
        <Typography
          sx={{
            color: "#6B7280",
            mt: 0.5,
            fontSize: {
              xs: "11px",
              sm: "12px",
              md: "13px",
            },
            lineHeight: {
              xs: 1.45,
              md: 1.5,
            },
            display: "-webkit-box",
            WebkitLineClamp: {
              xs: 2,
              md: 2,
            },
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            wordBreak: "break-word",
          }}
        >
          {description}
        </Typography>
      </Box>
    </Card>
  );
};

export default ToolsCard;