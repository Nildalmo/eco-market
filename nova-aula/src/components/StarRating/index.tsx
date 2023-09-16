import { Box,Icon } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import React from "react";



export interface iStarRatingProps{
    nota:number;

}

const StarRating: React.FC<iStarRatingProps> = ({nota}) => (<Box color="yellow.
500">
   <Icon as={FaStar} /> {nota}
   </Box>
)

export default StarRating;
