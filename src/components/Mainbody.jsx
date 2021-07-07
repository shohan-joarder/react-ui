import React from 'react'
import {Typography,Card,CardActions,CardContent,CardMedia,Grid,Container} from '@material-ui/core'
import useStyles from '../styles'
import Button from '@material-ui/core/Button';
const cards =[1,2,3,4,5,6,7,8,9];

export default function Mainbody() {
    const classes = useStyles();
    return (
        <Container className={classes.cardGrid} maxWidth="md" >
            <Grid container spacing={4}>
                {cards.map((card)=>(
                    <Grid item key={card} xs={12} sm={6} md={4} lg={3}>
                        <Card className={classes.card}>
                            <CardMedia className={classes.cardMedia}
                            image="https://source.unsplash.com/random"
                            title="image title"
                            />
                            <CardContent
                                className={classes.cardContent}
                            >
                                <Typography gutterBottom variant="h5">
                                    Heading
                                </Typography>
                                <Typography>
                                    This section is use to describe about the card.
                                </Typography>
                            </CardContent>
                            <CardActions align="center"> 
                                <Button size="small" color="primary">View</Button>
                                <Button size="small" color="secondary">Details</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}                        
            </Grid>
        </Container>
    )
}
