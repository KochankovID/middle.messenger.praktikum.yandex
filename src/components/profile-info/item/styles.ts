import { fonts } from "../../../theme";

export const styles = {
  profileInfoItem: {
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
};
