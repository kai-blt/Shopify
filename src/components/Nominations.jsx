import { useSelector } from 'react-redux';
import { NominatedThumb } from './';

const Nominations = (props) => {
  const nominated = useSelector(state => state.nominated.movies);
  
  return (
    <div className="bg-green-900 w-full border-b-4 border-gray-900 text-white">
      <div className="flex xs:flex-col sm:flex-row md:flex-row lg:flex-row">
        {nominated.length > 0
          ? nominated.map(n => {
            const { Title, Poster, imdbID } = n;
            return(
              <NominatedThumb Title={Title} Poster={Poster} imdbID={imdbID} movie={n} key={Math.random()} />
            )
          })
          : <div className="w-full bg-green-900 p-2"></div>
        }
      </div>
    </div>
  )
};

export default Nominations;