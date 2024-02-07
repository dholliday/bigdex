"use client";

import { Heading, Box, Text, Center, Link, Image } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Bungee_Spice } from "next/font/google";

const bungeeSpice = Bungee_Spice({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <Box as="main">
      <Box as="section" bg="#2496af" color="white" pb="4em" pt="1em">
        <Center>
          <Text fontSize="8em" className={bungeeSpice.className}>
            $BIGDEX
          </Text>
        </Center>
        <Center>
          <Text pt="1em" fontSize="2em">
            WTF. How big is your DEX? Eat stake. Grow $BIGDEX.
          </Text>
        </Center>
        <Box mt="2em" color="purple" fontWeight="900">
          <Center>
            <Link
              href="https://explorer.solana.com/address/b9r4vNai5wpjWUZ2nqz6bcsMhyH8F3oSCVzWt97TFBp"
              isExternal
            >
              b9r4vNai5wpjWUZ2nqz6bcsMhyH8F3oSCVzWt97TFBp{" "}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </Center>
        </Box>
        <Box>
          <Center>
            <Image src="/img/logo.webp" alt="Big Dex Logo" />
          </Center>
        </Box>
      </Box>
    </Box>
  );
}
