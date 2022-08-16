import { useEffect, useState } from 'react';
const pstyle = {
  backgroundColor: 'white',
  margin: '0 auto',
  border: '1px solid gray',
  width: '500px',
  marginBottom: '20px',
  padding: '10px',
  boxShadow: '2px 6px 6px 0px',
  color: 'gray',
  borderRadius: '4px',
};
const Counter = ({ numberOfCounters }) => {
  const [counterArray, setCounterArray] = useState(
    Array(numberOfCounters).fill(0),
  );
  function handleClick(index) {
    const tempArray = [...counterArray];
    tempArray[index] = tempArray[index] + 1;
    setCounterArray(tempArray);
  }
  return (
    <div>
      {counterArray.map((value, index) => {
        const counterName = index + 1;
        return (
          <p style={pstyle} key={index}>
            Counter {counterName} = {value} &nbsp;
            <button onClick={handleClick.bind(this, index)}>
              Increment Counter {counterName}
            </button>
          </p>
        );
      })}
    </div>
  );
};

export default Counter;
