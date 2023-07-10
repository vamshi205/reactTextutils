
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {

  const [mode, setMode] = useState("light");
  const [style, setStyle] = useState({color:"black"});
  
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setStyle({color:"white"})
      document.body.style.backgroundColor = '#2D4356';
    }
    else {
      setMode("light");
      setStyle({color:"black"})
       document.body.style.backgroundColor = '#ffff';
    }
  }
  return (
    <div className="App">
      <Navbar title="Text-Utility" toggleMode={toggleMode} mode={mode} style={style}/>
      <Textform style={style} mode={mode}  />
    </div>
  );
}
export default App;
