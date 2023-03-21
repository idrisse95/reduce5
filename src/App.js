
import { Provider } from 'react-redux'
import './App.css';
import { List } from './components/Liste';
import { store } from './redux';

function App() {
  return (
    <div className="App">
      <Provider store={store}><List/></Provider>
    </div>
  );
}

export default App;
