// components/Section.tsx
import { Box, Typography, Stack, Button } from "@mui/material";

type Props = {
  title: string;
  children: React.ReactNode;
  actionText?: string;
};

export default function Section({ title, children, actionText }: Props) {
  return (
    <Box sx={{ mt: 4 }}>
      <Stack
        sx={{ mb: 2, justifyContent: "space-between", alignItems: "center" }}
      >
        <Typography sx={{ fontSize: 18, fontWeight: 700 }}>{title}</Typography>

        {actionText && (
          <Button
            sx={{
              textTransform: "none",
              fontSize: 14,
              color: "#16a34a",
              fontWeight: 500,
            }}
          >
            {actionText} →
          </Button>
        )}
      </Stack>

      {children}
    </Box>
  );
}
