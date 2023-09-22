import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  StyleProps,
} from "@chakra-ui/react";

export interface iProductCardProps {
  nome: string;
  preco: number;
  descricao: string;
  image: string;
  direction?: StyleProps["flexDir"];
}

export const ProductCard: React.FC<iProductCardProps> = ({
  nome,
  preco,
  descricao,
  image,
  direction,
}) => {
  function moneyFormat(preco: number): import("react").ReactNode {
    throw new Error("Function not implemented.");
  }

  return (
    <Card
      maxW={direction === "row" ? "100%" : "sm"}
      _hover={{ transform: "scale(1.01)" }}
      transition="all .3s"
      as="li"
      direction={direction}
    >
      {direction === "row" && (
        <Image
          objectFit="cover"
          src={image}
          alt={`Imagem do produto: ${nome}`}
          title={nome}
        />
      )}
      <CardBody>
        {direction !== "row" && (
          <Image src={image} alt={`Imagem do produto: ${nome}`} title={nome} />
        )}
        <Stack>
          <Heading size="md">{nome}</Heading>
          <Text color="green.300">{moneyFormat(preco)}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
