import { Container } from "@mui/material";
import AllToolsBox from "../features/AllTools/components/AllToolsBox";
import AllToolsHeroSection from "../features/AllTools/components/AllToolsHeroSection";
import PopularToolsCategory from "../features/AllTools/components/PopularToolsCategory";


function AllToolsPage() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <AllToolsHeroSection />
      <AllToolsBox />
      <PopularToolsCategory />
    </Container>
  );
}

export default AllToolsPage;
