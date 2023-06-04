export const theme = Object.freeze({
  colors: {
    accent: '#D1913C',
    blue: '#c9d6ff',
    dark: '#302b63',
    red: '#f27777',
    gray: '#9e9e9e',
    light: '#f2f2f2',
  },
  fontSizes: {
    small: '16px',
    medium: '18px',
    large: '35px',
  },
  spacing: value => `${4 * value}px`,
  shadows: {
    small: '0 5px 7px -1px rgba(237, 226, 226, 0.50)',
    regular: '0px 4px 10px 4px #9e9e9e',
    medium: '0 9px 47px 11px rgba(51, 51, 51, 0.18);',
  },
  animation: value => `${value} 0.4s cubic-bezier(0.7, 0.98, 0.86, 0.98)`,
});
