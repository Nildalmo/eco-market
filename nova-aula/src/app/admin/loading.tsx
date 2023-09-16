
"use client";

import { Center, Heading, Text, Spinner } from "@chakra-ui/react";
 
export default function loading  ()  {
    return(
        <Center w="100vw" h="100vh" bgColor="orange.300">
            <Heading fontSize="2xl">
                Food {""}
                <Text as="span" color="orange.100">
                    Market
                    </Text>
                    </Heading>
                   <Spinner size={{base:"sm", md:"xl"}} color="orange.100"
                   />

        </Center>
    );
}