/* import logo from './logo.svg'; */
/* import './App.css'; */
import { AppProvider } from './Context/context';
import { AppUI } from './AppUI/AppUI';

function App() {
  return (
    <AppProvider>
      <AppUI />
    </AppProvider>
  );
}

export default App;
