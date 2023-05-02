import style from './Contact.module.css'
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';


export default function Contact(){
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };
      
    return (
        <div className={style.contact}>
        <IconButton sx={{color:'#2A2F4F'}} onClick={openInNewTab.bind(null,"https://instagram.com")}>
          <InstagramIcon fontSize="medium" sx={{ paddingX: "30px" }} />
        </IconButton>
        <IconButton sx={{color:'#2A2F4F'}} onClick={openInNewTab.bind(null,"https://youtube.com")}>
        <YouTubeIcon fontSize="medium" sx={{ paddingX: "30px" }} />
        </IconButton>
        <IconButton sx={{color:'#2A2F4F'}} onClick={openInNewTab.bind(null,"https://facebook.com")}>
        <FacebookIcon fontSize="medium" sx={{ paddingX: "30px" }} />
        </IconButton>
        <IconButton sx={{color:'#2A2F4F'}} onClick={openInNewTab.bind(null,"https://twitter.com")}>
        <TwitterIcon fontSize="medium" sx={{ paddingX: "30px" }} />
        </IconButton>
      </div>
    );
}