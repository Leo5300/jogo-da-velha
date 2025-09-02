import { useState } from 'react';
import './App.css';

// Componente de cada quadrado
function Square({ valor, onSquareClick }) {
  return (
    <button className="Square" onClick={onSquareClick}>
      {valor}
    </button>
  );
}

// Componente principal do jogo
export default function Tabuleiro() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const vencedor = haVencedor(squares);

  function handleClick(i) {
    if (squares[i] || vencedor) return;

    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  return (
    <div className="game-container">
      {vencedor && <div className="status">Vencedor: {vencedor}</div>}

      <div className="board-row">
        <Square valor={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square valor={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square valor={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square valor={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square valor={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square valor={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square valor={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square valor={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square valor={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div>
  );
}

// Função para verificar se há um vencedor
function haVencedor(squares) {
  const linhasVencedoras = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // linhas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // colunas
    [0, 4, 8], [2, 4, 6],           // diagonais
  ];

  for (let linha of linhasVencedoras) {
    const [a, b, c] = linha;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; // retorna "X" ou "O"
    }
  }

  return null; // nenhum vencedor
}
