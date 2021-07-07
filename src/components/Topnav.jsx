import React from 'react'
import { Typography,AppBar,Toolbar,Grid, IconButton, Badge } from '@material-ui/core'
import { PhotoCamera} from "@material-ui/icons";
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

export default function Topnav() {
    return (
        <AppBar position="relative">
            <Grid container allignItems="center">
                <Grid item >
                    <Toolbar>
                        <PhotoCamera/>
                        <Typography variant="h6">
                            Photo Album
                        </Typography>
                    </Toolbar>
                </Grid>
                <Grid item sm></Grid>
                <Grid item >
                    <IconButton>
                        <Badge badgeContent={4} color="secondary">
                            <NotificationsNoneIcon />
                        </Badge>
                    </IconButton>
                    <IconButton>
                        <Badge badgeContent={5} color="primary">
                            <ChatBubbleOutlineIcon />
                        </Badge>
                    </IconButton>   
                    <IconButton>
                        <PowerSettingsNewIcon />
                    </IconButton>  
                </Grid>
            </Grid>
        </AppBar>
    )
}