import './Styles.css';
import './Anim.css';
import NavBar from './NavBar';
import { createContext, useState } from 'react';

export const Context = createContext();

function App() {
  const [scrollDelay, setSDelay] = useState(true); // Initialize with true for enabling the delay

  return (
    <Context.Provider value={{ scrollDelay, setSDelay }}>
      <NavBar />
    </Context.Provider>
  );
}

export default App;
