'use client'

import { Button } from "../Button";
import { Input } from "../Input";
import { StyleLink } from "../Link";
import IconButton from "../iconButtom";
import * as S from "./Header.style";
import {AiOutlineSearch} from "react-icons/ai";
import {BiUserCircle, BiSolidCartAlt} from "react-icons/bi";




const Header: React.FC = () => {
    return(
        
        <S.Header>
            <S.HeaderTop>

                <p>Welcome to Eco Market</p>
                
                <div>
                    <StyleLink href="/login">Login</StyleLink>
                    <span />
                    <StyleLink href="/register">cadastre-se</StyleLink>

       
                </div>

            </S.HeaderTop>
            <S.HeaderCenter>

            <h1>Eco MarKet</h1>

            <div>
            <Input placeholder="Busque por..." />
            <IconButton icon={AiOutlineSearch} />
            </div>
            <S.Nav>
              <Button variant="unstyled">
               < BiUserCircle />
               Perfil
               </Button>  
               <Button  variant="unstyled">
              <BiSolidCartAlt/>
              Carrinho
               </Button>
            </S.Nav>
            
            </S.HeaderCenter>
            </S.Header>
    );

};  

export default Header;