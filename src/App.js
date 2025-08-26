import './App.css';

// Criação do componente Square
function Square({ valor }) {
  function handleClick() {
    console.log("Botão clicado!!!");
  }

  return (
    <button className='square' onClick={handleClick}>
      {valor}
    </button>
  );
}

// Criação do componente Tabuleiro
export default function Tabuleiro() {
  return (
    <div>
      <div>
        <Square valor="1" />
        <Square valor="2" />
        <Square valor="3" />
      </div>
      <div>
        <Square valor="4" />
        <Square valor="5" />
        <Square valor="6" />
      </div>
      <div>
        <Square valor="7" />
        <Square valor="8" />
        <Square valor="9" />
      </div>
    </div>
  );
}
