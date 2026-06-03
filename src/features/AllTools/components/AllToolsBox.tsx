import { Box, Button, Grid, Typography } from "@mui/material";
import CommonCard from "../../../components/common/CommonCard";
import { COLORS } from "../../../constants/color";
import FreeAccount from "../../../components/common/FreeAccount";

const AllTools = Array.from({ length: 20 }).map((_, index) => ({
  id: index,

  title: `Tool ${index + 1}`,

  description:
    "AI powered platform for writing, coding, automation, productivity and content workflows.",

  category: "Productivity",
  image: "/images/CardImage1.jpg",
}));

function AllToolsBox() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          mb: 2,
          fontSize: "1.8rem",
          fontWeight: 600,
        }}
      >
        <Typography sx={{ fontSize: "inherit" }}>👉</Typography>All Tools
      </Box>
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
        <Grid
          container
          spacing={{
            xs: 1.5,
            sm: 2,
          }}
        >
          {AllTools.map((tool) => (
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
      <Box>
        <Button
          variant="contained"
          sx={{
            bgcolor: COLORS.green.main,
            width: "max-content",
            margin: "auto",
            display: "block",
          }}
        >
          Load More
        </Button>
      </Box>
      <FreeAccount />
    </Box>
  );
}

export default AllToolsBox;
