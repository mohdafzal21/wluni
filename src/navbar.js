import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles'; //npm install @material-ui/core --save
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'; //npm install @material-ui/icons --save
import {
    Link
} from 'react-router-dom'


const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,

    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

const NavBar = (props) => {
    const { classes, isAuth, logoutHandler } = props;

    return (
        <div>
            <AppBar position="static" style={{ backgroundColor: '#282c34', boxShadow: '0 0 0 0 black' }}>
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" align="left" className={classes.grow}>
                    <Link color="inherit" to="/">Movies</Link>
                    </Typography>
                    <Button><Link color="inherit" to="/">Home</Link></Button>

                    {
                        isAuth ?
                            <Button color="inherit" onClick={logoutHandler}>Logout</Button>
                            :
                            <span>
                                <Button><Link color="inherit" to='/signup' modal="true" >SignUp</Link></Button>
                                <Button><Link color="inherit" to={{pathname: '/login'}} >SignIn</Link></Button>
                            </span>
                    }
                </Toolbar>
            </AppBar>
        </div>
    )
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);