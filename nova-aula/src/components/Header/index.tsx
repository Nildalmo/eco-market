"use client";

import { Button } from "../Button";
import Input from "../Input";
import { StyleLink } from "../Link";
import * as S from "./Header.style";
import { AiOutlineSearch, AiFillInfoCircle } from "react-icons/ai";
import { BiUserCircle, BiSolidCartAlt, BiLogOutCircle } from "react-icons/bi";
import {
  Menu,
  MenuButton,
  Tooltip,
  Button as ChacKraButton,
  MenuList,
  MenuItem,
  IconButton as icoChackra,
  Heading,Text
} from "@chakra-ui/react";
import { useAuth } from "@/contexts/AuthContext";
import IconButton from "../iconButtom";
import Link from "next/link";

const Header: React.FC = () => {
  const { isloged, user, logOut } = useAuth();
  console.log(user);
  return (
    <S.Header>
      <S.HeaderTop>
        <p>Welcome to Eco Market</p>

        <div className="auth_nav">
          {!isloged ? (
            <>
              <StyleLink href="/login">Login</StyleLink>
              <StyleLink href="/register">Cadastre-se</StyleLink>
            </>
          ) : (
            <p>Olá {user?.nome}</p>
          )}
        </div>
      </S.HeaderTop>
      <S.HeaderCenter>
  <Heading fontSize="2xl">Food<Text as="span" color="orange.100">Market</Text>
  </Heading>
           
        <S.Nav>
          <Menu>
            <MenuButton
              color="gray.500 "
              as={icoChackra}
              icon={<BiUserCircle></BiUserCircle>}
            ></MenuButton>
            <MenuList>
              {isloged ? (
                <>
                  <MenuItem color="black" as={Link} href="/perfil">
                    Perfil
                  </MenuItem>
                  <MenuItem
                    as={ChacKraButton}
                    leftIcon={<BiLogOutCircle />}
                    onClick={logOut}
                  >
                    Sair
                  </MenuItem>
                </>
              ) : (
                <MenuItem as={Link} href="/register">
                  Criar Conta
                </MenuItem>
              )}
            </MenuList>
          </Menu>
          <Button variant="unstyled">
            <BiSolidCartAlt />
            Carrinho
          </Button>
        </S.Nav>
      </S.HeaderCenter>
    </S.Header>
  );
};

export default Header;
