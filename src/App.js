import "./styles.css";
import LoginForm from "../LoginForm";
import RandomPokemon from "../RandomPokemon";
function Greeter(){
   return <h1>Hello</h1>
}

export default function App() {
  return (
    <div className="App">
      <RandomPokemon/>
    </div>
  );

}
