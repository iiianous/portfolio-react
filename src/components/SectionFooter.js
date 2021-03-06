import React from "react";
import { Grid, Typography, Container, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter, faLinkedin  } from '@fortawesome/free-brands-svg-icons'

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: 90,
        paddingBottom: 90
    },
    social: {
        '& a': {
            display: 'inline-block',
            width: 35,
            height: 35,
            lineHeight: 2,
            textAlign: 'center',
            border: `1px solid ${theme.palette.secondary.main}`,
            margin: '0 4px',
            transition: 'all .5s ease',
            color: theme.palette.secondary.main
        },
        '& a:hover': {
            color: theme.palette.primary.main,
            border: `1px solid ${theme.palette.primary.main}`,
        }
    }
}))

function SectionFooter() {
    const classes = useStyles();

    return (
        <>
            <Container className={classes.root} maxWidth={false}>
                <Container maxWidth="lg">
                    <Grid container direction="column" alignContent="center" justifyContent="center">
                        <Box className={classes.social} marginBottom={2}>
                            <a target="_blank" rel="noreferrer" href="https://www.facebook.com" >
                                <FontAwesomeIcon icon={faFacebookF}/>
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://www.instagram.com" >
                                <FontAwesomeIcon icon={faInstagram}/>
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://www.twitter.com" >
                                <FontAwesomeIcon icon={faTwitter}/>
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com" >
                                <FontAwesomeIcon icon={faLinkedin}/>
                            </a>
                        </Box>
                        <Typography align="center">Powered By: HTML/CSS</Typography>
                    </Grid>
                </Container>
            </Container>
        </>
    )
}

export default SectionFooter;