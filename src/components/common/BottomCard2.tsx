import React from "react";
import { Card, Box, Typography, Avatar } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

interface BottomCard2Props {
  name: string;
  description: string;
  image: string;
  verified?: boolean;
}

const BottomCard2: React.FC<BottomCard2Props> = ({
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
        p: 2.5,
        borderRadius: "16px",
        boxShadow: "0px 2px 6px rgba(0,0,0,0.08)",
        border: "1px solid #E5E7EB",
        backgroundColor: "#fff",
        cursor: "pointer",
        transition: "all 0.2s ease",
        "&:hover": {
          boxShadow: "0px 4px 12px rgba(0,0,0,0.12)",
          transform: "translateY(-2px)",
        },
      }}
    >
      {/* Avatar */}
      <Avatar
        src={image}
        alt={name}
        sx={{
          width: 64,
          height: 64,
          mr: 2,
          border: "1px solid #E5E7EB",
        }}
      />

      {/* Content */}
      <Box sx={{ flex: 1 }}>
        {/* Title + Verified */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography
            sx={{
              fontWeight: 600,
            //   fontSize: "20px",
              color: "#111827",
            }}
          >
            {name}
          </Typography>

          {verified && (
            <CheckCircleIcon
              sx={{
                color: "#16A34A",
                fontSize: 20,
              }}
            />
          )}
        </Box>

        {/* Description */}
        <Typography
          sx={{
            color: "#6B7280",
            mt: 0.5,
            fontSize: "12px",
            lineHeight: 1.5,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {description}
        </Typography>
      </Box>
    </Card>
  );
};

export default BottomCard2;