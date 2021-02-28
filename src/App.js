import './App.css';

import CustomSwitch from "./switch";
import navBarWithSwitch from './components/NavBar';

const App = () => (
  <>
    <div className="App">
      {navBarWithSwitch(CustomSwitch)}
    </div>
  </>
);

export default App;
