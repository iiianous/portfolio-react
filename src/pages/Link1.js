import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import Main from "../layout/Main";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: 90,
        paddingBottom: 90,
        backgroundColor: theme.palette.primary.main,
    },
    textColor: {
        color: '#ffffff'
    }
}))

function Link1() {
    const classes = useStyles();
    return (
        <>
            <Main>
                <Container className={classes.root} maxWidth={false}>
                    <Container maxWidth="lg" direction="column" alignItems="center">
                        <Grid container direction="column" alignItems="center">
                            <Typography className={classes.textColor} variant="h4">
                               in progress...
                            </Typography>
                        </Grid>
                    </Container>
                </Container>
            </Main>
        </>
    )
}

export default Link1;