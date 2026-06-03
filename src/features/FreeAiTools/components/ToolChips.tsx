// components/ToolChips.tsx
import { Box, Stack, Typography } from "@mui/material";
// import ToolChip from "./ToolChip";

type Props = {
  tools: { name: string }[];
};

export default function ToolChips({ tools }: Props) {
  return (
    <Stack sx={{ direction: "row", flexWrap: "wrap", gap: 1.5 }}>
      {tools.map((tool) => (
        <Stack
          direction="row"
          spacing={1}
          sx={{
            alignItems: "center",
            px: 2,
            py: 1.2,
            border: "1px solid #e5e7eb",
            borderRadius: 2,
            cursor: "pointer",
            maxWidth: 250,
            "&:hover": {
              backgroundColor: "#f9fafb",
            },
          }}
        >
          <Box
            sx={{
              width: 50,
              height: 50,
              borderRadius: 1,
              backgroundColor: "#ddd",
            }}
          />

          <Typography sx={{ fontSize: 14, fontWeight: 500, color: "red" }}>
            {tool.name}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
}
