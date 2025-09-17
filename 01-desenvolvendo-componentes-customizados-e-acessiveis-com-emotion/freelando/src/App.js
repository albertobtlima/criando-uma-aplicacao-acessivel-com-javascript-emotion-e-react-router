import { Col, Container, Row } from "react-grid-system";
import { Cabecalho } from "./componentes/Cabecalho/Cabecalho";
import { CampoTexto } from "./componentes/CampoTexto/CampoTexto";
import { Card } from "./componentes/Card/Card";
import { Estilos } from "./componentes/EstilosGlobais/Estilos";
import { ProvedorTema } from "./componentes/ProvedorTema/ProvedorTema";
import { Tipografia } from "./componentes/Tipografia/Tipografia";
import { Rodape } from "./componentes/Rodape/Rodape";
import { Botao } from "./componentes/Botao/Botao";
import { FreelandoLogo } from "./componentes/Icones/FreelandoLogo";
import { Link } from "./componentes/Link/Link";

function App() {
  return (
    <ProvedorTema>
      <Estilos />
      <Cabecalho>
        <Container>
          <Row align="center">
            <Col>
              <FreelandoLogo />
            </Col>
            <Col>
              <Link>Login</Link>
            </Col>
          </Row>
        </Container>
      </Cabecalho>
      <Container style={{ margin: "80px 0" }}>
        <Row justify="center">
          <Col sm={12} md={8} lg={6}>
            <Card>
              <Tipografia variante="h1" componente="h1">
                <h2>Crie seu cadastro</h2>
              </Tipografia>
              <Tipografia variante="body" componente="body">
                Crie seu perfil gratuitamente para começar a trabalhar com os
                melhores freelancers. Em seguida, você poderá dar mais detalhes
                sobre suas demandas e sobre sua forma de trabalho.
              </Tipografia>
              <Row>
                <Col>
                  <CampoTexto titulo="Nome Completo" />
                </Col>
              </Row>
              <Row>
                <Col sm={4} md={4} lg={4}>
                  <CampoTexto titulo="Estado" />
                </Col>
                <Col sm={8} md={8} lg={8}>
                  <CampoTexto titulo="Cidade" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <CampoTexto titulo="E-mail" />
                </Col>
              </Row>
              <Row>
                <Col sm={6} md={6} lg={6}>
                  <CampoTexto titulo="Senha" />
                </Col>
                <Col sm={6} md={6} lg={6}>
                  <CampoTexto titulo="Repita a Senha" />
                </Col>
              </Row>
              <Row justify="space-between">
                <Botao variante="secundaria">Anterior</Botao>
                <Botao variante="primaria">Próximo</Botao>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
      <Rodape />
    </ProvedorTema>
  );
}

export default App;
