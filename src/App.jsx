import React, { useState } from 'react';
import GenreList from "./GenreList";
import MovieList from "./MovieList";
import './App.css';

function App() {
	const [selectedGenre, setSelectedGenre] = useState(null);
	return (
		<div className="app-container">
			<h1>Movie Player</h1>
			<div className="content">
				<GenreList selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre} />
				<MovieList selectedGenre={selectedGenre} />
			</div>
		</div>
	);
}

export default App;
