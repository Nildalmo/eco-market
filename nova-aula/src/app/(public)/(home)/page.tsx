"use client";

import BannerCard from "@/components/BannerCard";
import SeachForm from "@/components/SeachForm";
import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import StoreCard from "@/components/StoreCard";


export default function Home() {
  return (
    <Flex
      mt="3rem"
      as="main"
      flexDir={{ base: "column" }}
      alignItems="center"
      p={{ lg: "0 10%" , base: "0 5%" }}
    >
      <Heading mb="1rem">As Melhores comidas e Mequis do Brasil !!</Heading>
      <Text pb="2rem">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
        aspernatur unde suscipit quia.
      </Text>
      <SeachForm />
      <Flex mt="2rem" w={{ base: "90%", md: "80%", lg:"90%" }} gap="2rem"
      flexDir={{base: "column" , md:"row"}}
      >
        <BannerCard
          text="Lanches"
          link="/"
          src="/hamburguer.png"
          color="orange"
        />
        <BannerCard
          text="Mercados"
          link="/"
          src="/carrinho.png"
          color="green"
        />
      </Flex>
      <Box w="100%" mt="2rem" as="section" maxW="90vw">
        <Heading fontSize="2xl" mb="2rem">Lojas</Heading>
        <Stack direction={{base:"column", lg: "row"}}
         wrap="wrap" 
         justify="space-between"
         >
          <StoreCard
            id={1}
            nome="Emici Donaidis"
            nota={4.5}
            Categoria="lanches"
            distancia="1.2km"
            tempo="30-40 min"
            taxaEntrega={0}
            image_logo="https://placehold.co/100" path="/"          
          
          />
          <StoreCard
            id={2}
            nome="Emici Donaidis"
            nota={4.5}
            Categoria="lanches"
            distancia="1.2km"
            tempo="30-40 min"
            taxaEntrega={0}
            image_logo="https://placehold.co/100" path="/"          
          
          />
          <StoreCard
            id={3}
            nome="Emici Donaidis"
            nota={4.5}
            Categoria="lanches"
            distancia="1.2km"
            tempo="30-40 min"
            taxaEntrega={0}
            image_logo="https://placehold.co/100" path="/"          
          
          />
          <StoreCard
            id={4}
            nome="Emici Donaidis"
            nota={4.5}
            Categoria="lanches"
            distancia="1.2km"
            tempo="30-40 min"
            taxaEntrega={0}
            image_logo="https://placehold.co/100" path="/"          
          
          />
        </Stack>
      </Box>
    </Flex>
  );
}

