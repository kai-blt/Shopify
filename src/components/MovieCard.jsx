import { useDispatch, useSelector } from 'react-redux';
import { nominateActions } from '../state/ducks'


const MovieCard = (props) => {
  const { Title, Year, Poster, imdbID, movie } = props;
  const dispatch = useDispatch();

  const nominated = useSelector(state => state.nominated.movies);

  const click = (e) => {
    if (nominated.filter(m => JSON.stringify(m) === JSON.stringify(movie)).length > 0) {
      alert('already here')
    } else if (nominated.length > 4) {
      alert('STHOP')
    } else {
      dispatch(nominateActions.nominateMovies(movie))
    }
  }

  return (
    <div id={`${Title}`} className="p-2 m-4 w-full sm:w-1/3 md:w-1/4 lg:w-1/6 flex flex-col bg-gray-200 shadow-lg rounded-md text-center relative">
      <div className="p-16 bg-cover rounded-md" style={{"backgroundImage": `url(${Poster})`}}></div>
      <div>
        <p><a className="underline" href={`https://www.imdb.com/title/${imdbID}`} target="_blank noreferrer">{Title} - {Year}</a></p>
      </div>
      <div className="mt-12">
          <button onClick={(e) => click(Title)} className="p-2 w-full bg-green-600 border-t-2 border-gray-400 rounded-md rounded-t-none text-white transition duration-400 ease-in-out transform hover:-translate-y-0.5 hover:scale-102 hover:bg-gray-700 absolute bottom-0 right-0">Nominate</button>
      </div>
    </div>
  )
}

export default MovieCard;