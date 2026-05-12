



import HeroSection from '../features/Home/components/HeroSection';
import ToolCard from '../components/common/CommonCard';
import { Box, Grid } from '@mui/material';
import CommonFeature from '../components/common/CommonFeature';

export default function Home() {
  return (
    <Box>
      {/* HERO SECTION */}
      <HeroSection />

      {/* TOOL GRID SECTION */}
      <Box sx={{ mt: 6, mb: 6 }}>
        <CommonFeature title='Just Landed' />
        <Grid container spacing={2}>

          {Array.from({ length: 8 }).map((_, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <ToolCard
                key={index}
                title={`Tool ${index + 1}`}
                description={`Description for tool ${index + 1}`}
                category="Category"
                image={`/images/CardImage1.jpg`}
                tags={[`Tag ${index + 1}`]}
                isFree
                url="#"
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* 2nd FEATURED LIST */}
      <Box sx={{ mt: 6, mb: 6 }}>
        <CommonFeature title='Featured Tools' />
        <Grid container spacing={2}>

          {Array.from({ length: 9 }).map((_, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <ToolCard
                key={index}
                title={`Tool ${index + 1}`}
                description={`Description for tool ${index + 1}`}
                category="Category"
                image={`/images/CardImage1.jpg`}
                tags={[`Tag ${index + 1}`]}
                isFree
                url="#"
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}