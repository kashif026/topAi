// components/ToolChip.tsx
import { Box, Typography, Stack } from "@mui/material";

type Props = {
  name: string;
  icon?: string;
};

export default function ToolChip({ name }: Props) {
  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{
        px: 2,
        py: 1.2,
        border: "1px solid #e5e7eb",
        borderRadius: 2,
        cursor: "pointer",
        minWidth: 180,
        alignItems: "center",
        "&:hover": {
          backgroundColor: "#f9fafb",
        },
      }}
    >
      <Box
        sx={{
          width: 20,
          height: 20,
          borderRadius: 1,
          backgroundColor: "#ddd",
        }}
      />

      <Typography sx={{ fontSize: 14, fontWeight: 500, color: "red" }}>
        {name}
      </Typography>
    </Stack>
  );
}
