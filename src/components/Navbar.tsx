import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Box,
  Button,
  Chip,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  useScrollTrigger,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import { Link as ScrollLink } from 'react-scroll';

interface NavbarProps {
  isOpen: boolean;
}

const navItems = [
  { label: 'HOME', to: 'hero' },
  { label: 'MENU', to: 'menu' },
  { label: 'WHERE', to: 'location' },
  { label: 'ORDER', to: 'order' },
  { label: 'REVIEWS', to: 'reviews' },
  { label: 'OUR STORY', to: 'story' },
];

const Navbar: React.FC<NavbarProps> = ({ isOpen }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.to);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const drawer = (
    <Box
      sx={{
        width: 250,
        height: '100%',
        bgcolor: 'secondary.main',
        pt: 2,
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 2, mb: 2 }}>
        <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.to} disablePadding>
            <ScrollLink
              to={item.to}
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={handleNavClick}
              style={{ width: '100%', textDecoration: 'none' }}
            >
              <ListItemButton
                selected={activeSection === item.to}
                sx={{
                  color: 'white',
                  '&.Mui-selected': {
                    bgcolor: 'primary.main',
                    '&:hover': {
                      bgcolor: 'primary.dark',
                    },
                  },
                }}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ScrollLink>
          </ListItem>
        ))}
      </List>
      <Box sx={{ px: 2, mt: 3 }}>
        <ScrollLink to="order" smooth={true} duration={500} offset={-70}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleNavClick}
            size="large"
          >
            ORDER NOW
          </Button>
        </ScrollLink>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={trigger ? 4 : 0}
        sx={{
          bgcolor: trigger ? 'rgba(26, 26, 26, 0.98)' : 'transparent',
          backdropFilter: trigger ? 'blur(10px)' : 'none',
          transition: 'all 0.3s ease',
          borderBottom: trigger ? '1px solid rgba(255, 107, 0, 0.2)' : 'none',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            {/* Logo */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
              }}
            >
              <ScrollLink to="hero" smooth={true} duration={500}>
                <Box
                  component="img"
                  src="/logo.png"
                  alt="Brazza Grill"
                  sx={{
                    height: { xs: 40, md: 50 },
                    mr: 2,
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
                  }}
                  onError={(e) => {
                    // Fallback text logo
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </ScrollLink>
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Chip
                  icon={<LocalFireDepartmentIcon />}
                  label={isOpen ? 'OPEN NOW' : 'CLOSED'}
                  color={isOpen ? 'success' : 'error'}
                  size="small"
                  sx={{ fontWeight: 600 }}
                />
              </Box>
            </Box>

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
              {navItems.map((item) => (
                <ScrollLink
                  key={item.to}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  <Button
                    sx={{
                      color: activeSection === item.to ? 'primary.main' : 'white',
                      position: 'relative',
                      fontWeight: activeSection === item.to ? 700 : 500,
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: activeSection === item.to ? '80%' : '0%',
                        height: '2px',
                        bgcolor: 'primary.main',
                        transition: 'width 0.3s ease',
                      },
                      '&:hover::after': {
                        width: '80%',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                </ScrollLink>
              ))}
              <ScrollLink to="order" smooth={true} duration={500} offset={-70}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{
                    ml: 2,
                    animation: 'pulse 2s ease-in-out infinite',
                    '@keyframes pulse': {
                      '0%, 100%': { transform: 'scale(1)' },
                      '50%': { transform: 'scale(1.05)' },
                    },
                  }}
                >
                  ORDER NOW
                </Button>
              </ScrollLink>
            </Box>

            {/* Mobile Menu Button */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', gap: 1 }}>
              <Chip
                icon={<LocalFireDepartmentIcon />}
                label={isOpen ? 'OPEN' : 'CLOSED'}
                color={isOpen ? 'success' : 'error'}
                size="small"
                sx={{ display: { xs: 'none', sm: 'flex' } }}
              />
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ color: 'white' }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 250,
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
