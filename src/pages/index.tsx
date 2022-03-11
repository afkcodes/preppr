import Hero from 'components/Hero/Hero';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="bg-[#F2F4F6]">
      <div className="container mx-auto ">
        <Hero />
      </div>
    </div>
  );
};

export default Home;
