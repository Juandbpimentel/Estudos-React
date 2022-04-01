import './App.css';
import HelloWorld from './components/HelloWorld';


function App() {
  const url = 'https://via.placeholder.com/150'
  return (
    <div className="App">
      <h1>Alterando JSX</h1>
      <HelloWorld/>
      <img src={url} alt='Minha imagem' />
    </div>
  );
}

export default App;
