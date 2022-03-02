import { Button } from '@nextui-org/react';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="container mx-auto">
      <p className="text-xl font-bold">hello Preppr</p>
      <Button className="text-xl  bg-indigo-500 hover:bg-indigo-600 rounded-sm shadow-xl shadow-indigo-300 ">
        Welcome
      </Button>
    </div>
  );
};

export default Home;
