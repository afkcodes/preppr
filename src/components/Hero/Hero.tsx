import { Box, Button, Input, Text } from '@chakra-ui/react';
import React from 'react';

const Hero = () => {
  return (
    <Box className="flex justify-center items-center h-102">
      <Box className="flex flex-col gap-6 text-center">
        <Text as="h3" className="text-6xl font-bold">
          What are you learning today?
        </Text>
        <Text className="text-xl" as="p">
          Learn with no extra efforts and clutters.
        </Text>
        <Box className="flex gap-1 w-full">
          <Input
            type="text"
            name="main-search"
            id="main-search"
            placeholder="Explore Tutorials"
            size="lg"
            variant="filled"
            p={8}
            // borderColor="red.500"
            borderWidth={2}
            borderRadius={2}
            _active={{ borderColor: 'red.500' }}
            _focus={{ borderColor: 'red.500' }}
          />
          <Button
            p={8}
            bg="teal.900"
            borderWidth={1}
            borderRadius={2}
            borderColor="teal.900"
            _hover={{ bg: 'teal.800' }}
            _active={{ bg: 'teal.900', transform: 'scale(0.98)' }}
            color="white"
          >
            Search
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
