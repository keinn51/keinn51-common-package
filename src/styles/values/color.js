const rgbToHex = (color, alpha) => {
  const regex = /^rgba?\((\d{1,3}), (\d{1,3}), (\d{1,3})(, [\d.]+)?\)$/;
  const match = color?.match(regex);
  if (!match) {
    return color ? color + alpha : "#000000";
  }

  const r = parseInt(match[1], 10);
  const g = parseInt(match[2], 10);
  const b = parseInt(match[3], 10);
  const a = match[4]
    ? Math.round(parseFloat(match[4].slice(2)) * 255)
        .toString(16)
        .padStart(2, "0")
    : "";

  const hexR = r.toString(16).padStart(2, "0");
  const hexG = g.toString(16).padStart(2, "0");
  const hexB = b.toString(16).padStart(2, "0");

  return "#" + hexR + hexG + hexB + (alpha || a);
};

const colorPalette = {
  purple: {
    400: "#8227DF",
    300: "#9D42FB",
    200: "#B670FF",
    100: "#EDDBFF",
  },
  green: {
    500: "#09AE8D",
    400: "#00CC99",
    300: "#76DAB6",
    200: "#99E9CA",
    100: "#DFF6ED",
  },
  gray: {
    black: "#161616",
    800: "#232323",
    700: "#5D5D5F",
    600: "#777777",
    500: "#959595",
    400: "#B2B2B2",
    300: "#D5D5D7",
    200: "#E7E7E7",
    100: "#F4F4F6",
  },
  red: {
    300: "#FF3366",
    200: "#FFC1D0",
    100: "#FDE8ED",
  },
  white: "#FFFFFF",
  yellow: {
    300: "#FF9E11",
    200: "#FFC672",
    100: "#FFF6DF",
  },
  blue: {
    700: "#003C8A",
    300: "#1598F8",
    200: "#51B6FF",
    100: "#B9DFFB",
    50: "#DFF1FF",
  },
};

export const color = {
  bgc: {
    default: "#f5f5f5",
    sub: "white",
    input: "white",
    hover: "rgba(244, 245, 247, 0.9)",
  },

  text: {
    default: "#232323",
    dark: "#0f172a",
    sub: "#777a80",
    grayDark: "#5b5b5b",
    grayDefault: "#999999",
    grayLight: "#d6d6d6",
  },

  boxShadow: {
    default: "rgba(0, 0, 0, 0.03) 0px 2px 15px 0px",
  },

  //!피그마 적용디자인
  primary: {
    purple: colorPalette.purple,
    black: colorPalette.gray.black,
  },
  sub: {
    green: colorPalette.green,
  },
  grayscale: {
    gray: colorPalette.gray,
    white: colorPalette.white,
  },
  system: {
    error: {
      red: colorPalette.red,
    },
    warning: {
      yellow: colorPalette.yellow,
    },
    success: {
      blue: colorPalette.blue,
    },
  },
  text: {
    default: colorPalette.gray[800],
  },
  border: {
    default: colorPalette.gray[200],
  },
};

//FIXME 해당 팔레트 훅으로 변경하여 더이상 사용 X 예정. useColorPalette.jsx
export const palette = (type) => {
  let colorPreset = {
    backgroundMain: "#FFFFFF",
    backgroundSub: "#FFFFFF",
    brandMain: "#000000",
    brandSub: "#000000",
    textMain: "#000000",
    textSub: "#FFFFFF",
    textSmall: "#959595",
  };

  switch (type) {
    case "error":
      return color.system.error.red[300];
    case "primary":
      return color.grayscale.gray.black;
    case "point":
      return colorPreset?.brandMain || color.system.success.blue[300];
    case "lightPoint":
      return (
        rgbToHex(colorPreset?.brandMain, "33") || color.system.success.blue[100]
      );
    case "link":
      return color.system.success.blue[300];
    case "textMain":
      return colorPreset?.textMain || color.grayscale.gray[800];
    case "textSub":
      return colorPreset?.textSub || color.grayscale.gray[800];
    case "textSmall":
      return colorPreset?.textSmall || color.grayscale.gray[800];
    case "desc":
      return color.grayscale.gray[500];
    case "light":
      return color.grayscale.gray[700];
    case "border":
      return colorPreset?.textSmall || color.grayscale.gray[800];
    case "borderHover":
      return colorPreset?.brandMain || color.border.hover;
    case "backgroundMain":
      return colorPreset?.backgroundMain || "#ffffff";
    case "backgroundSub":
      return colorPreset?.backgroundSub || "#ffffff";
    case "lightBackgroundMain":
      return colorPreset?.backgroundMain
        ? rgbToHex(colorPreset?.backgroundMain, "33")
        : "#ffffff";
    case "semiTransparent":
      return "rgb(121 121 121 / 10%)";
    case "badge":
      return `${rgbToHex(colorPreset?.brandMain).slice(0, 7)}21`;
    default:
      return color.primary.black;
  }
};
