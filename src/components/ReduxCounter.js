import { useSelector, useDispatch } from 'react-redux';
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../redux/actions';

export default function () {
  const dispatch = useDispatch();
  const { counter, reward, decrementButtonDisabled } = useSelector(
    reduxState => reduxState.counterState,
  );
  const { incrementedAtleastOnce, decrementedAtleastOnce } = useSelector(
    reduxState => reduxState.uiState,
  );
  function handleIncrement() {
    dispatch(INCREMENT_COUNTER());
  }
  function handleDecrement() {
    dispatch(DECREMENT_COUNTER());
  }

  return (
    <>
      <p>
        Counter = {counter} <br />
        Reward = {reward} <br />
        <button onClick={handleIncrement}>Increment Counter</button> <br />
        <button disabled={decrementButtonDisabled} onClick={handleDecrement}>
          Decrement Counter
        </button>
      </p>
      <p>
        incrementedAtleastOnce={incrementedAtleastOnce}
        <br />
        decrementedAtleastOnce={decrementedAtleastOnce}
      </p>
    </>
  );
}
