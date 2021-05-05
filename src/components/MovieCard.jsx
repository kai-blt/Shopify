const MovieCard = (props) => {
  const { Title, Year, Poster, imdbID } = props;

  const click = (title) => {
    console.log('nominated', title)
  }

  return (
    <div onClick={() => click(Title)} className="p-2 m-4 flex flex-col justify-items-end bg-gray-200 shadow-lg border-2 border-gray-300 rounded-md xs:w-1 sm:w-1/2 md:w-1/4 lg:w-1/6 text-center relative">
      <div className="xs:p-10 sm:p-10 md:p-10 lg:p-20 bg-cover rounded-md" style={{"background-image": `url(${Poster})`}}></div>
      <div>
        <p>{Title} - {Year}</p>
      </div>
      <div className="mt-12">
        <button class="p-2 w-full bg-green-600 border-t-2 border-gray-400 rounded-md rounded-t-none text-white transition duration-400 ease-in-out transform hover:-translate-y-0.5 hover:scale-102 hover:bg-gray-700 absolute bottom-0 right-0">Nominate</button>
      </div>
    </div>
  )
}

export default MovieCard;