import style from './AuthLinks.module.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonIcon from '@mui/icons-material/Person';
import Grid from '@mui/material/Grid';


export default function AuthLinks(){
    return (
        <Grid container>
        <Grid item xs={12} md={6}>
          <Card variant="outlined" className={style.card}>
            <CardContent className={style.card_content}>
              <PersonIcon className={style.icon} />
            </CardContent>
            <CardActions className={style.card_actions}>
              <Button sx={{ color: "white", fontWeight: "600" }}>Login</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card variant="outlined" className={style.card}>
            <CardContent className={style.card_content}>
              <PersonAddIcon className={style.icon} />
            </CardContent>
            <CardActions className={style.card_actions}>
              <Button sx={{ color: "white", fontWeight: "600" }}>
                Sign up
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    )
}