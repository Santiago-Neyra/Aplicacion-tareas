
import './App.css';

import {Titulo} from "./components/titulo/titulo.js";
import { ItemListContainer } from './components/itemListContainer/itemListContainer';
import { NuevaTarea } from './components/nuevaTarea/nuevaTarea';
import react from 'react';
import { CuentaRegresiva } from './components/contador/contador';


function App() {

  

  return (
    
    
    <div className="App container-fluid">
      
      

      <div id='cuenta'> <CuentaRegresiva></CuentaRegresiva></div>

     
      
    <Titulo frase="Si puedes soñarlo, puedes hacerlo." />

    <ItemListContainer/>    
    
      
    </div>
    
    
  );
  }

export default App;
