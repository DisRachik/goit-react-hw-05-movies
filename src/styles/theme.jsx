export const theme = Object.freeze({
  colors: {
    accent: '#D1913C',
    green: '#0fd20f',
    red: '#f27777',
    gray: '#9e9e9e',
    light: '#f2f2f2',
    mainBackground: ['linear-gradient(to bottom, #c9d6ff,  #e2e2e2)'],
    cardBackground: ['linear-gradient(to right, #0f0c29, #302b63, #24243e)'],
  },
  fontSizes: {
    small: '16px',
    medium: '18px',
    large: '25px',
  },
  spacing: value => `${4 * value}px`,
  shadows: {
    small: '0 5px 7px -1px rgba(237, 226, 226, 0.50)',
    regular: '0px 4px 10px 4px #9e9e9e',
    medium: '0 9px 47px 11px rgba(51, 51, 51, 0.18);',
  },
  animation: value => `${value} 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98)`,
});
