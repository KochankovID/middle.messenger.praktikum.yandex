import { colors, fonts } from "../../../theme";

export const styles = {
  chatViewFooter: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: "16px",
    width: "100%",
  },
  input: {
    ...fonts.linkFont,
    background: colors.searchBarBackground,
    borderRadius: "32px",
    borderWidth: "0",
    boxShadow: "none",
    color: '"$dark-violet"',
    height: "48px",
    outline: "none",
    padding: "0 16px",
    width: "80%",
  },
  iconSendBackground: {
    "-webkit-filter": "rgba(0, 0, 0, .25)",
    alignItems: "center",
    background: colors.khaskiWeb,
    borderRadius: "50%",
    display: "flex",
    height: "70px",
    justifyContent: "center",
    width: "70px",
  },
  iconSend: {
    marginLeft: "10px",
    objectFit: "fill",
  },
};
