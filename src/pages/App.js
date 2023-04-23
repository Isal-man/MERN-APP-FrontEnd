
import { store } from '../config';
import Routing from '../config/Routes';
import './App.css';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Routing />
    </Provider>
  );
}

export default App;
