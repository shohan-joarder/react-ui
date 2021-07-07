import React from 'react'
import { Typography } from '@material-ui/core'
import useStyles from '../styles';

const Footer = () =>{
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Typography variant="h6" align="center"  gutterBottom> 
                    Footer
            </Typography> 
            <Typography variant="subtitle1" align="center" color="textPrimary"> 
                    Footer content here.
            </Typography>  
        </footer>
    )
}
export default Footer;