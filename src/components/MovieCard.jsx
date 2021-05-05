const MovieCard = (props) => {
  const { Title, Year, Poster, imdbID } = props;

  const click = (title) => {
    console.log('nominated', title)
  }

  return (
    <div onClick={() => click(Title)} className="p-2 m-4 bg-gray-200 shadow-lg border-2 border-gray-300 rounded-md xs:w-1 sm:w-1/2 md:w-1/4 lg:w-1/6 text-center transition duration-400 ease-in-out hover:bg-green-800 transform hover:-translate-y-1 hover:scale-110 hover:text-white">
        <div className="xs:p-10 sm:p-10 md:p-10 lg:p-20 bg-cover rounded-md" style={{"background-image": `url(${Poster})`}}></div>
        <div>
          <p>{Title} - {Year}</p>
        </div>
    </div>
  )
}

export default MovieCard;