import React, { useState, useEffect } from 'react';
import { Box, Avatar, Card, CardContent, Container, IconButton, Rating, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

interface Review {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  avatar: string;
  platform: 'Google' | 'Instagram' | 'Uber Eats' | 'DoorDash';
}

const reviews: Review[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'Miami Beach, FL',
    rating: 5,
    text: 'Best burger I\'ve had in Miami! The Brazilian flavors are incredible and the service is always friendly. Highly recommend the Brazza Classic!',
    avatar: '/avatars/avatar1.jpg',
    platform: 'Google',
  },
  {
    id: 2,
    name: 'Mike Rodriguez',
    location: 'Downtown Miami',
    rating: 5,
    text: 'Amazing food truck! The spicy Brazilian burger is fire 🔥 Worth every penny. Will definitely order again!',
    avatar: '/avatars/avatar2.jpg',
    platform: 'Uber Eats',
  },
  {
    id: 3,
    name: 'Amanda Silva',
    location: 'Coral Gables',
    rating: 5,
    text: 'Authentic Brazilian taste! As a Brazilian myself, I can confirm this is the real deal. The Brazilian lemonade is a must-try!',
    avatar: '/avatars/avatar3.jpg',
    platform: 'Instagram',
  },
  {
    id: 4,
    name: 'David Chen',
    location: 'Wynwood',
    rating: 5,
    text: 'Fast delivery, hot food, and incredible flavors. The bacon BBQ burger is my favorite. These guys know what they\'re doing!',
    avatar: '/avatars/avatar4.jpg',
    platform: 'DoorDash',
  },
  {
    id: 5,
    name: 'Jessica Martinez',
    location: 'Brickell',
    rating: 5,
    text: 'I order from Brazza at least twice a week. Quality is always consistent and the portions are generous. Love this place!',
    avatar: '/avatars/avatar5.jpg',
    platform: 'Google',
  },
  {
    id: 6,
    name: 'Carlos Oliveira',
    location: 'Little Havana',
    rating: 5,
    text: 'Finally, a food truck that gets it right! The truffle mushroom burger is out of this world. Customer service is top-notch too!',
    avatar: '/avatars/avatar6.jpg',
    platform: 'Uber Eats',
  },
  {
    id: 7,
    name: 'Emily Thompson',
    location: 'South Beach',
    rating: 5,
    text: 'Perfect late-night food! The Miami Heat burger lives up to its name - super spicy and delicious. Worth the heat!',
    avatar: '/avatars/avatar7.jpg',
    platform: 'Instagram',
  },
];

const ReviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + newDirection;
      if (newIndex < 0) newIndex = reviews.length - 1;
      if (newIndex >= reviews.length) newIndex = 0;
      return newIndex;
    });
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        paginate(1);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, isPaused]);

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'Google':
        return '#4285F4';
      case 'Instagram':
        return '#E1306C';
      case 'Uber Eats':
        return '#06C167';
      case 'DoorDash':
        return '#FF3008';
      default:
        return '#DC143C';
    }
  };

  return (
    <Box
      id="reviews"
      sx={{
        py: { xs: 8, md: 10 },
        background: 'linear-gradient(180deg, #1A1A1A 0%, #0A0A0A 100%)',
        overflow: 'hidden',
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
            ⭐ What Customers Say
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: 700,
              mx: 'auto',
            }}
          >
            Don't just take our word for it - hear from our happy customers
          </Typography>
        </Box>

        <Box
          sx={{
            position: 'relative',
            height: { xs: 400, md: 350 },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence initial={false} custom={direction}>
            <Card
              component={motion.div}
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              sx={{
                position: 'absolute',
                width: { xs: '100%', md: '80%' },
                maxWidth: 800,
                cursor: 'grab',
                '&:active': {
                  cursor: 'grabbing',
                },
              }}
            >
              <CardContent
                sx={{
                  p: { xs: 3, md: 5 },
                  textAlign: 'center',
                }}
              >
                <FormatQuoteIcon
                  sx={{
                    fontSize: 48,
                    color: 'primary.main',
                    opacity: 0.3,
                    mb: 2,
                  }}
                />

                <Rating
                  value={reviews[currentIndex].rating}
                  readOnly
                  size="large"
                  sx={{ mb: 2 }}
                />

                <Typography
                  variant="h6"
                  sx={{
                    mb: 3,
                    fontStyle: 'italic',
                    color: 'text.primary',
                    lineHeight: 1.6,
                    minHeight: { xs: 120, md: 80 },
                  }}
                >
                  "{reviews[currentIndex].text}"
                </Typography>

                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 2,
                    flexWrap: 'wrap',
                  }}
                >
                  <Avatar
                    src={reviews[currentIndex].avatar}
                    alt={reviews[currentIndex].name}
                    sx={{
                      width: 60,
                      height: 60,
                      border: '3px solid',
                      borderColor: 'primary.main',
                    }}
                  >
                    {reviews[currentIndex].name.charAt(0)}
                  </Avatar>
                  <Box sx={{ textAlign: 'left' }}>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      {reviews[currentIndex].name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {reviews[currentIndex].location}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: getPlatformColor(reviews[currentIndex].platform),
                        fontWeight: 600,
                      }}
                    >
                      via {reviews[currentIndex].platform}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <IconButton
            onClick={() => paginate(-1)}
            sx={{
              position: 'absolute',
              left: { xs: -10, md: 0 },
              zIndex: 2,
              bgcolor: 'background.paper',
              '&:hover': {
                bgcolor: 'primary.main',
              },
            }}
          >
            <ChevronLeftIcon />
          </IconButton>
          <IconButton
            onClick={() => paginate(1)}
            sx={{
              position: 'absolute',
              right: { xs: -10, md: 0 },
              zIndex: 2,
              bgcolor: 'background.paper',
              '&:hover': {
                bgcolor: 'primary.main',
              },
            }}
          >
            <ChevronRightIcon />
          </IconButton>
        </Box>

        {/* Pagination Dots */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 1,
            mt: 4,
          }}
        >
          {reviews.map((_, index) => (
            <Box
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              sx={{
                width: currentIndex === index ? 30 : 10,
                height: 10,
                borderRadius: 5,
                bgcolor: currentIndex === index ? 'primary.main' : 'rgba(255, 255, 255, 0.3)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: currentIndex === index ? 'primary.main' : 'rgba(255, 255, 255, 0.5)',
                },
              }}
            />
          ))}
        </Box>

        {/* Average Rating Display */}
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          sx={{
            mt: 6,
            textAlign: 'center',
            p: 3,
            bgcolor: 'rgba(255, 107, 0, 0.1)',
            borderRadius: 2,
            border: '1px solid rgba(255, 107, 0, 0.3)',
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main', mb: 1 }}>
            4.9/5.0
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Average rating from {reviews.length}+ reviews across all platforms
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default ReviewsSection;
