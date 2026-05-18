import { Box } from "@mui/material";
import BottomCard from "../../../components/common/BottomCard";
import CommonFeature from "../../../components/common/CommonFeature";

function ToolsPlayBook() {
  return (
    <Box
      sx={{
        mt: { xs: 5, sm: 6, md: 7 },
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
  );
}

export default ToolsPlayBook;
