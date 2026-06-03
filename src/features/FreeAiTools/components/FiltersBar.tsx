// components/FiltersBar.tsx
import { Stack, Button, Box } from "@mui/material";

const filters = ["Free", "Free + Freemium", "Freemium"];

export default function FiltersBar() {
  return (
    <Stack direction="row" spacing={1.5} sx={{ mt: 2 }}>
      {filters.map((f) => (
        <Button
          key={f}
          variant="outlined"
          sx={{
            textTransform: "none",
            borderRadius: 5,
            fontSize: 13,
            bgcolor: "#f8fafc",
            color: "#334155",
            border: "1px solid #e2e8f0",
          }}
        >
          {f}
        </Button>
      ))}

      <Box sx={{ bgcolor: "gray", width: 2, height: "100" }} />
      <Button
        variant="outlined"
        sx={{
          borderRadius: 5,
          bgcolor: "#f8fafc",
          color: "#334155",
          border: "1px solid #e2e8f0",
        }}
      >
        All categories
      </Button>
    </Stack>
  );
}
