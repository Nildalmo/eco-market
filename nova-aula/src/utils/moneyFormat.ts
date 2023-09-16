export const moneyFormat = (valeu: number) =>
 valeu.toLocaleString("pt-br", {style:"currency", currency: "BRL"});