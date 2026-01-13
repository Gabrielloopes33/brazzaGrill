import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const OurStorySection: React.FC = () => {
  return (
    <Box
      id="story"
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
          sx={{ textAlign: 'center', mb: 6 }}
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
            🇧🇷 ➡️ 🇺🇸 Our Story
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: 700,
              mx: 'auto',
            }}
          >
            From Brazil to Fort Myers - A Journey of Passion and Flavor
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 5,
            alignItems: 'center',
          }}
        >
          {/* Text Content */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            sx={{ order: { xs: 2, md: 1 } }}
          >
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  color: 'primary.main',
                }}
              >
                Born in Brazil 🇧🇷
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.primary',
                  lineHeight: 1.8,
                  mb: 2,
                }}
              >
                Our story began over 6 years ago in the vibrant streets of Brazil, where we discovered 
                our passion for creating the perfect burger. We spent years perfecting our recipes, 
                sourcing the finest ingredients, and learning what makes a burger truly unforgettable.
              </Typography>
            </Box>

            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  color: 'primary.main',
                }}
              >
                Moving to Fort Myers 🇺🇸
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.primary',
                  lineHeight: 1.8,
                  mb: 2,
                }}
              >
                Driven by a dream to share authentic Brazilian flavors with America, we made the bold 
                decision to bring Brazza Grill to Fort Myers, Florida. We wanted to introduce the unique 
                combination of Brazilian hospitality and gourmet burger craftsmanship to a new audience.
              </Typography>
            </Box>

            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  color: 'primary.main',
                }}
              >
                Our Vision & Values ✨
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.primary',
                  lineHeight: 1.8,
                  mb: 2,
                }}
              >
                At Brazza Grill, we believe food is more than just sustenance—it's an experience. 
                Every burger we craft tells a story of passion, quality, and authenticity. We're 
                committed to using only premium ingredients, treating every customer like family, 
                and bringing a taste of Brazil to every bite.
              </Typography>
            </Box>

            <Box
              sx={{
                p: 3,
                bgcolor: 'rgba(255, 107, 0, 0.1)',
                borderRadius: 2,
                border: '2px solid',
                borderColor: 'primary.main',
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  mb: 1,
                  color: 'primary.main',
                }}
              >
                Our Promise
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.primary',
                  lineHeight: 1.8,
                  fontStyle: 'italic',
                }}
              >
                "We promise to deliver not just a meal, but an authentic Brazilian experience with 
                every order. From our food truck to your table, we bring passion, quality, and a 
                piece of our heritage in every burger."
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'text.secondary',
                  mt: 2,
                  textAlign: 'right',
                }}
              >
                — The Brazza Grill Family
              </Typography>
            </Box>
          </Box>

          {/* Images */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
              order: { xs: 1, md: 2 },
            }}
          >
            {/* Before Image */}
            <Box
              sx={{
                position: 'relative',
                borderRadius: 3,
                overflow: 'hidden',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6)',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: 15,
                  left: 15,
                  bgcolor: 'rgba(255, 107, 0, 0.9)',
                  color: 'white',
                  px: 2,
                  py: 1,
                  borderRadius: 1,
                  fontWeight: 700,
                  zIndex: 1,
                }}
              >
                🇧🇷 BRAZIL - 2018
              </Box>
              <Box
                component="img"
                src="/story-brazil.jpg"
                alt="Brazza Grill in Brazil"
                sx={{
                  width: '100%',
                  height: { xs: 250, md: 300 },
                  objectFit: 'cover',
                  display: 'block',
                }}
                onError={(e) => {
                  (e.target as HTMLElement).style.background =
                    'linear-gradient(135deg, #DC143C 0%, #1A1A1A 100%)';
                }}
              />
            </Box>

            {/* After Image */}
            <Box
              sx={{
                position: 'relative',
                borderRadius: 3,
                overflow: 'hidden',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6)',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: 15,
                  left: 15,
                  bgcolor: 'rgba(6, 193, 103, 0.9)',
                  color: 'white',
                  px: 2,
                  py: 1,
                  borderRadius: 1,
                  fontWeight: 700,
                  zIndex: 1,
                }}
              >
                🇺🇸 Fort Myers - 2024
              </Box>
              <Box
                component="img"
                src="/story-Fort Myers.jpg"
                alt="Brazza Grill in Fort Myers"
                sx={{
                  width: '100%',
                  height: { xs: 250, md: 300 },
                  objectFit: 'cover',
                  display: 'block',
                }}
                onError={(e) => {
                  (e.target as HTMLElement).style.background =
                    'linear-gradient(135deg, #06C167 0%, #1A1A1A 100%)';
                }}
              />
            </Box>

            {/* Stats */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 2,
              }}
            >
              {[
                { value: '6+', label: 'Years' },
                { value: '10K+', label: 'Customers' },
                { value: '4.9', label: 'Rating' },
              ].map((stat, index) => (
                <Box
                  key={index}
                  component={motion.div}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  sx={{
                    textAlign: 'center',
                    p: 2,
                    bgcolor: 'background.paper',
                    borderRadius: 2,
                    border: '1px solid rgba(220, 20, 60, 0.3)',
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: 700, color: 'primary.main', mb: 0.5 }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {stat.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default OurStorySection;
