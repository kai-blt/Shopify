const NominatedCard = (props) => {
  const { Title, Year, Poster, imdbID } = props;

  return (
    <div id={`${Title}`} className="p-2 m-4 w-full sm:w-1/3 md:w-1/4 lg:w-1/6 flex flex-col bg-green-400 shadow-lg rounded-md text-center relative">
      <div className="p-16 bg-cover rounded-md" style={{"backgroundImage": `url(${Poster})`}}></div>
      <div>
        <p><a className="underline" href={`https://www.imdb.com/title/${imdbID}`} target="_blank noreferrer">{Title} - {Year}</a></p>
      </div>
      <div className="mt-12">
          <button disabled className="p-2 w-full bg-yellow-500 border-t-2 border-gray-400 rounded-md rounded-t-none font-bold absolute bottom-0 right-0">Nominated</button>
      </div>
    </div>
  )
}

export default NominatedCard;