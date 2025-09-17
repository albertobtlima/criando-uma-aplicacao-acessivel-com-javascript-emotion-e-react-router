import styled from "@emotion/styled";
import { IconeTwitter } from "../Icones/IconeTwitter";
import { IconeWhatsApp } from "../Icones/IconeWhatsApp";
import { IconeTwitch } from "../Icones/IconeTwitch";
import { IconeInstagram } from "../Icones/IconeInstagram";
import { FreelandoLogo } from "../Icones/FreelandoLogo";

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
  margin-left: 0;
  padding-left: 0;
  display: flex;
  gap: 10px;
`;

export const Rodape = () => {
  return (
    <FundoRodape>
      <div>
        <FreelandoLogo />
        <p>Desenvolvido por Alura. Projeto fictício sem fins comerciais.</p>
      </div>
      <div>
        <p>Acesse nossas redes:</p>
        <RedesSociais>
          <li>
            <a href="/">
              <IconeWhatsApp />
            </a>
          </li>
          <li>
            <a href="/">
              <IconeTwitch />
            </a>
          </li>
          <li>
            <a href="/">
              <IconeInstagram />
            </a>
          </li>
          <li>
            <a href="/">
              <IconeTwitter />
            </a>
          </li>
        </RedesSociais>
      </div>
    </FundoRodape>
  );
};
