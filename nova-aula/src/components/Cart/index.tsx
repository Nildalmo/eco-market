import { useCart } from "@/contexts/CartContext";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import CartProduct from "../CardProdut";
import { moneyFormat } from "@/utils/moneyFormat";

export interface iCartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<iCartProps> = ({ isOpen, onClose }) => {
  const { cartProduts, total } = useCart();
  return (
    <Drawer placement="right" onClose={onClose} isOpen={isOpen} size="xs">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader
          display="flex"
          flexDir="column"
          justifyContent="space-between"
        >
          Carrinho
        </DrawerHeader>
        <DrawerBody>
          <Stack>
            {cartProduts.length ? (
              cartProduts.map((product) => (
                <CartProduct key={product.id} {...product} />
              ))
            ) : (
              <Heading>O Carrinho está Vazio</Heading>
            )}
          </Stack>
          <Box>
            <Flex w="100%" justifyContent="space-between">
              <Text>{moneyFormat(total)}</Text>
            </Flex>
            <Button
              bgColor="green"
              color="#fff"
              w="100%"
              mt="2rem"
              _hover={{ bgColor: "green.300" }}
            >
              Finalizar
            </Button>
          </Box>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default Cart;
