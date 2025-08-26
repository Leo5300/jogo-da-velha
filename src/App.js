// Criação do elemento Square que irá compor o tabuleiro
import 'src/App.css';

function Square({valor}){
  return(
  <button className='square'>valor</button>
  );
}

export default function tabuleiro() {
  return(
  <div>
    <div>
    <Square valor="1"></Square>
   <Square valor="2"></Square>
  <Square valor="3"></Square>
</div>
  <div>

 <Square valor="4"></Square>
  <Square valor="5"></Square>
   <Square valor="6"></Square>
</div>
<div>
   <Square valor="7"></Square>
  <Square valor="8"></Square>
  <Square valor="9"></Square>
 </div>
 </div>
)


}
