import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';

function App() {



  const toggleMode= () => {
    if(mode==='light'){
      setMode('dark');
      showAlert("Dark mode has been enabled","success");
    }
    else {setMode('light');
    showAlert("Light mode has been enabled","success");}
  }
  const [mode,setMode]= useState('light'); 
  const [alert, setalert] = useState(null);

  const showAlert = (msg,type) => {
    setalert({
      msg: msg,
      type: type
    })
    
  }
  return (
    <>
    <Navbar title='Text Manupulator' mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
    <div className="container">
    <TextForm heading='Input Text Here' />
    </div>
    </>
  );
}

export default App;
