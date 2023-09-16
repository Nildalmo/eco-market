"use client";
import Input from "@/components/Input";
import { useRouter } from "next/navigation";
import { Form } from "@/components/Form";
import React from "react";
import { Button } from "@/components/Button";
import { Divider } from "@/components/Divider";
import { StyleLink } from "@/components/Link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginValidation } from "@/validations/userAccess.validations";
import { iSingIn, iSingUp } from "@/types/userAccess";
import { useAuth } from "@/contexts/AuthContext";

export default function Login() {
  const { singIn } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iSingIn>({
    resolver: yupResolver(loginValidation),
  });

  return (
    <Form onSubmit={handleSubmit(singIn)}>
      <h2> Olá, bem vindo de volta!</h2>

      <Input
        variant="float"
        type="text"
        id="email"
        placeholder="Seu email..."
        {...register("email")}
        error={errors?.email?.message}
      />
      <Input
        variant="float"
        type="password"
        id="password"
        placeholder="Sua senha..."
        {...register("senha")}
        error={errors?.senha?.message}
      />

      <Button type="submit">Entrar</Button>

      <Divider />
      <small>
        não possui  uma conta?{" "}
        <StyleLink href="/resiter">Cadastre-se</StyleLink>
      </small>
    </Form>
  );
}
