// components/ToolCard.tsx
import { Box, Typography, Stack, Chip } from "@mui/material";

type Props = {
  title: string;
  description: string;
  tag: string;
};

export default function ToolCard({ title, description, tag }: Props) {
  return (
    <Box
      sx={{
        border: "1px solid #e5e7eb",
        borderRadius: 3,
        overflow: "hidden",
        cursor: "pointer",
        "&:hover": {
          boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
        },
      }}
    >
      {/* IMAGE */}
      <Box
        sx={{
          height: 140,
          backgroundColor: "#111",
        }}
      />

      {/* CONTENT */}
      <Box sx={{ p: 2 }}>
        <Typography sx={{ fontWeight: 600, fontSize: 15 }}>{title}</Typography>

        <Typography
          sx={{
            fontSize: 13,
            color: "#6b7280",
            mt: 1,
          }}
        >
          {description}
        </Typography>

        <Stack direction="row" sx={{ justifyContent: "space-between", mt: 2 }}>
          <Chip label={tag} size="small" sx={{ fontSize: 11 }} />

          <Typography sx={{ fontSize: 12, color: "#16a34a" }}>Free</Typography>
        </Stack>
      </Box>
    </Box>
  );
}
