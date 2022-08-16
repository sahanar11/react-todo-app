import { useState } from 'react';

export default function () {
  const [counter, setCounter] = useState(0);
  function handleIncrement() {
    setCounter(counter + 1);
  }
  return (
    <>
      <p>
        Counter = {counter} &nbsp;
        <button onClick={handleIncrement}>Increment Counter</button>
      </p>
    </>
  );
}
