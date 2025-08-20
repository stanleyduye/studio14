import { Box } from "@chakra-ui/react";

import ArticleCards from "../articles";
import HeroSection from "../hero";

function HomePage() {
  return (
    <Box data-testid="home-page">
      <HeroSection title="Studio Guides" />
      <ArticleCards />
    </Box>
  );
}

export default HomePage;
