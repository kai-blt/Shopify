import { MovieCard, NominatedCard } from './';
import { useSelector } from 'react-redux';

const Results = (props) => {
  const movies = useSelector(state => state.search.movies);
  const nominated = useSelector(state => state.nominated.movies);

  return (
    <>
    <div className="flex flex-wrap justify-evenly">
      {movies 
        ? movies.map(m => {
            const { Title, Year, Poster, imdbID } = m;
            return (
              nominated.filter(n => JSON.stringify(n) === JSON.stringify(m)).length > 0
              ? <NominatedCard Title={Title} Year={Year} Poster={Poster} imdbID={imdbID} movie={m} key={Math.random()} />
              : <MovieCard Title={Title} Year={Year} Poster={Poster} imdbID={imdbID} movie={m} key={Math.random()} />              
            )
          })
        :
        <div>Please search and nominate your 5 favorite movies</div>
      }
    </div>
    </>
  )
};

export default Results;