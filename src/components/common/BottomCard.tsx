import { Box, Typography, Stack } from "@mui/material";

interface BottomCardProps {
  title: string;
  description: string;
  description2?: string;
  image: string;
}

export default function BottomCard({
  title,
  description,
  description2,
  image,
}: BottomCardProps) {
  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        border: "1px solid #e5e7eb",
        borderRadius: "12px",
        p: 2,
        cursor: "pointer",
        transition: "all 0.15s ease",
        height: "100%",

        "&:hover": {
          borderColor: "#d4d4d8",
          backgroundColor: "#fcfcfc",
        },
      }}
    >
      {/* ================= ROW 1: IMAGE + TITLE ================= */}
      <Stack direction="row" spacing={1.5} sx={{ mb: 1, alignItems: "center" }}>
        {/* IMAGE */}
        <Box
          sx={{
            width: 34,
            height: 34,
            minWidth: 24,
            borderRadius: "10px",
            overflow: "hidden",
            border: "1px solid #e5e7eb",
            backgroundColor: "#fafafa",
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
            }}
          />
        </Box>

        {/* TITLE */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            sx={{
              fontSize: "15px",
              fontWeight: 700,
              color: "#111827",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {title}
          </Typography>
        </Box>
      </Stack>

      {/* ================= ROW 2: DESCRIPTION ================= */}
      <Typography
        sx={{
          fontSize: "13px",
          color: "#6b7280",
          lineHeight: 1.5,
          mb: 1,
        }}
      >
        {description}
      </Typography>

      {/* ================= ROW 3: DESCRIPTION 2 ================= */}
      <Typography
        sx={{
          fontSize: "12px",
          color: "#9ca3af",
          lineHeight: 1.5,
        }}
      >
        {description2}
      </Typography>
    </Box>
  );
}
