import { colors, fonts } from "../../../theme";

export const styles = {
  headerContainer: {
    display: "flex",
    flexDirection: "column",
  },
  headerTitleContainer: {
    alignItems: "baseline",
    display: "flex",
    justifyContent: "space-between",
  },
  headerTitle: {
    margin: 0,
    whiteSpace: "nowrap",
  },
  linkText: {
    color: colors.mandarineOrange,
  },
  headerSearchBar: {
    ...fonts.linkFont,
    alignItems: "center",
    background: colors.searchBarBackground,
    borderRadius: "16px",
    display: "flex",
    height: "48px",
    justifyContent: "center",
    margin: "4% 0",
  },
  icon: {
    marginRight: "1%",
  },
};
