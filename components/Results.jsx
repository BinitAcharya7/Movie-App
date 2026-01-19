import Thumbnail from './Thumbnail'

function Results({ results }) {
  return (
    <>
    {results.map((result) => <Thumbnail result={result} key={result.id} />)}
    </>
  )
}

export default Results
