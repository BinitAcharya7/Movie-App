import type { Metadata } from 'next';
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'

export const metadata: Metadata = {
  title: 'Movies',
  description: 'This is the description of my page.',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#06202A]">
      <Header />
      <Nav />
      <Results />

    </div>
  );
}
