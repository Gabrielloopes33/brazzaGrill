import React, { useState, useEffect } from 'react';
import { Box, Button, Chip, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DirectionsIcon from '@mui/icons-material/Directions';
import QrCode2Icon from '@mui/icons-material/QrCode2';

interface BusinessHours {
  day: string;
  hours: string;
  isToday?: boolean;
}

const LocationSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [nextOpenTime, setNextOpenTime] = useState('');

  const businessHours: BusinessHours[] = [
    { day: 'Monday', hours: 'Closed' },
    { day: 'Tuesday', hours: 'Closed' },
    { day: 'Wednesday', hours: '11:00 AM - 9:00 PM' },
    { day: 'Thursday', hours: '11:00 AM - 9:00 PM' },
    { day: 'Friday', hours: '11:00 AM - 10:00 PM' },
    { day: 'Saturday', hours: '12:00 PM - 10:00 PM' },
    { day: 'Sunday', hours: '12:00 PM - 8:00 PM' },
  ];

  useEffect(() => {
    const checkIfOpen = () => {
      const now = new Date();
      const day = now.getDay();
      const hour = now.getHours();
      
      // Monday (1) and Tuesday (2) - Closed
      if (day === 1 || day === 2) {
        setIsOpen(false);
        setNextOpenTime('Wednesday at 11:00 AM');
      }
      // Sunday (0)
      else if (day === 0) {
        setIsOpen(hour >= 12 && hour < 20);
        setNextOpenTime(hour >= 20 ? 'Wednesday at 11:00 AM' : '');
      }
      // Saturday (6)
      else if (day === 6) {
        setIsOpen(hour >= 12 && hour < 22);
        setNextOpenTime(hour >= 22 ? 'Sunday at 12:00 PM' : '');
      }
      // Wednesday (3), Thursday (4) - 11 AM to 9 PM
      else if (day === 3 || day === 4) {
        setIsOpen(hour >= 11 && hour < 21);
        setNextOpenTime(hour >= 21 ? 'Tomorrow at 11:00 AM' : '');
      }
      // Friday (5) - 11 AM to 10 PM
      else if (day === 5) {
        setIsOpen(hour >= 11 && hour < 22);
        setNextOpenTime(hour >= 22 ? 'Saturday at 12:00 PM' : '');
      }
    };

    checkIfOpen();
    const interval = setInterval(checkIfOpen, 60000); // Check every minute
    
    return () => clearInterval(interval);
  }, []);

  const address = '3802 Hanson Street, Fort Myers, FL';
  const googleMapsUrl = 'https://www.google.com/maps/place/3802+Hanson+St,+Fort+Myers,+FL+33916';
  const googleMapsEmbedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.0!2d-81.8723!3d26.6406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88db43e5e5e5e5e5%3A0x0!2s3802%20Hanson%20St%2C%20Fort%20Myers%2C%20FL%2033916!5e0!3m2!1sen!2sus!4v1234567890!5m2!1sen!2sus';

  return (
    <Box
      id="location"
      sx={{
        py: { xs: 8, md: 10 },
        background: 'linear-gradient(180deg, #0A0A0A 0%, #1A1A1A 100%)',
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
            variant="h2"
            sx={{
              mb: 2,
              fontWeight: 700,
              background: 'linear-gradient(45deg, #FFFFFF 30%, #FF6B00 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            📍 Where to Find Us
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: 700,
              mx: 'auto',
            }}
          >
            Come visit our food truck and experience authentic Brazilian burgers
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 4,
            alignItems: 'start',
          }}
        >
          {/* Map */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Box
              sx={{
                width: '100%',
                height: { xs: 300, md: 400 },
                borderRadius: 3,
                overflow: 'hidden',
                border: '2px solid',
                borderColor: 'primary.main',
                boxShadow: '0 8px 24px rgba(255, 107, 0, 0.3)',
              }}
            >
              <iframe
                src={googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Brazza Grill Location"
              />
            </Box>
          </Box>

          {/* Info */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Status Badge */}
            <Chip
              icon={<AccessTimeIcon />}
              label={isOpen ? '🔥 CURRENTLY OPEN' : `CLOSED - Opens ${nextOpenTime}`}
              color={isOpen ? 'success' : 'error'}
              sx={{
                mb: 3,
                fontSize: '1rem',
                fontWeight: 700,
                py: 2.5,
                px: 1,
              }}
            />

            {/* Address */}
            <Box sx={{ mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <LocationOnIcon sx={{ color: 'primary.main', mr: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Location
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ color: 'text.secondary', ml: 4 }}>
                {address}
              </Typography>
            </Box>

            {/* Hours */}
            <Box sx={{ mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <AccessTimeIcon sx={{ color: 'primary.main', mr: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Hours
                </Typography>
              </Box>
              <Box sx={{ ml: 4 }}>
                {businessHours.map((item, index) => {
                  const today = new Date().getDay();
                  const dayIndex = index === 6 ? 0 : index + 1;
                  const isToday = today === dayIndex;
                  const isClosed = item.hours === 'Closed';

                  return (
                    <Box
                      key={item.day}
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        py: 0.75,
                        borderBottom: index < businessHours.length - 1 ? '1px solid' : 'none',
                        borderColor: 'rgba(255, 255, 255, 0.1)',
                        bgcolor: isToday ? 'rgba(220, 20, 60, 0.1)' : 'transparent',
                        px: isToday ? 1 : 0,
                        borderRadius: isToday ? 1 : 0,
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          fontWeight: isToday ? 700 : 400,
                          color: isToday ? 'primary.main' : isClosed ? 'text.disabled' : 'text.primary',
                        }}
                      >
                        {item.day}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: isToday ? 'primary.main' : isClosed ? 'text.disabled' : 'text.secondary',
                          fontStyle: isClosed ? 'italic' : 'normal',
                        }}
                      >
                        {item.hours}
                      </Typography>
                    </Box>
                  );
                })}
              </Box>
            </Box>

            {/* Buttons */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<DirectionsIcon />}
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                fullWidth
              >
                Get Directions
              </Button>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                startIcon={<QrCode2Icon />}
                fullWidth
              >
                Scan QR Code
              </Button>
            </Box>

            {/* Additional Info */}
            <Box
              sx={{
                mt: 4,
                p: 3,
                bgcolor: 'rgba(255, 107, 0, 0.1)',
                borderRadius: 2,
                border: '1px solid rgba(255, 107, 0, 0.3)',
              }}
            >
              <Typography variant="body2" sx={{ color: 'text.primary' }}>
                💡 <strong>Tip:</strong> Check our Instagram{' '}
                <Box
                  component="a"
                  href="https://instagram.com/brazzagrill"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: 'primary.main',
                    textDecoration: 'none',
                    fontWeight: 700,
                  }}
                >
                  @brazzagrill
                </Box>{' '}
                for our exact location updates!
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default LocationSection;
