import React from 'react';
import { Box, Button, Chip, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import { Link as ScrollLink } from 'react-scroll';

const HeroSection: React.FC = () => {
  return (
    <Box
      id="hero"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background Video/Image */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      >
        {/* Video Background - replace with actual video */}
        <Box
          component="video"
          autoPlay
          loop
          muted
          playsInline
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: { xs: 'none', md: 'block' },
            opacity: 0.5,
          }}
          poster="/hero-poster.jpg"
        >
          <source src="/hero video.mp4" type="video/mp4" />
        </Box>
        
        {/* Fallback Image for Mobile */}
        <Box
          sx={{
            display: { xs: 'block', md: 'none' },
            width: '100%',
            height: '100%',
            backgroundImage: 'url(/hero-image.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.5,
          }}
        />
        
        {/* Fallback color if images fail to load */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #1A1A1A 0%, #2D2D2D 100%)',
            zIndex: -1,
          }}
        />
      </Box>

      {/* Gradient Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(180deg, rgba(10, 10, 10, 0.3) 0%, rgba(10, 10, 10, 0.5) 100%)',
          zIndex: 1,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          sx={{
            textAlign: 'center',
            color: 'white',
          }}
        >
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Chip
              icon={<LocalFireDepartmentIcon />}
              label="🔥 OPEN NOW IN FLORIDA"
              color="success"
              sx={{
                mb: 3,
                fontSize: '1rem',
                fontWeight: 700,
                py: 3,
                px: 2,
                animation: 'pulse 2s ease-in-out infinite',
                '@keyframes pulse': {
                  '0%, 100%': { transform: 'scale(1)' },
                  '50%': { transform: 'scale(1.05)' },
                },
              }}
            />
          </motion.div>

          {/* Main Headline */}
          <Typography
            variant="h1"
            component={motion.h1}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            sx={{
              mb: 2,
              fontWeight: 800,
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
              lineHeight: 1.2,
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.8)',
              background: 'linear-gradient(45deg, #FFFFFF 30%, #FF6B00 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Authentic Brazilian Burgers
          </Typography>

          {/* Subheadline */}
          <Typography
            variant="h4"
            component={motion.h2}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            sx={{
              mb: 1,
              fontWeight: 400,
              fontSize: { xs: '1.25rem', sm: '1.75rem', md: '2rem' },
              color: 'rgba(255, 255, 255, 0.9)',
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)',
            }}
          >
            in Fort Myers, Florida
          </Typography>

          <Typography
            variant="h6"
            component={motion.p}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            sx={{
              mb: 4,
              fontSize: { xs: '1rem', md: '1.25rem' },
              color: 'rgba(255, 255, 255, 0.8)',
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)',
            }}
          >
            6 years of passion. Now bringing excellence to Fort Myers.
          </Typography>

          {/* Statistics */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: { xs: 3, md: 6 },
              mb: 5,
              flexWrap: 'wrap',
            }}
          >
            <Box>
              <Typography variant="h3" sx={{ fontWeight: 700, color: 'primary.main' }}>
                10K+
              </Typography>
              <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                Happy Customers
              </Typography>
            </Box>
            <Box>
              <Typography variant="h3" sx={{ fontWeight: 700, color: 'primary.main' }}>
                6
              </Typography>
              <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                Years Experience
              </Typography>
            </Box>
            <Box>
              <Typography variant="h3" sx={{ fontWeight: 700, color: 'primary.main' }}>
                4.9
              </Typography>
              <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                Average Rating
              </Typography>
            </Box>
          </Box>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
          >
            <ScrollLink to="order" smooth={true} duration={500} offset={-70}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{
                  fontSize: { xs: '1.1rem', md: '1.3rem' },
                  py: { xs: 2, md: 2.5 },
                  px: { xs: 4, md: 6 },
                  borderRadius: 3,
                  boxShadow: '0 8px 24px rgba(255, 107, 0, 0.5)',
                  '&:hover': {
                    boxShadow: '0 12px 32px rgba(255, 107, 0, 0.7)',
                  },
                }}
              >
                🍔 ORDER NOW
              </Button>
            </ScrollLink>
          </motion.div>
        </Box>
      </Container>

      {/* Scroll Indicator */}
      <Box
        component={motion.div}
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        sx={{
          position: 'absolute',
          bottom: 30,
          left: '50%',
          transform: 'translateX(-50%)',
          cursor: 'pointer',
        }}
      >
        <ScrollLink to="order" smooth={true} duration={500} offset={-70}>
          <KeyboardArrowDownIcon
            sx={{
              fontSize: 48,
              color: 'white',
              opacity: 0.7,
              '&:hover': {
                opacity: 1,
              },
            }}
          />
        </ScrollLink>
      </Box>
    </Box>
  );
};

export default HeroSection;
