import { Provider as ReduxProvider } from 'react-redux';
import './App.css';
import getStore from './redux/getStore';

import ReduxCounter from './components/ReduxCounter';

const store = getStore();

function App() {
  return (
    <ReduxProvider store={store}>
      <div className="App">
        <h1>Counters</h1>
        <ReduxCounter />
      </div>
    </ReduxProvider>
  );
}

export default App;
