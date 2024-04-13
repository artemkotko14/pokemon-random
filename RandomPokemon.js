import "../RandomPokemon.css";
export default function RandomPokemon() {
  // const random = Math.floor((Math.random() * 151) + 1)
  // const baseUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${random}.png`;
  //  src={ baseUrl }
  const baseUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";
  const random = Math.floor(Math.random() * 151 + 1);
  return (
    <div className="RandomPokemon">
      <h1>Pokemon# {random}</h1>
      <img src={baseUrl + random + ".png"} alt={"Pokemon#" + random} />
    </div>
  );
}
