// components/StatsBar.tsx
import { Stack, Typography } from "@mui/material";

export default function StatsBar() {
  return (
    <Stack direction="row" spacing={3} sx={{ mt: 2 }}>
      <Typography sx={{ fontSize: 14 }}>
        ✂️ <b>2572</b> truly free
      </Typography>

      <Typography sx={{ fontSize: 14 }}>
        ✨ <b>6858</b> freemium
      </Typography>

      <Typography sx={{ fontSize: 14 }}>
        📅 <b>17</b> added this month
      </Typography>
    </Stack>
  );
}