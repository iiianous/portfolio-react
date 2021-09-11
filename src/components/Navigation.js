import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        boxShadow: "0px 11px 9px -8px rgba(0,0,0,0.18)",
        zIndex: 10,
        position: "relative",
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    menu: {
        margin: 0,
        padding: 0,

        '& li': {
            display: 'inline-block',

            '& a': {
                display: 'block',
                padding: '15px',
                textDecoration: 'none',
                color: '#ffffff'
            },
            '& a:hover': {
                backgroundColor: '#ffffff',
                color: theme.palette.primary.main
            },
        }
    },
    active: {
        color: '#f44336 !important',
        backgroundColor: '#ffffff',
    },
}));

function Navigation() {
    const classes = useStyles();

    return (
        <>
            <Container className={classes.root} maxWidth={false}>
                <Container maxWidth="lg">
                    <Grid container direction="row" justifyContent="space-between" alignItems="center">
                        <Grid item flexGrow={1}>
                            <ul className={classes.menu}>
                                <li>
                                    <NavLink exact activeClassName={classes.active} to="/">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink exact activeClassName={classes.active} to="/link1">Link1</NavLink>
                                </li>
                            </ul>
                        </Grid>
                        <Grid item>
                            <IconButton style={{ color: '#ffffff' }} className={classes.menuButton}>
                                <MenuIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Container>
            </Container>
        </>
    )
}

export default Navigation;