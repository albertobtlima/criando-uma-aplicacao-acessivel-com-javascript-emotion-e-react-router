import { Tipografia } from "../../componentes/Tipografia/Tipografia";

import clienteConcluido from "./assets/cliente-concluido.png";

const Concluido = () => {
  return (
    <>
      <Tipografia variante="h1" componente="h1">
        Seu perfil está completo!
      </Tipografia>
      <Tipografia variante="body" componente="body">
        Crie seu perfil gratuitamente para começar a trabalhar com os melhores
        freelancers.
      </Tipografia>
    </>
  );
};

export default Concluido;
