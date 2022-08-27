import Card from "./Card";
import { Flex, Box, SimpleGrid, Grid, GridItem } from "@chakra-ui/react";
import PointGrid from "./PointGrid";
import PlayerListCard from "./PlayerListCard";

export default function Hero() {
  return (
    <Box>
      {" "}
      <SimpleGrid
        columns={{
          sm: 1,
          md: 3,
        }}
        spacingY="20px"
      >
        <Box w="100%" height={"100%"}>
          <Card />
        </Box>
        <Box w="100%" pt={{ sm: "0", md: "14" }}>
          <PointGrid />
        </Box>
        <Box w="100%">
          <PlayerListCard />
        </Box>
      </SimpleGrid>
    </Box>
  );
}
