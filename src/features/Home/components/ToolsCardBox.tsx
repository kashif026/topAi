import { Box, Typography, Container } from "@mui/material";
import ToolsCard from "../../../components/common/ToolsCard";
import ToolsCardHeader from "../../../components/common/ToolsCardHeader";
import { tools } from "../../../constants/data";

function ToolsCardBox() {
  return (
    <Box
    
      sx={{
        mt: { xs: 5, sm: 6, md: 8 },
      }}
    >
      {tools.map((section, index) => (
        <Box
          key={index}
          sx={{
            mb: { xs: 5, sm: 6, md: 8 },
          }}
        >
          {/* Header */}
          <ToolsCardHeader title={section.title} />

          {/* Description */}
          <Typography
            sx={{
              color: "#6B7280",
              mt: 1,
              mb: { xs: 2.5, sm: 3 },
              fontSize: {
                xs: "13px",
                sm: "14px",
                md: "15px",
              },
              lineHeight: 1.7,
              maxWidth: "900px",
            }}
          >
            {section.description}
          </Typography>

          {/* Cards Grid */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
                lg: "repeat(4, 1fr)",
              },
              gap: {
                xs: 2,
                sm: 2.5,
                md: 3,
              },
              alignItems: "stretch",
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
