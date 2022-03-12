import Hero from 'components/Hero/Hero';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div>
      <div className="container mx-auto ">
        <Hero />
      </div>
    </div>
  );
};

export default Home;
