import { Botao } from "../../componentes/Botao/Botao";
import { Link } from "react-router-dom";
import { Tipografia } from "../../componentes/Tipografia/Tipografia";

import clienteConcluido from "./assets/cliente-concluido.png";
import styled from "@emotion/styled";

const ImagemConclusao = styled.img`
  max-width: 100%;
  border-radius: 16px;
`;

const Concluido = () => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Tipografia variante="h1" componente="h1">
          Seu perfil está completo!
        </Tipografia>
        <Tipografia variante="body" componente="body">
          Agora é só começar a se conectar com os melhores freelancers do
          mercado!
        </Tipografia>
      </div>

      <figure>
        <ImagemConclusao src={clienteConcluido} alt="Imagem conclusão" />
      </figure>

      <div style={{ textAlign: "center" }}>
        <Link to="/cadastro">
          <Botao variante="secundaria">Voltar para a home</Botao>
        </Link>
      </div>
    </>
  );
};

export default Concluido;
