import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

interface DeliveryPlatform {
  name: string;
  logo: React.ReactNode;
  color: string;
  url: string;
  isPrimary?: boolean;
}

// Platform Logos as SVG components
const SpeedZappIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="currentColor">
    <path d="M24 4L4 24h8v16h8V32h8v8h8V24h8L24 4z" />
    <path d="M22 18l-6 8h4v6l6-8h-4v-6z" fill="#FFF" />
  </svg>
);

const DoorDashIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="currentColor">
    <path d="M34.5 19.5c-3.3-3.3-8.7-3.3-12 0l-9 9c-1.2 1.2-1.2 3.1 0 4.2 1.2 1.2 3.1 1.2 4.2 0l9-9c.9-.9 2.4-.9 3.3 0 .9.9.9 2.4 0 3.3l-9 9c-3.3 3.3-8.7 3.3-12 0-3.3-3.3-3.3-8.7 0-12l9-9c5.1-5.1 13.4-5.1 18.5 0 1.2 1.2 1.2 3.1 0 4.2-1.2 1.3-3.1 1.3-4.2.3z"/>
  </svg>
);

const UberEatsIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="currentColor">
    <path d="M24 8c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm-2 24h-4V18h4v14zm8 0h-4V18h4v14z"/>
    <circle cx="20" cy="14" r="2"/>
    <circle cx="28" cy="14" r="2"/>
  </svg>
);

const platforms: DeliveryPlatform[] = [
  {
    name: 'SPEEDZAPP',
    logo: <SpeedZappIcon />,
    color: '#FF6B00',
    url: 'https://speedzapp.com/brazzagrill',
    isPrimary: true,
  },
  // Temporarily hidden
  // {
  //   name: 'DoorDash',
  //   logo: <DoorDashIcon />,
  //   color: '#FF3008',
  //   url: 'https://www.doordash.com/store/brazza-grill',
  // },
  // {
  //   name: 'Uber Eats',
  //   logo: <UberEatsIcon />,
  //   color: '#06C167',
  //   url: 'https://www.ubereats.com/store/brazza-grill',
  // },
];

const QuickOrderSection: React.FC = () => {
  return (
    <Box
      id="order"
      sx={{
        py: { xs: 6, md: 8 },
        background: 'linear-gradient(180deg, #0A0A0A 0%, #1A1A1A 100%)',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, #DC143C 50%, transparent 100%)',
        },
      }}
    >
      <Container maxWidth="lg">
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          sx={{ textAlign: 'center', mb: 5 }}
        >
          <Typography
            variant="h3"
            sx={{
              mb: 2,
              fontWeight: 700,
              background: 'linear-gradient(45deg, #FFFFFF 30%, #FF6B00 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            🍔 Order Now
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: 600,
              mx: 'auto',
            }}
          >
            Where would you like to order from?
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: 4,
          }}
        >
          {platforms.map((platform, index) => (
            <Box
              key={platform.name}
              component={motion.div}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              sx={{ width: { xs: '100%', sm: '400px' } }}
            >
              <Button
                variant="contained"
                fullWidth
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                endIcon={<ChevronRightIcon />}
                sx={{
                  height: { xs: 100, md: platform.isPrimary ? 140 : 120 },
                  background: platform.isPrimary
                    ? `linear-gradient(135deg, ${platform.color} 0%, ${platform.color}dd 100%)`
                    : `linear-gradient(135deg, ${platform.color}dd 0%, ${platform.color}aa 100%)`,
                  borderRadius: 3,
                  border: platform.isPrimary ? '2px solid' : 'none',
                  borderColor: platform.isPrimary ? 'primary.main' : 'transparent',
                  boxShadow: platform.isPrimary
                    ? `0 8px 24px ${platform.color}66`
                    : `0 4px 16px ${platform.color}44`,
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: `0 12px 32px ${platform.color}88`,
                    transform: 'translateY(-4px)',
                  },
                  '&::before': platform.isPrimary
                    ? {
                        content: '"⭐ MOST POPULAR"',
                        position: 'absolute',
                        top: 10,
                        right: -30,
                        bgcolor: 'primary.main',
                        color: 'white',
                        px: 4,
                        py: 0.5,
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        transform: 'rotate(45deg)',
                        transformOrigin: 'center',
                      }
                    : {},
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  <Box
                    sx={{
                      fontSize: { xs: '2.5rem', md: '3rem' },
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {platform.logo}
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      color: 'white',
                      textTransform: 'uppercase',
                    }}
                  >
                    {platform.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.9)',
                      fontSize: '0.9rem',
                    }}
                  >
                    Order Now →
                  </Typography>
                </Box>
              </Button>
            </Box>
          ))}
        </Box>

        {/* Additional Info */}
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          sx={{
            mt: 5,
            p: 3,
            bgcolor: 'rgba(255, 107, 0, 0.1)',
            borderRadius: 2,
            border: '1px solid rgba(255, 107, 0, 0.3)',
            textAlign: 'center',
          }}
        >
          <Typography variant="body1" sx={{ color: 'text.primary', mb: 1 }}>
            💡 <strong>Pro Tip:</strong> Follow us on Instagram{' '}
            <Box
              component="a"
              href="https://instagram.com/brazzagrill"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: 'primary.main',
                textDecoration: 'none',
                fontWeight: 700,
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              @brazzagrill
            </Box>{' '}
            for exclusive deals and promotions!
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Free delivery on orders over $30 • Average delivery time: 25-35 minutes
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default QuickOrderSection;
