import { colors } from "../../theme";

export const styles = {
  form: {
    alignItems: "stretch",
    borderColor: colors.goldCrayola,
    borderRadius: "16px",
    borderStyle: "solid",
    borderWidth: "4px",
    display: "flex",
    flexDirection: "column",
  },
  formTitleContainer: {
    backgroundColor: colors.goldCrayola,
    padding: "1% 0",
    textAlign: "center",
  },
  formTitle: {
    display: "initial",
    margin: "0 12%",
    whitespace: "nowrap",
  },
  formSubTitle: {
    margin: 0,
    textAlign: "center",
  },
  formContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "0 36px",
  },
  delimiter: {
    marginBottom: "5%",
  },
};
