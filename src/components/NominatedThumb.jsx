import { useDispatch, useSelector } from 'react-redux';
import { nominateActions } from '../state/ducks'


const NominatedThumb = (props) => {
  const { Title, Poster, movie } = props;
  const movies = useSelector(state => state.nominated.movies)
  const dispatch = useDispatch();

  const remove = (movie) => {
    const updatedNominations = movies.filter(m => m !== movie);
    dispatch(nominateActions.removeMovies(updatedNominations));
  };

  return(
    <div className="relative p-1 sm:p-2 md:p-4 lg:p-6 text-xs sm:text-sm md:text-md text-yellow-200 text-shadow font-bold bg-cover rounded-md" style={{"backgroundImage": `url(${Poster})`}}>
      <p>{Title}</p>
      <button onClick={() => remove(movie)} class="w-6 h-6 absolute top-0 right-0 rounded-full border-2 border-white bg-red-700 shadow-2xlg text-sm  transition duration-400 ease-in-out transform hover:-translate-y-0.5 hover:scale-102 hover:bg-gray-700">X</button>
    </div>    
  )
};

export default NominatedThumb;