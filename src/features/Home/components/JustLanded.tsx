import { Box, Grid } from "@mui/material";
import CommonFeature from "../../../components/common/CommonFeature";
import CommonCard from "../../../components/common/CommonCard";

const justLandedTools = Array.from({ length: 8 }).map((_, index) => ({
  id: index,

  title: `Tool ${index + 1}`,

  description:
    "AI powered platform for writing, coding, automation, productivity and content workflows.",

    category: "Productivity",
  image: "/images/CardImage1.jpg",
}));
function JustLanded() {
  return (
    <Box
      sx={{
        mt: {
          xs: 5,
          sm: 6,
          md: 7,
        },

        mb: {
          xs: 5,
          sm: 6,
          md: 7,
        },
      }}
    >
      <CommonFeature title="Just Landed" />

      <Grid
        container
        spacing={{
          xs: 1.5,
          sm: 2,
        }}
      >
        {justLandedTools.map((tool) => (
          <Grid
            key={tool.id}
            size={{
              xs: 12,
              sm: 6,
              lg: 3,
            }}
          >
            <CommonCard {...tool} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default JustLanded;
