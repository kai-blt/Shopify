import { useState, useEffect } from 'react';
import { searchActions } from '../state/ducks'
import { useDispatch, useSelector } from 'react-redux';
import { Nominations } from './'


const Search = (props) => {
  const [formValues, setFormValues] = useState({search: "star wars"});

  const dispatch = useDispatch();
  const movies = useSelector(state => state.search.movies);
  const nominated = useSelector(state => state.nominated.movies);

  useEffect(() => {
    const timer = setTimeout(() => dispatch(searchActions.searchMovies(formValues.search)), 1000);
    return () => clearTimeout(timer);
  }, [formValues, dispatch]);

  const handleChange = (e) => { 
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  } 

  return (
    <>
    {nominated.length >= 5 
      ?  <div className="absolute p-2 bg-blue-200 w-full  animate-pulse rounded-md text-2xl">Thanks for nominating your 5 favorite movies!</div>
      : null
    }
    <div className="bg-green-900 w-full flex flex-col sm:flex-row md:flex-row">
      <div className="p-4 w-full sm:w-1/4 md:w-1/4 lg:w-1/6">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 608 173.7"><path fill="#95BF47" d="M130.7 32.9c-.1-.9-.9-1.3-1.5-1.4-.6-.1-12.6-.2-12.6-.2s-10.1-9.8-11.1-10.8-2.9-.7-3.7-.5c0 0-1.9.6-5.1 1.6-.5-1.7-1.3-3.8-2.4-5.9-3.6-6.9-8.8-10.5-15.2-10.5-.4 0-.9 0-1.3.1-.2-.2-.4-.4-.6-.7-2.8-3-6.3-4.4-10.5-4.3-8.2.2-16.3 6.1-23 16.7-4.7 7.4-8.2 16.7-9.2 23.9-9.4 2.9-16 4.9-16.1 5-4.7 1.5-4.9 1.6-5.5 6.1C12.4 55.3 0 151.4 0 151.4l104.1 18 45.1-11.2S130.8 33.7 130.7 32.9zm-39.2-9.7c-2.4.7-5.1 1.6-8.1 2.5-.1-4.1-.6-9.9-2.5-14.9 6.3 1.2 9.3 8.2 10.6 12.4zM78 27.4c-5.5 1.7-11.4 3.5-17.4 5.4 1.7-6.4 4.9-12.8 8.8-17 1.5-1.6 3.5-3.3 5.9-4.3 2.3 4.7 2.7 11.4 2.7 15.9zM66.8 5.8c1.9 0 3.5.4 4.9 1.3-2.2 1.1-4.4 2.8-6.4 5-5.2 5.6-9.2 14.2-10.8 22.6-5 1.5-9.8 3-14.3 4.4 3-13.2 14-32.9 26.6-33.3z"></path><path fill="#5E8E3E" d="M129.2 31.5c-.6-.1-12.6-.2-12.6-.2s-10.1-9.8-11.1-10.8c-.4-.4-.9-.6-1.4-.6v149.5l45.1-11.2S130.8 33.8 130.7 32.9c-.2-.9-.9-1.3-1.5-1.4z"></path><path fill="#FFF" d="M79.1 54.7l-5.2 19.6s-5.8-2.7-12.8-2.2c-10.2.6-10.3 7-10.2 8.7.6 8.8 23.6 10.7 24.9 31.2 1 16.2-8.6 27.2-22.4 28.1-16.6 1-25.7-8.7-25.7-8.7l3.5-14.9s9.2 6.9 16.5 6.5c4.8-.3 6.5-4.2 6.3-7-.7-11.4-19.5-10.8-20.7-29.5-1-15.8 9.4-31.8 32.3-33.3 9-.8 13.5 1.5 13.5 1.5zM210.3 96.5c-5.2-2.8-7.9-5.2-7.9-8.5 0-4.2 3.7-6.9 9.6-6.9 6.8 0 12.8 2.8 12.8 2.8l4.8-14.6s-4.4-3.4-17.3-3.4c-18 0-30.5 10.3-30.5 24.8 0 8.2 5.8 14.5 13.6 19 6.3 3.6 8.5 6.1 8.5 9.9 0 3.9-3.1 7-9 7-8.7 0-16.9-4.5-16.9-4.5l-5.1 14.6s7.6 5.1 20.3 5.1c18.5 0 31.8-9.1 31.8-25.5.1-8.9-6.6-15.2-14.7-19.8zm73.8-30.8c-9.1 0-16.3 4.3-21.8 10.9l-.3-.1 7.9-41.4h-20.6l-20 105.3h20.6l6.9-36c2.7-13.6 9.7-22 16.3-22 4.6 0 6.4 3.1 6.4 7.6 0 2.8-.3 6.3-.9 9.1l-7.8 41.2h20.6l8.1-42.6c.9-4.5 1.5-9.9 1.5-13.4 0-11.5-6.2-18.6-16.9-18.6zm63.5 0c-24.8 0-41.2 22.4-41.2 47.4 0 16 9.9 28.8 28.4 28.8 24.3 0 40.8-21.8 40.8-47.4-.1-14.7-8.8-28.8-28-28.8zm-10.2 60.4c-7 0-10-6-10-13.4 0-11.8 6.1-31.1 17.3-31.1 7.3 0 9.7 6.3 9.7 12.4 0 12.7-6.1 32.1-17 32.1zm90.8-60.4c-13.9 0-21.8 12.2-21.8 12.2h-.3l1.2-11.1h-18.2c-.9 7.5-2.5 18.8-4.2 27.3l-14.3 75.4h20.6l5.7-30.5h.4s4.2 2.7 12.1 2.7c24.2 0 40-24.8 40-49.9.1-13.7-6.1-26.1-21.2-26.1zm-19.7 60.7c-5.4 0-8.5-3-8.5-3l3.4-19.3c2.4-12.8 9.1-21.4 16.3-21.4 6.3 0 8.2 5.8 8.2 11.4 0 13.3-7.9 32.3-19.4 32.3zm70.4-90.2c-6.6 0-11.8 5.2-11.8 12 0 6.1 3.9 10.3 9.7 10.3h.3c6.4 0 12-4.3 12.1-12 0-6-4-10.3-10.3-10.3zm-28.8 104.2h20.6l14-73h-20.8zm87-73.2h-14.3l.7-3.4c1.2-7 5.4-13.3 12.2-13.3 3.7 0 6.6 1 6.6 1l4-16.1s-3.6-1.8-11.2-1.8c-7.3 0-14.6 2.1-20.2 6.9-7 6-10.3 14.6-12 23.3l-.6 3.4h-9.6l-3 15.5h9.6l-10.9 57.7H509l10.9-57.7h14.2l3-15.5zm49.6.2s-12.9 32.5-18.7 50.2h-.3c-.4-5.7-5.1-50.2-5.1-50.2H541l12.4 67.1c.3 1.5.1 2.4-.4 3.4-2.4 4.6-6.4 9.1-11.2 12.4-3.9 2.8-8.2 4.6-11.7 5.8l5.7 17.5c4.2-.9 12.8-4.3 20.2-11.2 9.4-8.8 18.1-22.4 27-40.9l25.2-54.1h-21.5z"></path></svg>
      </div>
      <div className="w-full p-3 sm:w-1/3 md:w-1/2 lg:p-4 bg-green-900 text-white">
        <div className="w-full border-5">
          <h1 className="text-md">Search Movies</h1>
        </div>
        <div>
          <form onSubmit={(e) =>e.preventDefault()}>
              <input
                type="text"
                name="search"
                id="search"
                value={formValues.search}
                onFocus={() => setFormValues({search: ""})}
                className="rounded-sm px-2 py-1 text-gray-900 w-full"
                onChange={handleChange}
              />
          </form>
        </div>
      </div>
    </div>
    <div>
      <Nominations />
    </div>
    <div className="flex flex-row justify-between">
      <div className="p-4 text-lg">
        {movies ?  <div><span className="font-bold">{movies.length} results</span> for "{formValues.search}"...</div> : null}  
      </div>      
    </div>
    </>
  )
};

export default Search;