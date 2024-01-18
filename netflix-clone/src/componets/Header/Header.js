import React from 'react';
import "./header.css";
// import NetflixLogo  from "../../assets/images"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

function Header() {
  return (
    <div className='header_outer_container'>       
        <div className='header_container'>
            <div className='header_left'>
                <ul>
                    {/* <li><img src={NetflixLogo} alt='Netflix Logo' width='100' /></li> */}
                    <li>Netflix</li>
                    <li>Home</li>
                    <li>TVShows</li>
                    <li>Movises</li>
                    <li>Latest</li>
                    <li>MyList</li>
                    <li>Browsr by Language</li>
                </ul>
            </div>
            <div className='header_right'>
                <ul>
                    <li><SearchIcon/></li>
                    <li><NotificationsNoneIcon/></li>
                    <li><AccountBoxIcon/></li>
                    <li><ArrowDropDownIcon/></li>                    
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header