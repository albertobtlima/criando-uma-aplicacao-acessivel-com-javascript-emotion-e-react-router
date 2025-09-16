import { Container } from "react-grid-system";
import { Cabecalho } from "./componentes/Cabecalho/Cabecalho";
import { CampoTexto } from "./componentes/CampoTexto/CampoTexto";
import { Card } from "./componentes/Card/Card";
import { Estilos } from "./componentes/EstilosGlobais/Estilos";
import { ProvedorTema } from "./componentes/ProvedorTema/ProvedorTema";
import { Tipografia } from "./componentes/Tipografia/Tipografia";
import { Rodape } from "./componentes/Rodape/Rodape";

function App() {
  return (
    <ProvedorTema>
      <Estilos />
      <Cabecalho>
        <h1>@Freelando</h1>
        <p>Login</p>
      </Cabecalho>
      <Container>
        <Card>
          <Tipografia variante="h1" componente="h1">
            <h2>Crie seu cadastro</h2>
          </Tipografia>
          <Tipografia variante="body" componente="body">
            Crie seu perfil gratuitamente para começar a trabalhar com os
            melhores freelancers. Em seguida, você poderá dar mais detalhes
            sobre suas demandas e sobre sua forma de trabalho.
          </Tipografia>
          <CampoTexto titulo="Nome Completo" />
        </Card>
      </Container>
      <Rodape>
        <h2>@Freelando</h2>
        <p>Desenvolvido por Alura. Projeto fictício sem fins comerciais.</p>
      </Rodape>
    </ProvedorTema>
  );
}

export default App;
