import { colors, fonts } from "../../../theme";

export const styles = {
  label: {
    ...fonts.labelFont,
    color: colors.mandarineOrange,
  },
  input: {
    ...fonts.labelFont,
    background: "transparent",
    borderWidth: 0,
    boxShadow: "none",
    outline: "none",
    width: "100%",
  },
  inputError: {
    ...fonts.labelFont,
    background: "transparent",
    borderColor: "red",
    borderWidth: "2px",
    boxShadow: "none",
    outline: "none",
    width: "100%",
  },
  delimiter: {
    marginBottom: "5%",
  },
};
