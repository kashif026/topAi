import { Box, Grid, Typography } from "@mui/material";

import HeroSection from "../features/Home/components/HeroSection";
import ToolCard from "../components/common/CommonCard";
import CommonFeature from "../components/common/CommonFeature";
import BottomCard from "../components/common/BottomCard";

/* ----------------------------- DUMMY DATA ----------------------------- */

const justLandedTools = Array.from({ length: 8 }).map((_, index) => ({
  id: index,

  title: `Tool ${index + 1}`,

  description:
    "AI powered platform for writing, coding, automation, productivity and content workflows.",

  image: "/images/CardImage1.jpg",
}));

const featuredTools = Array.from({ length: 9 }).map((_, index) => ({
  id: index,

  title: `Featured Tool ${index + 1}`,

  description:
    "Discover powerful AI tools for creators, developers, startups and businesses.",

  category: "Marketing",

  image: "/images/CardImage1.jpg",

  tags: ["Marketing", "SEO"],

  isFree: true,

  launchDate: "Today",
}));

/* --------------------------------------------------------------------- */

export default function Home() {
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      {/* HERO SECTION */}
      <HeroSection />

      {/* JUST LANDED */}
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
              <ToolCard {...tool} />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* FEATURED TOOLS */}
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
              <ToolCard {...tool} />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Bottom Section */}
      <Box
        sx={{
          mt: { xs: 5, sm: 6, md: 7 },
          mb: { xs: 5, sm: 6, md: 7 },
        }}
      >
        {/* Section Title */}
        <CommonFeature title="AI Tools PlayBooks" />

        {/* GRID WRAPPER */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr", // mobile → 1 card
              sm: "1fr 1fr", // tablet → 2 cards
              md: "1fr 1fr 1fr 1fr", // desktop → 4 cards
            },
            gap: { xs: 1.5, sm: 2 },
          }}
        >
          {Array.from({ length: 8 }).map((_, index) => (
            <BottomCard
              key={index}
              title={`Tool ${index + 1}`}
              description={`This is a sample description for tool ${index + 1}`}
              description2={`This is the second description for tool ${index + 1}`}
              image="/images/CardImage1.jpg"
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
