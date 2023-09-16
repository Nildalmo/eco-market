"use client";

import { Button } from "@/components/Button";
import { Form } from "@/components/Form";
import Input from "@/components/Input";
import { StyleLink } from "@/components/Link";
import { Divider } from "@/components/Divider";
import { useRouter } from "next/navigation";
import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { iSingUp } from "@/types/userAccess";
import { registerValidation } from "@/validations/userAccess.validations";

export default function Login() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerValidation),
  });

  const singUp = (values: iSingUp) => console.log(values);

  return (
    <Form onSubmit={handleSubmit(singUp)}>
      <h2>Seja bem-vindo ao Food Market</h2>
      <Input
        variant="float"
        type="text"
        id="nome"
        placeholder="Seu nome..."
        {...register("nome")}
        error={errors?.nome?.message}
      />
      <Input
        variant="float"
        type="text"
        id="email"
        placeholder="Sua email..."
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
      <Input
        variant="float"
        type="password"
        id="password"
        placeholder="Confirme sua senha..."
        {...register("confirmacaoSenha")}
        error={errors?.confirmacaoSenha?.message}
      />
      <Button type="submit">Cadastrar-se</Button>
      <Divider />
      <small>
        Já possui uma conta? <StyleLink href="/login">Acesse já!</StyleLink>
      </small>
    </Form>
  );
}
