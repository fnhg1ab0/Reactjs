import React, {useCallback, useEffect} from 'react';
import AddMovie from './components/AddMovie';
import MoviesList from './components/MoviesList';
import './App.css';

function App() {
    const [movies, setMovies] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    // const fetchMoviesHandler = () => {
    //     fetch('https://swapi.dev/api/films')
    //         .then(response => {
    //             return response.json();
    //         })
    //         .then(data => {
    //             const getMovies = data.results.map(movie => {
    //                 return {
    //                     id: movie.episode_id,
    //                     title: movie.title,
    //                     openingText: movie.opening_crawl,
    //                     releaseDate: movie.release_date,
    //                 }
    //             });
    //             setMovies(getMovies);
    //             console.log("Fetch Movies API Successfully");
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         });
    // }

    // or

    const fetchMoviesHandler = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch('https://react-http-api-efe38-default-rtdb.firebaseio.com/movies.json');
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const data = await response.json();
            if (!data) {
                throw new Error('Found no movies.');
            }

            const getMovies = [];
            for (const key in data) {
                getMovies.push({
                    id: key,
                    title: data[key].title,
                    openingText: data[key].openingText,
                    releaseDate: data[key].releaseDate,
                });
            }
            setMovies(getMovies);
            console.log("Fetch Movies API Successfully");
        } catch (error) {
            setError(error.message);
        }
        setIsLoading(false);
    }, []);

    useEffect(() => {
        fetchMoviesHandler();
    }, [fetchMoviesHandler]);

    async function addMovieHandler(movie) {
        const response = await fetch('https://react-http-api-efe38-default-rtdb.firebaseio.com/movies.json', {
            method: 'POST',
            body: JSON.stringify(movie),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const data = await response.json();
        console.log(data);
        await fetchMoviesHandler();
    }

    let content = <p>Found no movies.</p>;
    if (movies.length > 0) {
        content = <MoviesList movies={movies}/>;
    }
    if (error) {
        content = <p>{error}</p>;
    }
    if (isLoading) {
        content = <p>Loading...</p>;
    }

    return (
        <React.Fragment>
            <section>
                <AddMovie onAddMovie={addMovieHandler}/>
            </section>
            <section>
                <button onClick={fetchMoviesHandler}>Fetch Movies</button>
            </section>
            <section>
                {content}
            </section>
        </React.Fragment>
    );
}

export default App;
