import { Button } from '@nextui-org/react';
import React from 'react';

const Hero = () => {
  return (
    <div className="flex justify-center items-center h-102">
      <div className="flex flex-col gap-6 text-center">
        <h3 className="text-5xl font-bold">What are you learning today?</h3>
        <p className="text-xl">Learn with no extra efforts and clutters.</p>
        <div className="flex gap-1 w-full">
          <input
            type="text"
            name="main-search"
            id="main-search"
            className=" px-6  w-full  placeholder:text-lg text-lg placeholder:font-medium font-medium rounded-sm"
            placeholder="Explore Tutorials"
          />
          <Button auto className="p-8 text-lg font-medium rounded-sm">
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
