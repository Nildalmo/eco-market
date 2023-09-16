export interface iSingIn {
  email: string;
  senha: string;
}

export interface iSingUp {
  nome: string;
  email: string;
  senha: string;
  confirmacaoSenha: string;
}

export interface iUser{
    id:number;
    nome:string;
    email:string;
}