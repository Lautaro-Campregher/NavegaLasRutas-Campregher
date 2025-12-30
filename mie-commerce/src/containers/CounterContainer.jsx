import { useState } from "react";

import Counter from "../components/Carrito/Counter";

function CounterContainer({ onAdd }) {
  const [counter, setCounter] = useState(1);

  function handleChange(e) {
    const value = Number(e.target.value);
    if (value >= 1) {
      setCounter(value);
    }
  }

  function handleAdd() {
    onAdd(counter);
    setCounter(1);
  }

  return (
    <Counter
      counter={counter}
      handleChange={handleChange}
      handleAdd={handleAdd}
    />
  );
}
export default CounterContainer;
