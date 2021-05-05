import { useState } from 'react';

const MovieCard = (props) => {
  const { Title, Year, Poster, imdbID } = props;
  const [clicked, setClicked] = useState(false)

  const click = (e) => {
    let card = document.getElementById(`${Title}`)
    card.classList.toggle('bg-green-500')
    setClicked(!clicked);
  }

  return (
    <div id={`${Title}`} className="p-2 m-4 flex flex-col justify-items-end bg-gray-200 shadow-lg rounded-md xs:w-1 sm:w-1/2 md:w-1/4 lg:w-1/6 text-center relative">
      <div className="xs:p-10 sm:p-10 md:p-10 lg:p-20 bg-cover rounded-md" style={{"background-image": `url(${Poster})`}}></div>
      <div>
        <p>{Title} - {Year}</p>
      </div>
      <div className="mt-12">
        {clicked 
          ? <button onClick={(e) => click(Title)} class="p-2 w-full bg-yellow-500 border-t-2 border-gray-400 rounded-md rounded-t-none font-bold transition duration-400 ease-in-out transform hover:-translate-y-0.5 hover:scale-102 hover:bg-gray-700 hover:text-white absolute bottom-0 right-0">Nominated</button>
          : <button onClick={(e) => click(Title)} class="p-2 w-full bg-green-600 border-t-2 border-gray-400 rounded-md rounded-t-none text-white transition duration-400 ease-in-out transform hover:-translate-y-0.5 hover:scale-102 hover:bg-gray-700 absolute bottom-0 right-0">Nominate</button>
        }
      </div>
    </div>
  )
}

export default MovieCard;