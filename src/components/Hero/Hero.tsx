import { Box, Button, Flex, Input, Text } from '@chakra-ui/react';
import React from 'react';

const Hero = () => {
  return (
    <Flex justifyContent="center" alignItems={{ base: 'flex-start', md: 'center' }} w="full" h="lg">
      <Flex justifyContent="center" alignItems="center" flexDirection="column" textAlign="center">
        <Box py={8}>
          <Text as="h3" fontWeight="bold" fontSize={50} color="white">
            What are you learning today?
          </Text>
          <Text fontSize={18} as="p" color="white">
            Learn with no extra efforts and clutters.
          </Text>
        </Box>
        <Flex
          justifyContent="center"
          alignItems="center"
          w="full"
          gap={2}
          direction={{ base: 'column', md: 'row' }}
        >
          <Input
            type="text"
            placeholder="Explore Tutorials"
            size="lg"
            p={8}
            borderColor="white"
            borderWidth={2}
            borderRadius={2}
            fontWeight="semibold"
            color="white"
            _active={{ borderColor: 'white' }}
            _focus={{ borderColor: 'white' }}
            _hover={{ borderColor: 'white' }}
            _placeholder={{ color: 'white', fontWeight: 'semibold' }}
          />
          <Button
            p={8}
            bg="white"
            borderWidth={2}
            borderRadius={2}
            borderColor="white"
            _hover={{ bg: 'white' }}
            _active={{ bg: 'white', transform: 'scale(0.98)' }}
            color="teal"
          >
            Search
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Hero;
