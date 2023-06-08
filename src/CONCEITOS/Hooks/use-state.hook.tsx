import { useState } from "react";

/**
 * 
 * O uso de useState deve ser SEMPRE utilizado no inicio do componente,
 * não deve ser utilizado dentro de funções/condições dentre outros, para mais infos:
 * https://react.dev/learn/state-a-components-memory CTRL+F "Pitfall"
 * 
 * CONVENÇÃO: const [something, setSomething]
 * 
 */

function AprendizadoUseState() {

  let [count, setCount] = useState<number>(0);

  function addCount() {
    setCount(count + 1);
  }

  function lessCount() {
    setCount(count - 1);
  }

  return (
    <>
      <button onClick={addCount}>aumentar os numeros</button>
      <span>{ count }</span>
      <button onClick={lessCount}>diminuir os numeros</button>
    </>
  );
}

export default AprendizadoUseState;