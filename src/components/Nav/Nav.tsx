import { Flex, ListItem, Text, UnorderedList, useBreakpointValue } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

const Nav = () => {
  const isMobile = useBreakpointValue({ base: true, sm: true, md: false });

  return (
    <Flex as="nav" py={4} justifyContent="space-between" alignItems="center">
      <Link href="#" passHref>
        <Text
          as="h3"
          fontWeight={800}
          letterSpacing={0.8}
          fontSize={22}
          color="white"
          cursor="pointer"
        >
          Preppr
        </Text>
      </Link>

      {isMobile ? (
        <Text fontWeight="bold" letterSpacing={0.8} fontSize={18} color="white">
          Menu
        </Text>
      ) : (
        <UnorderedList
          display="flex"
          flexDirection="row"
          listStyleType="none"
          color="white"
          gap={8}
          fontWeight={600}
        >
          <ListItem>
            <Link href="#">Home</Link>
          </ListItem>
          <ListItem>
            <Link href="#">Courses</Link>
          </ListItem>
          <ListItem>
            <Link href="#">About us</Link>
          </ListItem>
          <ListItem>
            <Link href="#">Community</Link>
          </ListItem>
        </UnorderedList>
      )}
    </Flex>
  );
};

export default Nav;
