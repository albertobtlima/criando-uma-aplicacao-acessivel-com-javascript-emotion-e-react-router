import styled from "@emotion/styled";

export const Cabecalho = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 400;
  color: ${(props) => props.theme.cores.neutras.c};
  background: ${(props) => props.theme.cores.primarias.a};
  padding: ${(props) => props.theme.espacamentos.m};
`;
