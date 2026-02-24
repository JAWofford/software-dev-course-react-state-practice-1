import {genres} from "./mock-data/genres";
import "./GenreList.css";

export default function GenreList ({selectedGenre, setSelectedGenre}){
    return (
       <ul className="genre-list">
      {genres.map((genre) => (
        <li 
            key={genre.id}
            onClick = {()=> setSelectedGenre(genre.name)}
            className = {selectedGenre === genre.name ? "selected" : ""}
        >
            {genre.name}</li>
      ))}
    </ul>
   );
}