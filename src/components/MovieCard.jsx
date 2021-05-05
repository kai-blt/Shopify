const MovieCard = (props) => {
  const { Title, Year, Poster, imdbID } = props;
  return (
    <div className="p-2 m-2 bg-gray-700 shadow-lg border-2 rounded-md xs:w-1 sm:w-1/2 md:w-1/4 lg:w-1/6 text-white text-center hover:bg-gray-500">
        <div className="xs:p-10 sm:p-10 md:p-10 lg:p-20 bg-cover rounded-md" style={{"background-image": `url(${Poster})`}}></div>
        <div>
          <p>{Title} - {Year}</p>
        </div>
    </div>
  )
}

export default MovieCard;