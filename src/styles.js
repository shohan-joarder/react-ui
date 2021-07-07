import { makeStyles } from '@material-ui/core/styles';
import { FlareSharp } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
        button: {
        margin: theme.spacing(1),
        marginTop:"40px"
        },
        container:{
            backgroundColor:theme.palette.background.paper,
            padding:theme.spacing(8,0,6)
        },
        icon:{
            marginRight:"20px"
        },
        cardGrid:{
            padding:"20px 0"
        },
        card:{
            height:"100%",
            display:"flex",
            flexDirection:'column'
        },
        cardMedia:{
            paddingTop:"56.25%" //16:9
        },
        cardContent:{
            flexGrow:1,
        },
        footer:{
            backgroundColor:theme.palette.background.paper,
            padding:"50px 0"
        }

  }));
  export default useStyles;