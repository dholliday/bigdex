"use client";

import { Heading, Box, Text, Center } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box as="main">
      <Box as="section" bg="#2496b1" color="white" pb="4em" pt="1em">
        <Center>
          <Heading fontSize="6em">$BIGDEX</Heading>
        </Center>
        <Center>
          <Text pt="1em" fontSize="2em">
            How big is your dex? Eat stake. Grow $BIGDEX
          </Text>
        </Center>
      </Box>
    </Box>
  );
}
