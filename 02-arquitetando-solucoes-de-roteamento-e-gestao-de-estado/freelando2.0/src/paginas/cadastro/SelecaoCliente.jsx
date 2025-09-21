import { Col, Row } from "react-grid-system";
import { Tipografia } from "../../componentes/Tipografia/Tipografia";
import { Link } from "../../componentes/Link/Link";

import cliente from "./assets/cliente.png";
import freela from "./assets/freela.png";

const SelecaoCliente = () => {
  return (
    <>
      <Tipografia variante="h1" componente="h1">
        Crie seu cadastro
      </Tipografia>
      <Tipografia variante="h3" componente="h2">
        Como podemos te ajudar?
      </Tipografia>
      <Row>
        <Col md={6} sm={12}>
          <img src={cliente} alt="Cliente imagem" />
          <Tipografia variante="body" componente="body">
            Sou cliente e preciso de um freela!
          </Tipografia>
        </Col>
        <Col md={6} sm={12}>
          <img src={freela} alt="Freela imagem" />
          <Tipografia variante="body" componente="body">
            Sou freela e preciso de cliente!
          </Tipografia>
        </Col>
      </Row>
      <div style={{ textAlign: "center" }}>
        <Tipografia variante="body2" componente="body2">
          Já tem conta?
        </Tipografia>
        <p>
          <Link variante="secundaria">Faça login!</Link>
        </p>
      </div>
    </>
  );
};

export default SelecaoCliente;
