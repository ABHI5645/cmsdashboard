
import './App.css';
import Navs from './Navs';
import { UserProvider } from './context/userContext';

function App() {
  return (
    <div className="App">
      <UserProvider>
     <Navs/>
     </UserProvider>
    </div>
  );
}

export default App;
