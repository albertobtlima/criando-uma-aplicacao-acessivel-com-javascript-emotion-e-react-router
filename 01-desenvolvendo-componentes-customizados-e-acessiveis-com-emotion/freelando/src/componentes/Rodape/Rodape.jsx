import styled from "@emotion/styled";

const FundoRodape = styled.footer`
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme.cores.neutras.c};
  background: ${(props) => props.theme.cores.primarias.a};
  padding: ${(props) => props.theme.espacamentos.xl};
  color: ${(props) => props.theme.cores.branco};
`;

const RedesSociais = styled.ul`
  list-style: none;
  display: flex;
  gap: 10px;
`;

export const Rodape = () => {
  return (
    <FundoRodape>
      <div>
        <h2>@freelando</h2>
        <p>Desenvolvido por Alura. Projeto fictício sem fins comerciais.</p>
      </div>
      <div>
        <p>Acesse nossas redes:</p>
        <RedesSociais>
          <li>
            <img src="./public/whatsapp.png" alt=""></img>
          </li>
          <li>TW</li>
          <li>IT</li>
        </RedesSociais>
      </div>
    </FundoRodape>
  );
};
