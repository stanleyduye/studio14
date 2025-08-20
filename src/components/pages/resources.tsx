import { Box } from "@chakra-ui/react";

import ArticleCards from "../articles";
import HeroSection from "../hero";

function Resources() {
  return (
    <Box data-testid="resources-page">
      <HeroSection title="Resources" />
      <ArticleCards />
    </Box>
  );
}

export default Resources;
