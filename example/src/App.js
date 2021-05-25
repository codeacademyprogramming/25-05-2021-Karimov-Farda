import Shop from "./components/Shop";
import './App.css';

import { UserProvider } from "./contexts/userContext";
// import { GlobContextProvider } from "./contexts/globContext";


function App() {
  return (
    <div className="App">
      <UserProvider>
        <Shop />
      </UserProvider>
    </div>
  );
}

export default App;
