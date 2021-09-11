import React from "react";
import { Grid, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: 90,
        paddingBottom: 90,
        backgroundColor: theme.palette.grey[800]
    },
    textColor: {
        color: '#ffffff'
    }
}))

function SectionBanner() {
    const classes = useStyles();

    return (
        <>
            <Container className={classes.root} maxWidth={false}>
                <Container maxWidth="lg">
                    <Grid container alignContent="center" justifyContent="center">
                        <Typography className={classes.textColor} variant="h4">
                            Quote of the day: Coffee yeah!
                        </Typography>
                    </Grid>
                </Container>
            </Container>
        </>
    )
}

export default SectionBanner;