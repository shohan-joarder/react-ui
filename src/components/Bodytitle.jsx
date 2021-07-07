import React from 'react'
import {Typography,Grid,Container} from '@material-ui/core'
import useStyles from '../styles'
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

export default function Bodytitle() {
    const classes = useStyles();
    return (
        <Container maxWidth="sm" className={classes.container}>
        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
            Photo Album
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" pragraph>
            Hello everyone, This is a photo album. This site developed by Coder71. 
        </Typography>
        <div>
            <Grid container spacing={2} justify="center">
                <Grid item>
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    className={classes.button}
                    startIcon={<SaveIcon />}
                >
                    See my photos
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    className={classes.button}
                    startIcon={<SaveIcon />}
                >
                    More Actions
                </Button>
                </Grid>                        
            </Grid>
        </div>
    </Container>
    )
}
