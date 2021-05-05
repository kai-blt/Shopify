import { Search, Results } from './components';
import { useSelector } from 'react-redux';

function App() {
  const movies = useSelector(state => state.search.movies);

  return (
    <div>
      <header className="pb-2">
        <Search />
      </header>
      <section className="ml-4">
        <Results movies={movies} />      
      </section>
    </div>
  );
}

export default App;
