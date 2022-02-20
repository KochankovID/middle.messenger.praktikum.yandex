import { fonts } from "../../theme";

export const styles = {
  chatListItem: {
    alignItems: "center",
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    padding: "4% 0 4% 4%",
  },
  itemPersonInfo: {
    display: "flex",
    width: "80%",
  },
  itemTitle: {
    alignItems: "start",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "4% 0",
    width: "60%",
  },
  itemMessageInfo: {
    display: "flex",
    justifyContent: "space-between",
  },
  circleAvatar: {
    height: "86px",
    marginRight: "26px",
    width: "86px",
  },
  itemTitleText: {
    display: "block",
    margin: 0,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    width: "100%",
  },
  itemTime: {
    marginLeft: "10px",
  },
  message: {
    ...fonts.hintFont,
    width: "100%",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
};
