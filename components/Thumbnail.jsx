import Image from "next/image"
import {HandThumbUpIcon} from "@heroicons/react/24/outline";

function Thumbnail({ result ,ref }) {
  const absPath= 'https://image.tmdb.org/t/p/original/'
  return (
    <div ref={ref} className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-100">
        <Image 
        height={1080} 
        width={1920} 
        src={`${absPath}${result.poster_path || result.backdrop_path}`} 
        alt = {`Poster of ${result.title || result.original_name}`} 
        className="w-full h-auto rounded-xl" />
        <div className="p-2">

        <p className="truncate max-w-md">{result.overview}</p>

        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold active:text-red-500">{result.title || result.original_name}</h2>

        <p className="flex items-center opacity-0 group-hover:opacity-100">{result.media_type && `${result.media_type.charAt(0).toUpperCase()}${result.media_type.slice(1)} `}{'• '}
        {result.release_date || result.first_air_date}{ ' '}•{" "}
        <HandThumbUpIcon  className="mx-2 h-5" />{result.vote_count}
        </p>
        </div>
    </div>
  )
}

export default Thumbnail