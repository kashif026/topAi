import { createTheme } from "@mui/material";
import { COLORS } from "../constants/color";

const theme = createTheme({
  palette: {
    primary: { main: COLORS.primary.main },
    background: { default: COLORS.background.main },
    text: { primary: COLORS.text.primary },
  },
});
export default theme;