import { fonts } from "../../../theme";

export const styles = {
  profileInfoItemEdit: {
    display: "flex",
    flexDirection: "column",
    marginTop: "15px",
  },
  profileInfoTitle: {
    alignItems: "baseline",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  profileInfoLabel: {
    ...fonts.labelFont,
  },
  profileInfoValue: {
    ...fonts.hintFont,
  },
  input: {
    background: "transparent",
    border: 0,
    boxShadow: "none",
    outline: "none",
    "&::placeholder": {
      textAlign: "end",
    },
  },
};
