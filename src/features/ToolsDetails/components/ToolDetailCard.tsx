import { Box, Typography, Avatar, Chip, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

type ToolDetailCardProps = {
  name: string;
  description: string;
  category: string;
  rating: number;
  pricing: string;
  image?: string;
  verified?: boolean;
};

const ToolDetailCard = ({
  name,
  description,
  category,
  rating,
  pricing,
  image,
  verified = false,
}: ToolDetailCardProps) => {
  return (
    <Box
      sx={{
        width: 300, // ✅ fixed width
        height: 160, // ✅ fixed height
        p: 1.8,
        borderRadius: 2.5,
        border: "1px solid #e5e7eb",
        backgroundColor: "#fff",
        transition: "all 0.2s ease",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between", // ✅ prevents stretching
        overflow: "hidden", // ✅ locks size
        "&:hover": {
          boxShadow: "0 4px 14px rgba(0,0,0,0.06)",
        },
      }}
    >
      {/* Top */}
      <Stack direction="row" spacing={1.5}>
        <Avatar
          src={image || ""}
          sx={{
            width: 36,
            height: 36,
            bgcolor: "#f3f4f6",
            fontSize: 13,
          }}
        >
          {!image && name[0]}
        </Avatar>

        <Box sx={{ flex: 1, minWidth: 0 }}>
          {/* Title */}
          <Stack direction="row" spacing={0.7} sx={{ alignItems: "center" }}>
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 600,
                color: "#111827",
              }}
              noWrap
            >
              {name}
            </Typography>

            {verified && (
              <CheckCircleIcon
                sx={{
                  fontSize: 16,
                  color: "#22c55e",
                }}
              />
            )}
          </Stack>

          {/* Description */}
          <Typography
            sx={{
              fontSize: 12.5,
              color: "#6b7280",
              mt: 0.3,
              lineHeight: 1.4,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {description}
          </Typography>
        </Box>
      </Stack>

      {/* Divider */}
      <Box
        sx={{
          borderTop: "1px solid #f3f4f6",
          my: 0.4,
        }}
      />

      {/* Bottom */}
      <Stack
        direction="row"
      
        sx={{
          width: "100%",
            alignItems:"center"
        }}
      >
        {/* LEFT */}
        <Chip
          label={category}
          size="small"
          sx={{
            height: 24,
            fontSize: 11.5,
            fontWeight: 500,
            backgroundColor: "#22c55e",
            color: "#fff",
            borderRadius: "999px",
          }}
        />

        {/* RIGHT */}
        <Stack
          direction="row"
          spacing={1.5}
       
          sx={{
            marginLeft: "auto", // ✅ THIS FIXES IT 100%
              alignItems:"center"
          }}
        >
          <Stack direction="row" spacing={0.4} sx={{ alignItems: "center" }}>
            <ThumbUpIcon
              sx={{
                fontSize: 14,
                color: "#16a34a",
              }}
            />
            <Typography
              sx={{
                fontSize: 12,
                color: "#374151",
              }}
            >
              {rating}%
            </Typography>
          </Stack>

          <Typography
            sx={{
              fontSize: 12,
              color: "#6b7280",
            }}
          >
            {pricing}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ToolDetailCard;
