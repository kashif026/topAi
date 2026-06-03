// components/ToolsGrid.tsx
import { Grid } from "@mui/material";
import ToolCard from "./ToolCard";

type Props = {
  tools: {
    title: string;
    description: string;
    tag: string;
  }[];
};

export default function ToolsGrid({ tools }: Props) {
  return (
    <Grid container spacing={2}>
      {tools.map((tool, i) => (
        <Grid key={i} sx={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <ToolCard {...tool} />
        </Grid>
      ))}
    </Grid>
  );
}
