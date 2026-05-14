import { Box } from "@mui/material";

import HeroSection from "../features/Home/components/HeroSection";
// import ToolCard from "../components/common/CommonCard";
import CommonFeature from "../components/common/CommonFeature";
import BottomCard from "../components/common/BottomCard";
import BottomCard2 from "../components/common/BottomCard2";
import JustLanded from "../features/Home/components/JustLanded";
import FeaturedTools from "../features/Home/components/FeaturedTools";

/* ----------------------------- DUMMY DATA ----------------------------- */





const tools = [
  {
    name: "Microsoft Copilot",
    description:
      "Copilot allows users to ask questions, receive complete answers, and generate content.",
    image: "/images/Image1.png",
    verified: true,
  },
  {
    name: "Microsoft Copilot",
    description:
      "Copilot allows users to ask questions, receive complete answers, and generate content.",
    image: "/images/Image1.png",
    verified: true,
  },
  {
    name: "Microsoft Copilot",
    description:
      "Copilot allows users to ask questions, receive complete answers, and generate content.",
    image: "/images/Image1.png",
    verified: false,
  },
  {
    name: "Microsoft Copilot",
    description:
      "Copilot allows users to ask questions, receive complete answers, and generate content.",
    image: "/images/Image1.png",
    verified: true,
  },
 
];



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
       <JustLanded/>

      {/* FEATURED TOOLS */}
      <FeaturedTools/>

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

      {/*  */}
      <Box
        sx={{
          mt: { xs: 5, sm: 6, md: 7 },
          mb: { xs: 5, sm: 6, md: 7 },
        }}
      >
        {/* Section Title */}
        <CommonFeature title="AI Tools PlayBooks" />
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
          {tools.map((tool, index) => (
            <BottomCard2 key={index} {...tool} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
