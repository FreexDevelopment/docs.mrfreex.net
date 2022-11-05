import React from "react";
import BackgroundButton from "./BackgroundButton";
import { Tooltip } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#CC3028",
    },
    secondary: {
      main: "#202020",
    },
  },

  components: {
    MuiTooltip: {
        styleOverrides: {
            tooltip: {
                backgroundColor: "#292929",
                borderRadius: "10px",
                padding: "7px 10px",
                fontSize: "12pt"
            }
        }
    }
}
});

export const LegacyButton = React.forwardRef((props,ref) => {
    return <ThemeProvider theme={theme}>
        <Tooltip className="tooltip" placement="top" title="Legacy products are not likely to receive updates anymore. Bug fixing is still guaranteed.">
            <BackgroundButton {...props} ref={ref} color="#ff8000" icon="faWarning">Legacy</BackgroundButton>
        </Tooltip>
    </ThemeProvider>
})