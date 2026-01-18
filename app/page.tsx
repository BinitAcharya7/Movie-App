import type { Metadata } from 'next';
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import requests from '../utils/requests'

export const metadata: Metadata = {
  title: 'Movies',
  description: 'This is the description of my page.',
};

export default async function Home({ searchParams }) {

  const params = await searchParams
  const genre = params.genre;
  const {results} = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}]`).then(response => response.json());

  return (
    <div className="min-h-screen bg-[#06202A]">
      <Header />
      <Nav />
      <Results results={results}/>

    </div>
  );
}
