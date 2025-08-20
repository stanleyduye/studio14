import { Box, Card, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";

import { cardData, getRandomImage } from "@/constants/data";
import { useMemo, useState } from "react";
import ph_link from "../assets/humbleicons_link.png";
import ph_pdf from "../assets/ph_file-pdf-duotone.png";
import ph_video from "../assets/ph_video.png";
import Filter from "./filters";

const iconMap = {
  link: ph_link,
  video: ph_video,
  pdf: ph_pdf,
} as const;

function ArticleCards() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const filteredCards = useMemo(() => {
    return cardData.filter((card) => {
      const matchesTag =
        selectedTags.length === 0 || selectedTags.includes(card.tag);
      const matchesType =
        selectedTypes.length === 0 || selectedTypes.includes(card.type);
      return matchesTag && matchesType;
    });
  }, [selectedTags, selectedTypes]);

  const handleFilterChange = (type: "tag" | "type", values: string[]) => {
    if (type === "tag") {
      setSelectedTags(values);
    } else {
      setSelectedTypes(values);
    }
  };

  return (
    <Flex
      bg={"#fff"}
      pt={10}
      width={"100vw"}
      justify={"center"}
      align={{ base: "center", md: "flex-start" }}
      gap={{ base: 0, md: 8 }}
      direction={{ base: "column", md: "row" }}
    >
      <Filter
        onFilterChange={handleFilterChange}
        selectedTags={selectedTags}
        selectedTypes={selectedTypes}
      />
      <Flex align={"center"} flexWrap={"wrap"} pb={10}>
        <SimpleGrid
          columns={{ base: 1, sm: 1, md: 2, lg: 3 }}
          gap={6}
          mt={10}
          px={4}
        >
          {filteredCards.map((card, idx) => {
            const { title, topic, tag, type } = card;
            const iconSrc = iconMap[type];
            const cardImage = getRandomImage();
            return (
              <Card.Root
                key={idx}
                variant="outline"
                borderRadius="14px"
                overflow="hidden"
                bg={"#fff"}
                position={"relative"}
                border={"1.42px solid #F2F2F2"}
                width={{ base: "300px", md: "264px" }}
                height={{ base: "397px", md: "275px" }}
              >
                <Box position="relative">
                  <Image src={cardImage} position={"absolute"} right={0} />
                  <Image
                    src={iconSrc}
                    position={"absolute"}
                    top={{ base: 12, md: 10 }}
                    left={{ base: 8, md: 4 }}
                    borderRadius={"50%"}
                    width={{ base: 47, md: 33 }}
                    height={{ base: 47, md: 33 }}
                  />
                </Box>
                <Card.Body
                  position={"absolute"}
                  bottom={{ base: 2, md: 0 }}
                  px={{ base: 8, md: 4 }}
                >
                  <Card.Title
                    color={"#222222"}
                    fontWeight={700}
                    fontSize={{ base: 22, md: 18 }}
                  >
                    {title}
                  </Card.Title>
                  <Card.Description
                    color="#828282"
                    my={4}
                    fontSize={{ base: 20, md: 14 }}
                  >
                    {topic}
                  </Card.Description>
                  <Box
                    bg={"#f2f2f2"}
                    px={4}
                    py={2}
                    borderRadius={"2xl"}
                    width={"fit-content"}
                  >
                    <Text
                      color={"#222222"}
                      fontWeight={500}
                      fontSize={14}
                      border={"none"}
                    >
                      {tag}
                    </Text>
                  </Box>
                </Card.Body>
              </Card.Root>
            );
          })}
        </SimpleGrid>
        {filteredCards.length === 0 && (
          <Flex justify="center" align="center" height="200px">
            <Text color="gray.500" fontSize="lg">
              No articles match your filters
            </Text>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}

export default ArticleCards;
