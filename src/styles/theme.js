const theme = {
  white: '#fff',
  pink: '#ff659e',

  fontExtraLarge: '34px',
  fontLarge: '24px',
  fontMedium: '18px',
  fontSemiMedium: '16px',
  fontRegular: '14px',
  fontSmall: '13px',
  fontMicro: '11px',

  marginCenter: '0 auto',

  flex: (direction = 'row', align = 'center', justify = 'center') => `
      display: flex;
      flex-direction: ${direction};
      align-items: ${align};
      justify-content:${justify};
      `,

  absoluteCenter: `
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      `,

  positionFixed: `
      position: fixed;
      top: 0;
      left: 0;
      z-index:999;
    `,
};

export default theme;
