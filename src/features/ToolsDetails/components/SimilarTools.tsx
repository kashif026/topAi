import { Box, Grid } from "@mui/material";

import ToolDetailCard from "./ToolDetailCard";
import ToolsCardHeader from "../../../components/common/ToolsCardHeader";

const tools = [
  {
    id: 1,
    name: "DALL·E 3",
    description:
      "DALL·E 3 is an AI image generator that creates highly accurate images from text prompts.",
    category: "Image Generation",
    rating: 87,
    pricing: "Free",
    image: "/images/dalle.png",
    verified: true,
  },
  {
    id: 2,
    name: "Midjourney",
    description:
      "Midjourney creates stunning artistic AI-generated images with a focus on aesthetics.",
    category: "Image Generation",
    rating: 92,
    pricing: "Paid",
    image: "/images/midjourney.png",
    verified: true,
  },
  {
    id: 3,
    name: "Stable Diffusion",
    description:
      "An open-source AI model for generating high-quality images from text prompts.",
    category: "Image Generation",
    rating: 85,
    pricing: "Free",
    image: "/images/stable.png",
    verified: false,
  },
  {
    id: 3,
    name: "Stable Diffusion",
    description:
      "An open-source AI model for generating high-quality images from text prompts.",
    category: "Image Generation",
    rating: 85,
    pricing: "Free",
    image: "/images/stable.png",
    verified: false,
  },
  {
    id: 3,
    name: "Stable Diffusion",
    description:
      "An open-source AI model for generating high-quality images from text prompts.",
    category: "Image Generation",
    rating: 85,
    pricing: "Free",
    image: "/images/stable.png",
    verified: false,
  },
];

function SimilarTools() {
  return (
    <Box sx={{ width: "100%", mt: 4 }}>
      <ToolsCardHeader
        title="Similar Tools"
        actionText="Explore Similar AI"
        emoji={false}
      />

      <Grid container spacing={2.5} sx={{ mt: 1 }}>
        {tools.map((tool) => (
          <Grid
            key={tool.id} 
            sx={{ xs: 12, sm: 6, md: 4 }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex", // ✅ ensures equal height cards
              }}
            >
              <ToolDetailCard {...tool} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default SimilarTools;
