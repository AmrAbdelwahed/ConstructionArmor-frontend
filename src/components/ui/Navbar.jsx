import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { HiOutlineBars3 } from 'react-icons/hi2';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import HelpIcon from '@mui/icons-material/Help';
import MapIcon from '@mui/icons-material/Map';
import SecurityIcon from '@mui/icons-material/Security';
import StarsIcon from '@mui/icons-material/Stars';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import logo from '../../assets/constructionarmor-text.png';
import mapleLeaf from '../../assets/leaf.png';
import newLogo from '../../assets/ConstructionArmor.png';

import "@/assets/navbar.css";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuOptions = [
    { text: "Home", icon: <HomeIcon />, href: "/home" },
    { text: "How It Works", icon: <HelpIcon />, href: "#how-it-works" },
    { text: "Benefits", icon: <StarsIcon />, href: "#benefits" },
    { text: "Hiring", icon: <BusinessCenterIcon />, href: "#streamline-hiring" },
    { text: "Pricing", icon: <AttachMoneyIcon />, href: "#pricing" },
    { text: "About", icon: <InfoIcon />, href: "#about" }
  ];

  const handleNavigation = (href) => {
    if (href.startsWith('#')) {
      // If we're not on the home page and trying to access a section
      if (location.pathname !== '/home') {
        navigate('/home' + href);
      } else {
        // If we're already on home page, just scroll to the section
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // For non-hash routes (like /home)
      navigate(href);
    }
    setOpenMenu(false);
  };

  return (
    <nav className="header-bar">
      <div className="nav-logo-container" style={{ display: 'flex', alignItems: 'center' }}>
        <div 
          onClick={() => handleNavigation('/home')} 
          style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
        >
          {/* New company logo */}
          <img 
            src={newLogo} 
            alt="Company Logo" 
            style={{ 
              height: '90px', 
              width: 'auto', 
              borderRadius: '2px',
              marginLeft: '-12px'  // Adjust this value to get the spacing you want
            }} 
          />

          <img src={logo} alt="Construction Armor Logo" style={{ 
            width: '900px', 
            height: 'auto',
            transform: 'scaleX(1.34) scaleY(1.3)',
            transformOrigin: 'left center',
            marginLeft: '-12px'  // Adjust this value to get the spacing you want
          }} />
             
        </div>
      </div>
      <div className="navbar-links-container">
        {menuOptions.map((item) => (
          <a 
            key={item.text} 
            onClick={(e) => {
              e.preventDefault();
              handleNavigation(item.href);
            }}
            href={item.href}
            className="navbar-link"
          >
            {item.text}
          </a>
        ))}        
      </div>

        
      {/* Mobile Menu Button */}
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{
            width: 250,
            height: '100vh',
            backgroundColor: '#d11234',
            color: 'white',
            paddingTop: '10px',
            paddingBottom: '10px',
          }}
          role="presentation"
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton
                  onClick={() => handleNavigation(item.href)}
                >
                  <ListItemIcon sx={{ color: '#fff' }}>{item.icon}</ListItemIcon>
                  <ListItemText sx={{ color: '#fff' }} primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
            {/* Mobile registration options */}
            
          </List>
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;