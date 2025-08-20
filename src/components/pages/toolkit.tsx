import { Box } from "@chakra-ui/react";

import ArticleCards from "../articles";
import HeroSection from "../hero";

function Toolkit() {
  return (
    <Box data-testid="toolkit-page">
      <HeroSection title="Studio Toolkit" />
      <ArticleCards />
    </Box>
  );
}

export default Toolkit;
