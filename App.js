import './App.css';
import enviar_a_log_in from './funciones.js';

function App() {
  return (
    <div className="App">
     
     <body bgcolor="#FFFDD0"> 

    <br> </br> 

    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Arca_Continental_logo.svg/1200px-Arca_Continental_logo.svg.png" height="150" width="350" class="center">
    </img>

    <br> </br> <br> </br> <br> </br> <br> </br> <br> </br> 

    <button type="button" id="log_in" class="center" onclick="enviar_a_log_in()"> Log-in </button>

    <br> </br> 

    </body>

    </div>
  );
}

export default App;
