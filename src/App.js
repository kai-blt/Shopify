import {Search, Results, Nominations} from './components'


function App() {
  return (
    <div>
      <header className="pb-44">
        <Search />
      </header>
      <section className="px-4">
        <Results />
        <Nominations />
      </section>
    </div>
  );
}

export default App;
