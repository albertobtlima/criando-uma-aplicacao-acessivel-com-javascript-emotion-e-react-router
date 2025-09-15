import { Cabecalho } from "./componentes/Cabecalho/Cabecalho";
import { Card } from "./componentes/Card/Card";
import { Estilos } from "./componentes/EstilosGlobais/Estilos";
import { ProvedorTema } from "./componentes/ProvedorTema/ProvedorTema";

function App() {
  return (
    <ProvedorTema>
      <Estilos />
      <Cabecalho>
        <h1>@Freelando</h1>
        <p>Login</p>
      </Cabecalho>
      <Card>
        <h2>Crie seu cadastro</h2>
      </Card>
    </ProvedorTema>
  );
}

export default App;
