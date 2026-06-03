import AboutTool from "../features/ToolsDetails/components/AboutTool";
import SimilarTools from "../features/ToolsDetails/components/SimilarTools";
import ToolHeroSection from "../features/ToolsDetails/components/ToolHeroSection";

function ToolsDetailPage() {
  return (
    <div>
      <ToolHeroSection />
      <AboutTool />
      <SimilarTools />
    </div>
  );
}

export default ToolsDetailPage;
