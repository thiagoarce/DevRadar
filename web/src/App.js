import React, { useState } from 'react';

//Componente: Bloco isolado de HTML, CSS, JS, o qual não interfere no restante da aplicação
//Propriedade: Informações que um componente PAI passa para o componente FILHO
//Estado: Informações mantidas pelo componente (imutabilidade)
//<></> Fragment: Usa para colocar componentes juntos

function App() {
  const [counter, setCounter] = useState(0);

  function incrementCounter() {
    setCounter(counter +1)
  }

  return (
    <>
      <h1>Contador: {counter}</h1>
      <button onClick={incrementCounter}>Incrementar</button>
    </>
  );
}

export default App;
