import {Search, Results, Nominations} from './components'


function App() {
  return (
    <div class="container mx-auto">
      <header>
        <Search />
      </header>
      <section>
        <Results />
        <Nominations />
      </section>
    </div>
  );
}

export default App;
