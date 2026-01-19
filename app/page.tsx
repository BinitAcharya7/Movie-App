import type { Metadata } from 'next';
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import requests from '../utils/requests'

export const metadata: Metadata = {
  title: 'Movies',
  description: 'This is the description of my page.',
};

export default async function Home({ searchParams }: { searchParams: { genre?: string } }) {

  // read genre from search params (optional)
  const params = await searchParams;
  const genre = params.genre;

  // pick request config, fallback to fetchTrending
  const request = requests[genre as keyof typeof requests] ?? requests.fetchTrending;

  // fetch data server-side
  const res = await fetch(`https://api.themoviedb.org/3${request.url}`);
  const data = await res.json();
  const results = data?.results ?? [];

  console.log(results);
  return (
    <div className="min-h-screen bg-[#06202A]">
      <Header />
      <Nav />
      <Results results={results} />

    </div>
  );
}
