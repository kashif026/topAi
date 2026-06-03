import { Box, Typography } from "@mui/material";

function AboutTool() {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        About the Tool
      </Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Bing's Image Creator is an AI-powered tool that allows users to generate
        images from text descriptions. Users can create unique visuals by simply
        entering descriptive prompts, and the tool uses advanced AI to bring
        those ideas to life. The service is integrated into Bing, with options
        for enhancing image generation speed through the use of Microsoft
        Rewards points. Points can be earned by engaging in activities like
        searching on Bing. The platform currently supports sign-ins through
        personal or work/school accounts, and it is gradually expanding to more
        regions. Image Creator can generate diverse imagery, including scenes
        like spring carnivals, underwater cities, rainbow waterfalls, and
        northern lights vistas. The tool is subject to occasional usage delays
        or regional restrictions, and users are encouraged to check back if they
        experience issues.
      </Typography>
    </Box>
  );
}

export default AboutTool;
