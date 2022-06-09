import React from 'react';
import './App.css';
import Navbar from './Components/navbar/Navbar';
//import Formulario from './Components/navbar/formulario/Formulario';
import Servicios from './Components/servicios/Servicios';
//import ImportContactsIcon from '@mui/icons-material/ImportContacts';



function App() {

  return (
    <div className="App">
      <Navbar/>
      <Servicios/>
    </div>
  );
}

export default App;
