"use client";

import StarRating from '@/components/StarRating';
import { moneyFormat } from '@/utils/moneyFormat';
import { Box, Button, Flex,Heading,Image,Text, Icon} from '@chakra-ui/react';
import {use} from "react";
import { AiFillDollarCircle } from 'react-icons/ai';



export interface iLojaProps{
    params:{
        id:string;
    };
}

export default function Loja({params: { id } } : iLojaProps) {
   
    const dados: any = use(

        new Promise((resolve) => {
            setTimeout(
                () => 
            resolve({
                nome: "Emici Donaidis",
                nota:4.5,
                categoria:"Lanches",
                tempo:"30-40 min",
                distancia:"1.2KM",
                taxaEntregas:2.25,

            }),
            5000
            );
        })
        );
    return (
    
    <Flex 
    bg="gray.50" 
    direction="column" 
    align="center"
    mt="2rem"
    minH="100vh"
     >
        <Flex as="header" flexDir="column">
            <Image
             src="https://placehold.co/1200x250"
             alt={"Imagem de capa de empresa:" + dados.nome}
            borderRadius= "10px"
            />
        
        <Flex align="center" gap="1rem" mt="2rem">
            <Image 
            src="https://placehold.co/100" 
            alt={"Logo da empresa:" + dados.nome}
            borderRadius="full"
            />
            <Heading fontSize="1.5rem">{dados.nome}</Heading>
            <StarRating nota={dados.nota}/>
            <Flex ml="auto" gap={5}>
                <Button variant="unstyled" colorScheme="red">
                Ver Mais
                </Button>
                <Text as="small">
                    <Icon as={AiFillDollarCircle} />
                    Pedido Minimo {moneyFormat(31.00)}
                </Text>
            </Flex>
        </Flex>
        <Box>
            <Heading>Produtos</Heading>
        </Box>
        </Flex>
        </Flex>
    );
}  
   
    