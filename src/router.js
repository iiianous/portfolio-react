import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {createTheme, ThemeProvider, responsiveFontSizes } from "@material-ui/core"

import Home from "./pages/Home"
import Link1 from "./pages/Link1"

let theme = createTheme({
    palette: {
        primary: {
            main: '#f44336'
        },
        secondary: {
            main: '#000000'
        }
    }
})
theme = responsiveFontSizes(theme);

function AppRouter() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Switch>
                    <Route exact={true} path="/" component={Home} />
                    <Route exact={true} path="/link1" component={Link1} />
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default AppRouter;