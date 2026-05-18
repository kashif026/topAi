import { Box } from "@mui/material";

import HeroSection from "../features/Home/components/HeroSection";
import JustLanded from "../features/Home/components/JustLanded";
import FeaturedTools from "../features/Home/components/FeaturedTools";
import ToolsCardBox from "../features/Home/components/ToolsCardBox";
import ToolsPlayBook from "../features/Home/components/ToolsPlayBook";
import TopCategories from "../features/Home/components/TopCategories";
import AboutTopAI from "../features/Home/components/AboutTopAI";
import FreeAccount from "../features/Home/components/FreeAccount";

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
      <JustLanded />

      {/* FEATURED TOOLS */}
      <FeaturedTools />

      {/* Free Account */}
      <FreeAccount />

      {/*toolsPlayBook */}
      <ToolsPlayBook />

      {/*  */}
      <ToolsCardBox />

      {/* TopAiCategories */}
      <TopCategories />

      {/* ABOUT TOPAI */}
      <AboutTopAI />
    </Box>
  );
}
