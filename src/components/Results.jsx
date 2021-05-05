import { MovieCard } from './';

const Results = (props) => {
  const { movies } = props;

  console.log(movies)
  return (
    <div className="flex flex-wrap justify-evenly">
      {movies 
        ? movies.map(m => {
          const { Title, Year, Poster, imdbID } = m;
          return(
            <MovieCard Title={Title} Year={Year} Poster={Poster} imdbId={imdbID} />
          )})
        :
        <div>Please search movies</div>
      }
    </div>
  )
};

export default Results;