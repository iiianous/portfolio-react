import React from "react";
import { Grid, Typography, Container, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: 90,
        paddingBottom: 90,
        backgroundColor: '#f44336',
        height: 450,
    },
    btn: {
        marginTop: 30,
        padding: '12px 24px',
        fontSize: 18,
        borderRadius: 0,
    },
    textColor: {
        color: '#ffffff'
    },
    displayText: {
        color: theme.palette.primary.contrastText,
        marginBottom: 15,
        textTransform: 'uppercase'
    }
}));

function SectionBanner() {
    const classes = useStyles();

    const handleClick = () => {
        window.open("https://github.com/iiianous/portfolio-react/", "_blank");
    }

    return (
        <>
            <Container className={classes.root} maxWidth={false}>
                <Container maxWidth="lg">
                    <Grid container direction="column" alignItems="center">
                        <Typography className={classes.displayText} variant="h2" align="center">
                            Frontend Developer
                        </Typography>
                        <Typography variant="h5" className={classes.textColor} align="center">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan.
                        </Typography>
                        <Button onClick={handleClick} disableElevation size="large" className={classes.btn} color="secondary" variant="contained">
                            View source code
                        </Button>
                    </Grid>
                </Container>
            </Container>
        </>
    )
}

export default SectionBanner;