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
    prepprRed: {
      '900': '#ea5455',
      '800': '#ec6566',
      '700': '#ee7677',
      '600': '#f08788',
      '500': '#f29899',
      '400': '#f5aaaa',
      '300': '#f7bbbb',
      '200': '#f9cccc',
      '100': '#fbdddd',
      '50': '#fdeee8'
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
    preppryellow: {
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
    prepprTeal: {
      900: '#0a7d83',
      800: '#238a8f',
      700: '#3b979c',
      600: '#54a4a8',
      500: '#6cb1b5',
      400: '#85bec1',
      300: '#9dcbcd',
      200: '#b6d8da',
      100: '#cee5e6',
      50: '#e7f2f3'
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
