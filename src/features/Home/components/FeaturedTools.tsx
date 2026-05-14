import { Box, Grid } from "@mui/material";
import CommonFeature from "../../../components/common/CommonFeature";
import CommonCard from "../../../components/common/CommonCard";

const featuredTools = Array.from({ length: 9 }).map((_, index) => ({
  id: index,

  title: `Featured Tool ${index + 1}`,

  description:
    "Discover powerful AI tools for creators, developers, startups and businesses.",

  category: "Marketing",

  image: "/images/CardImage1.jpg",

  isFree: true,

  launchDate: "Today",
}));
function FeaturedTools() {
  return (
    <Box
      sx={{
        mb: {
          xs: 5,
          sm: 6,
          md: 7,
        },
      }}
    >
      <CommonFeature title="Featured Tools" />

      <Grid
        container
        spacing={{
          xs: 1.5,
          sm: 2,
        }}
      >
        {featuredTools.map((tool) => (
          <Grid
            key={`featured-${tool.id}`}
            size={{
              xs: 12,
              sm: 6,
              lg: 4,
            }}
          >
            <CommonCard {...tool} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default FeaturedTools;
