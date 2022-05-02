const SCREENS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
  '3xl': 1920,
};

function screenToPx(screen) {
  return `${screen}px`;
}

function screenUp(screen) {
  return { min: screenToPx(screen) };
}

function screenDown(screen) {
  return { max: screenToPx(screen - 1) };
}

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {
      outline: {
        primary: ['2px solid #bd0f72'],
      },
      backgroundOpacity: { 6: '0.06' },
      borderColor: {
        grey: '#EFF2F7',
        primary: '#bd0f72',
      },
      borderWidth: {
        3: '3px',
        6: '6px',
        7: '7px',
        11: '11px',
      },
      fontSize: {
        xxs: '10px',
      },
      backgroundColor: {
        'grey-light': '#eff2f7',
        'divider-grey': '#E0E0E0',
      },
      minWidth: {
        6: '1.5rem',
        9: '2rem',
        10: '2.5rem',
        12: '3rem',
        16: '4rem',
        18: '4.5rem',
        20: '5rem',
        21: '5.5rem',
        22: '5.75rem',
        24: '6rem',
        26: '6.5rem',
        28: '7rem',
        30: '7.5rem',
        32: '8rem',
        33: '8.25rem',
        34: '8.5rem',
        36: '9rem',
        40: '10rem',
        44: '11rem',
        65: '16.5rem',
        86: '21.5rem',
      },
      width: {
        18: '4.5rem',
        21: '5.5rem',
        22: '5.75rem',
        26: '6.5rem',
        30: '7.5rem',
        33: '8.25rem',
        34: '8.5rem',
        49: '12.1rem',
        50: '12.5rem',
        65: '16.5rem',
        86: '21.5rem',
        fit: 'fit-content',
      },
      inset: {
        '3/20': '15%',
        '1/10': '10%',
        '1/20': '5%',
        26: '6.5rem',
        34: '8.5rem',
      },
      margin: {
        13: '3.25rem',
        42: '10.5rem',
        45: '11.25rem',
      },
      zIndex: {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(-20%)', 'pointer-events': 'none' },
          '100%': { opacity: 1, transform: 'translateY(0)', 'pointer-events': 'auto' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.2s',
      },
      boxShadow: {
        'one-1': '0px 4px 10px rgba(0, 0, 0, 0.1)',
        'one-2': '0px 4px 8px 0px #00000033',
        'one-3': '0px 2px 4px rgba(189, 15, 114, 0.6)',
        'one-big': '0px 16px 48px rgba(0, 0, 0, 0.22)',
      },
      maxWidth: {
        'screen-sm': screenToPx(SCREENS.sm),
        'screen-md': screenToPx(SCREENS.md),
        'screen-lg': screenToPx(SCREENS.lg),
        'screen-xl': screenToPx(SCREENS.xl),
        'screen-2xl': screenToPx(SCREENS['2xl']),
        'screen-3xl': screenToPx(SCREENS['3xl']),
      },
      letterSpacing: {
        tightest: '-.075em',
      },
    },
    fontFamily: {
      main: [
        '"Inter var"',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      proximaNova: ['"proxima-nova"', 'sans-serif'],
    },
    screens: {
      xsDown: screenDown(SCREENS.sm),

      sm: screenUp(SCREENS.sm),
      smDown: screenDown(SCREENS.md),

      md: screenUp(SCREENS.md),
      mdDown: screenDown(SCREENS.lg),

      lg: screenUp(SCREENS.lg),
      lgDown: screenDown(SCREENS.xl),

      xl: screenUp(SCREENS.xl),
      xlDown: screenDown(SCREENS['2xl']),

      '2xl': screenUp(SCREENS['2xl']),
      '2xlDown': screenDown(SCREENS['3xl']),

      '3xl': screenUp(SCREENS['3xl']),
    },
  },
  plugins: [],
}
