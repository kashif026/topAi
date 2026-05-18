import { Box, Typography } from "@mui/material";
import ToolsCard from "../../../components/common/ToolsCard";
import ToolsCardHeader from "../../../components/common/ToolsCardHeader";
import { tools } from "../../../constants/data";



function ToolsCardBox() {
  return (
    <Box sx={{ mt: { xs: 5, sm: 6, md: 7 } }}>
      {tools.map((section, index) => (
        <Box key={index} sx={{ mb: 5 }}>
          {/* Title */}
          <Box>
            <ToolsCardHeader title={section.title} />
          </Box>

          {/* Description */}
          <Typography
            sx={{
              color: "#6B7280",
              mb: 2,
              fontSize: "14px",
            }}
          >
            {section.description}
          </Typography>

          {/* Cards */}
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
            {section.items.map((tool, index) => (
              <ToolsCard key={index} {...tool} />
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default ToolsCardBox;
