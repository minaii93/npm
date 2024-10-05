import './App.css';
import Kartya from './components/Kartya.js'
import {lista} from './adatLista.js'
import Kartyak from './components/Kartyak.js';

function App() {
  
  return ( // egy gyökérelemet (divet) tartalmazhat --- változóra hivatkozas {}-el
        <div className="App"> 
      <header className="App-header">
      Első app
      </header>
        <article >
          <Kartyak lista = {lista}/>
        </article>
      
      <footer>Saját név</footer>
    </div>
  );
}

export default App;
