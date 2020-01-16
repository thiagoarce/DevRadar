import React from 'react';
import Header from './Header'

//Componente: Bloco isolado de HTML, CSS, JS, o qual não interfere no restante da aplicação
//Propriedade: 
//Estado:
//<></> Fragment: Usa para colocar componentes juntos

function App() {
  return (
    <>
    <Header title="Dashboard"/>
    <Header title="Titulo 2"/>
    <Header title="Título 4"/>
    </>
  );
}

export default App;
