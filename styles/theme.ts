/* eslint-disable import/no-extraneous-dependencies */
import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em'
});

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false
};

const theme = extendTheme({
  fonts: {
    heading: "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto'",
    body: "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto'"
  },
  colors: {
    red: {
      '900': '#ea5455',
      '800': '#ec6566',
      '700': '#ee7677',
      '600': '#f08788',
      '500': '#f29899',
      '400': '#f5aaaa',
      '300': '#f7bbbb',
      '200': '#f9cccc',
      '100': '#fbdddd',
      '50': '#fdeeee8'
    },
    black: {
      '900': '#0f0f0f',
      '800': '#272727',
      '700': '#3f3f3f',
      '600': '#575757',
      '500': '#6f6f6f',
      '400': '#878787',
      '300': '#9f9f9f',
      '200': '#b7b7b7',
      '100': '#cfcfcf',
      '50': '#e7e7e7'
    },
    yellow: {
      '900': '#ffb400',
      '800': '#ffbc1a',
      '700': '#ffc333',
      '600': '#ffcb4d',
      '500': '#ffd266',
      '400': '#ffda80',
      '300': '#ffe199',
      '200': '#ffe9b3',
      '100': '#fff0cc',
      '50': '#fff8e6'
    },
    teal: {
      900: '#0c9ca4',
      800: '#27a7ae',
      700: '#42b2b8',
      600: '#5dbdc2',
      500: '#78c8cc',
      400: '#93d3d6',
      300: '#aedee0',
      200: '#c9e9ea',
      100: '#e4f4f4',
      50: '#e7f5f6'
    }
  },
  config,
  breakpoints,
  components: {
    Button: {
      baseStyle: {
        _focus: {
          boxShadow: 'none'
        }
      }
    }
  }
});

export default theme;
