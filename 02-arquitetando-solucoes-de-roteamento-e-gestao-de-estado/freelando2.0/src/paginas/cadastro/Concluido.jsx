import { Botao } from "../../componentes/Botao/Botao";
import { Link } from "react-router-dom";
import clienteConcluido from "./assets/cliente-concluido.png";
import styled from "@emotion/styled";
import CabecalhoCadastro from "../../componentes/CabecalhoCadastro/CabecalhoCadastro";

const ImagemConclusao = styled.img`
  max-width: 100%;
  border-radius: 16px;
`;

const Concluido = () => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <CabecalhoCadastro titulo="Seu perfil está completo!" />
        <CabecalhoCadastro
          descricao="Agora é só começar a se conectar com os melhores freelancers do
          mercado!"
        />
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
