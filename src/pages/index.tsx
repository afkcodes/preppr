import { Box, Container } from '@chakra-ui/react';
import Hero from 'components/Hero/Hero';
import Nav from 'components/Nav/Nav';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Box bg="gray.200" h="7xl">
      <Box bg="prepprTeal.900">
        <Box borderBottomColor="white" borderBottomWidth={0.2} px={6} position="sticky">
          <Nav />
        </Box>
        <Container maxW="container.xl">
          <Box>
            <Hero />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
