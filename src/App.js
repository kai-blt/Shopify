import {Search, Results, Nominations} from './components'


function App() {
  return (
    <div>
      <header class="pb-44">
        <Search />
      </header>
      <section class="px-4">
        <Results />
        <Nominations />
      </section>
    </div>
  );
}

export default App;
