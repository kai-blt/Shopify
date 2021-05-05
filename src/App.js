import { Search, Results, Nominations } from './components';
import { useSelector } from 'react-redux';

function App() {
  const movies = useSelector(state => state.search.movies);

  return (
    <div>
      <header className="pb-44">
        <Search />
      </header>
      <section className="ml-4">
        <Results movies={movies} />
        <Nominations />
      </section>
    </div>
  );
}

export default App;
