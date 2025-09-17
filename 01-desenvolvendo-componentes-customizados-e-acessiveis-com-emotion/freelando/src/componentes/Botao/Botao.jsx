import styled from "@emotion/styled";

const BotaoPrimario = styled.button`
  border-radius: ${(props) => props.theme.espacamentos.s};
  background: ${(props) => props.theme.cores.primarias.b};
  color: ${(props) => props.theme.cores.branco};
  padding: ${(props) => props.theme.espacamentos.xs};
  margin: ${(props) => props.theme.espacamentos.s};
  font-weight: 700;
  border: none;
  cursor: pointer;
`;

const BotaoSecundario = styled.button`
  border-radius: ${(props) => props.theme.espacamentos.s};
  background: transparent;
  color: ${(props) => props.theme.cores.primarias.b};
  padding: ${(props) => props.theme.espacamentos.xs};
  margin: ${(props) => props.theme.espacamentos.s};
  border: 2px solid ${(props) => props.theme.cores.primarias.b};
  font-weight: 700;
  cursor: pointer;
`;

export const Botao = ({ variante = "primaria", children }) => {
  if (variante === "primaria") {
    return <BotaoPrimario>{children}</BotaoPrimario>;
  }

  return <BotaoSecundario>{children}</BotaoSecundario>;
};
