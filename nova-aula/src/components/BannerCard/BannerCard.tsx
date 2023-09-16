import Link from "next/dist/client/link";

import { Box,Button, Image, Text } from "@chakra-ui/react";
import { iBannerCardProps } from ".";

export const BannerCard: React.FC<iBannerCardProps> = ({
  src,
  text,
  link,
  color,
}) => {
  return (
    <Box
      position="relative"
      w="50%"
      bgColor={color === "orange" ? "orange.100" : "green.200"}
      h="200px"
      p="1rem"
      flexDir="column"
      justifyContent="space-between"
    >
      <Text color="white" fontSize="lg">{text}</Text>
      <Image
        w="60%"
        h="100px"
        objectFit="contain"
        src={src}
        alt={text}
        title={text}
        position="absolute"
        left="0"
      />

      <Button variant="outline" color="white" as={Link} href={link} w="fit-content">
        ver Opções
      </Button>
    </Box>
  );
};
