import React from 'react';
import { Box, Container, IconButton, Link, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link as ScrollLink } from 'react-scroll';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { label: 'Home', to: 'hero' },
      { label: 'Menu', to: 'menu' },
      { label: 'Location', to: 'location' },
      { label: 'Reviews', to: 'reviews' },
      { label: 'Our Story', to: 'story' },
      { label: 'Contact', to: 'contact' },
    ],
    deliveryApps: [
      { label: 'Speedzapp', url: 'https://speedzapp.com.br/brazzagrill' },
      { label: 'Uber Eats', url: 'https://www.ubereats.com/store/brazza-grill' },
      { label: 'DoorDash', url: 'https://www.doordash.com/store/brazza-grill' },
    ],
    legal: [
      { label: 'Privacy Policy', url: '/privacy' },
      { label: 'Terms of Service', url: '/terms' },
      { label: 'Refund Policy', url: '/refund' },
    ],
  };

  const socialLinks = [
    { icon: <InstagramIcon />, url: 'https://instagram.com/brazzagrill', label: 'Instagram' },
    { icon: <FacebookIcon />, url: 'https://facebook.com/brazzagrill', label: 'Facebook' },
    { icon: <WhatsAppIcon />, url: 'https://wa.me/13051234567', label: 'WhatsApp' },
    { icon: <EmailIcon />, url: 'mailto:hello@brazzagrill.com', label: 'Email' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#0A0A0A',
        borderTop: '1px solid rgba(255, 107, 0, 0.3)',
        pt: 6,
        pb: 3,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(4, 1fr)' }, gap: 4, mb: 4 }}>
          {/* Brand Column */}
          <Box>
            <Box sx={{ mb: 2 }}>
              <Box
                component="img"
                src="/logo.png"
                alt="Brazza Grill"
                sx={{
                  height: 60,
                  mb: 2,
                  filter: 'drop-shadow(0 2px 4px rgba(255, 107, 0, 0.3))',
                }}
                onError={(e) => {
                  // Fallback to text if logo fails
                  (e.currentTarget as HTMLImageElement).style.display = 'none';
                }}
              />
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: 'primary.main',
                  mb: 1,
                }}
              >
                Brazza Grill
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2, lineHeight: 1.6 }}>
              Authentic Brazilian burgers in Miami, Florida. 
              Bringing 6 years of passion and excellence to every bite.
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 1 }}>
              <LocationOnIcon sx={{ fontSize: 18, color: 'primary.main' }} />
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Miami, Florida
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Mon-Thu: 11AM-9PM | Fri: 11AM-10PM<br />
              Sat: 12PM-10PM | Sun: 12PM-8PM
            </Typography>
          </Box>

          {/* Quick Links */}
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: 'white' }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {footerLinks.quickLinks.map((link) => (
                <ScrollLink
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  style={{ textDecoration: 'none' }}
                >
                  <Link
                    component="span"
                    sx={{
                      color: 'text.secondary',
                      cursor: 'pointer',
                      fontSize: '0.875rem',
                      '&:hover': {
                        color: 'primary.main',
                        textDecoration: 'none',
                      },
                    }}
                  >
                    {link.label}
                  </Link>
                </ScrollLink>
              ))}
            </Box>
          </Box>

          {/* Delivery Apps */}
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: 'white' }}>
              Order Now
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {footerLinks.deliveryApps.map((link) => (
                <Link
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: 'text.secondary',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Box>
          </Box>

          {/* Connect */}
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: 'white' }}>
              Connect With Us
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
              {socialLinks.map((social) => (
                <IconButton
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="small"
                  sx={{
                    color: 'text.secondary',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    '&:hover': {
                      color: 'primary.main',
                      borderColor: 'primary.main',
                      bgcolor: 'rgba(220, 20, 60, 0.1)',
                    },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
            <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 1 }}>
              Follow us for exclusive deals and updates!
            </Typography>
          </Box>
        </Box>

        {/* Divider */}
        <Box
          sx={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            pt: 3,
            mt: 3,
          }}
        >
          {/* Legal Links */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 3,
              mb: 2,
              flexWrap: 'wrap',
            }}
          >
            {footerLinks.legal.map((link) => (
              <Link
                key={link.label}
                href={link.url}
                sx={{
                  color: 'text.secondary',
                  textDecoration: 'none',
                  fontSize: '0.75rem',
                  '&:hover': {
                    color: 'primary.main',
                  },
                }}
              >
                {link.label}
              </Link>
            ))}
          </Box>

          {/* Copyright */}
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
              © {currentYear} Brazza Grill. All rights reserved.
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: 'text.secondary',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 0.5,
              }}
            >
              Made with <FavoriteIcon sx={{ fontSize: 14, color: 'primary.main' }} /> in Miami, Florida
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
