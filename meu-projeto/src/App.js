import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';

function App() {
  const name = 'Maria'
  return (
    <div className="App">
      <SayMyName nome="Vinicius"/>
      <SayMyName nome="João"/>
      <SayMyName nome={name}/>
      <Pessoa 
        foto="https://via.placeholder.com/150"
        nome ='Vinicius'
        idade="21" 
        profissao="Programador"
      />
      <Pessoa 
        foto="https://via.placeholder.com/150"
        nome ='Pedro'
        idade="23" 
        profissao="Engenheiro"
      />
      <Frase/>
      <Frase/>
    </div>
  );
}

export default App;
