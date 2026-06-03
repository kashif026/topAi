// pages/HomePage.tsx
import { Box, Container } from "@mui/material";
import FiltersBar from "../features/FreeAiTools/components/FiltersBar";
import StatsBar from "../features/FreeAiTools/components/StatsBar";
import Section from "../features/FreeAiTools/components/Sectiom";
import ToolChips from "../features/FreeAiTools/components/ToolChips";
import ToolsGrid from "../features/FreeAiTools/components/ToolsGrid";
import FreeAiToolHeroSec from "../features/FreeAiTools/components/FreeAiToolsHeroSec";

const popularTools = [
  { name: "Microsoft Copilot" },
  { name: "Bing Image Creator" },
  { name: "Deepseek" },
  { name: "Perplexity AI" },
];

const newTools = [
  { name: "Multica AI" },
  { name: "Presenton AI" },
  { name: "Meigen.ai" },
];

const allTools = [
  {
    title: "Microsoft Copilot",
    description: "AI assistant for coding and writing.",
    tag: "AI Assistant",
  },
  {
    title: "Deepseek",
    description: "Advanced AI model.",
    tag: "LLM",
  },
];

export default function FreeAiTools() {
  return (
    <Container>
        <FreeAiToolHeroSec />
      <Box>
        <FiltersBar />
        <StatsBar />

        <Section
          title="🔥 Most popular free AI tools right now"
          actionText="See all"
        >
          <ToolChips tools={popularTools} />
        </Section>

        <Section title="🆕 New free AI tools this month" actionText="See all">
          <ToolChips tools={newTools} />
        </Section>

        <Section title="All AI tools">
          <ToolsGrid tools={allTools} />
        </Section>
      </Box>
    </Container>
  );
}
