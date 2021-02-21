import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

import "../views/stylesheet.css";

function SocialMediaBar() {

  function handleClick(props){
    console.log(props);
  }
  return (
    <div className="flex-container-row">
      <LinkedInIcon onClick={(e) => {handleClick(e)}}/>
      <InstagramIcon />
      <TwitterIcon />
    </div>
  )
}

export default SocialMediaBar