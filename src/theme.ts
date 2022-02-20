export const colors = {
  goldCrayola: "#efc69b",
  fuzzyWuzzy: "#cf716d",
  vividRed: "#af1b3f",
  claret: "#7b2642",
  darkViolet: "#473144",
  interestingGrey: "#8a7470",
  khaskiWeb: "#ccb69b",
  mandarineOrange: "#df9b6d",
  background: "#ffe7ce",
  chatlistBackground: "#f9e0c7",
  searchBarBackground: "#fff0da",
};

export const fonts = {
  labelFont: {
    color: colors.darkViolet,
    fontFamily: "Assistant, sans-serif",
    fontSize: "24px",
    fontWeight: "normal",
  },
  linkFont: {
    color: colors.claret,
    fontFamily: "Roboto, sans-serif",
    fontSize: "24px",
    fontWeight: "normal",
  },
  hintFont: {
    color: colors.interestingGrey,
    fontFamily: "Assistant, sans-serif",
    fontSize: "18px",
    fontWeight: "normal",
  },
};

export const themeStyles = {
  "@global": {
    body: {
      background: colors.background,
      margin: 0,
    },
  },
  h1: {
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    backgroundImage: `linear-gradient(180deg, ${colors.darkViolet} 0%, ${colors.mandarineOrange} 100%)`,
    filter: "drop-shadow(0 4px 2px $h1-shadow)",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "72px",
    fontWeight: "bold",
    textAlign: "center",
  },
  h3: {
    color: colors.darkViolet,
    fontFamily: "Rokkitt, sans-serif",
    fontSize: "48px",
    fontWeight: "normal",
  },
  h4: {
    color: colors.darkViolet,
    fontFamily: "Rokkitt, sans-serif",
    fontSize: "24px",
    fontWeight: "normal",
  },
  iconChevronRight: {
    background: "url('/static/icons/mdi_chevron-right.svg') no-repeat center",
    display: "inline",
    height: "24px",
    width: "24px",
  },
  iconMdiMagnify: {
    background: "url('/static/icons/mdi_magnify.svg') no-repeat center",
    display: "inline",
    height: "24px",
    width: "24px",
  },
  iconPlanet: {
    background: "url('/static/icons/planet.svg') no-repeat center",
    display: "inline",
    height: "24px",
    width: "24px",
  },
  iconStar: {
    background: "url('/static/icons/star.svg') no-repeat center",
    display: "inline",
    height: "24px",
    width: "24px",
  },
  iconMore: {
    background: "url('/static/icons/more.svg') no-repeat center",
    display: "inline",
    height: "24px",
    width: "24px",
  },
  iconAttachFile: {
    background: "url('/static/icons/attach_file.svg') no-repeat center",
    display: "inline",
    height: "48px",
    width: "48px",
  },
  iconSend: {
    background: "url('/static/icons/send.svg') no-repeat center",
    display: "inline",
    height: "48px",
    width: "48px",
  },
  iconArrowBackIos: {
    background: "url('/static/icons/arrow_back_ios.svg') no-repeat center",
    display: "inline",
    height: "48px",
    width: "48px",
  },
};
