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

export const ButtonFlex = React.forwardRef((props,ref) => {
  return <div style={{ "display" : "flex", "columnGap" : "2ch" }}>
    {props.children}
  </div>
})

export const ServerButton = React.forwardRef((props,ref) => {
  return <ThemeProvider theme={theme}>
      <Tooltip className="tooltip" placement="top" title="This section is server-sided">
          <BackgroundButton {...props} ref={ref} color="#2849cc" icon="faGears">Server</BackgroundButton>
      </Tooltip>
  </ThemeProvider>
})

export const ClientButton = React.forwardRef((props,ref) => {
  return <ThemeProvider theme={theme}>
      <Tooltip className="tooltip" placement="top" title="This section is client-sided">
          <BackgroundButton {...props} ref={ref} color="#2830cc" icon="faUser">Client</BackgroundButton>
      </Tooltip>
  </ThemeProvider>
})

export const LegacyButton = React.forwardRef((props,ref) => {
    return <ThemeProvider theme={theme}>
        <Tooltip className="tooltip" placement="top" title="Legacy products are not likely to receive updates anymore. Bug fixing is still guaranteed.">
            <BackgroundButton {...props} ref={ref} color="#ff8000" icon="faWarning">Legacy</BackgroundButton>
        </Tooltip>
    </ThemeProvider>
})

export const WIPButton = React.forwardRef((props,ref) => {
    return <ThemeProvider theme={theme}>
        <Tooltip className="tooltip" placement="top" title="This category of the wiki is still work in progress.">
            <BackgroundButton {...props} ref={ref} color="#bc2b2b" icon="faPersonDigging">Work in Progress</BackgroundButton>
        </Tooltip>
    </ThemeProvider>
})