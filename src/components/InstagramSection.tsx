import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import InstagramIcon from '@mui/icons-material/Instagram';

interface InstagramPost {
  id: number;
  image: string;
  link: string;
}

const instagramPosts: InstagramPost[] = [
  { id: 1, image: '/instagram/post1.jpg', link: 'https://instagram.com/p/example1' },
  { id: 2, image: '/instagram/post2.jpg', link: 'https://instagram.com/p/example2' },
  { id: 3, image: '/instagram/post3.jpg', link: 'https://instagram.com/p/example3' },
  { id: 4, image: '/instagram/post4.jpg', link: 'https://instagram.com/p/example4' },
  { id: 5, image: '/instagram/post5.jpg', link: 'https://instagram.com/p/example5' },
  { id: 6, image: '/instagram/post6.jpg', link: 'https://instagram.com/p/example6' },
  { id: 7, image: '/instagram/post7.jpg', link: 'https://instagram.com/p/example7' },
  { id: 8, image: '/instagram/post8.jpg', link: 'https://instagram.com/p/example8' },
  { id: 9, image: '/instagram/post9.jpg', link: 'https://instagram.com/p/example9' },
];

const InstagramSection: React.FC = () => {
  return (
    <Box
      id="instagram"
      sx={{
        py: { xs: 8, md: 10 },
        background: 'linear-gradient(180deg, #1A1A1A 0%, #0A0A0A 100%)',
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
            📸 Follow Our Journey
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: 700,
              mx: 'auto',
              mb: 3,
            }}
          >
            Stay updated with our latest creations, special offers, and behind-the-scenes moments
          </Typography>
          <Button
            variant="contained"
            size="large"
            startIcon={<InstagramIcon />}
            href="https://instagram.com/brazzagrill"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              background: 'linear-gradient(45deg, #F58529 0%, #DD2A7B 50%, #8134AF 100%)',
              color: 'white',
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              '&:hover': {
                background: 'linear-gradient(45deg, #F58529 0%, #DD2A7B 50%, #8134AF 100%)',
                opacity: 0.9,
              },
            }}
          >
            Follow @brazzagrill
          </Button>
        </Box>

        {/* Instagram Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(2, 1fr)',
              sm: 'repeat(3, 1fr)',
            },
            gap: 2,
          }}
        >
          {instagramPosts.map((post, index) => (
            <Box
              key={post.id}
              component={motion.div}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              sx={{
                position: 'relative',
                paddingBottom: '100%',
                overflow: 'hidden',
                borderRadius: 2,
                cursor: 'pointer',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.7) 100%)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  zIndex: 1,
                },
                '&:hover::before': {
                  opacity: 1,
                },
                '&:hover .instagram-icon': {
                  opacity: 1,
                },
              }}
            >
              <Box
                component="a"
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  display: 'block',
                  textDecoration: 'none',
                }}
              >
                <Box
                  component="img"
                  src={post.image}
                  alt={`Instagram post ${post.id}`}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                  onError={(e) => {
                    const colors = [
                      'linear-gradient(135deg, #DC143C 0%, #1A1A1A 100%)',
                      'linear-gradient(135deg, #FFA500 0%, #1A1A1A 100%)',
                      'linear-gradient(135deg, #4CAF50 0%, #1A1A1A 100%)',
                    ];
                    (e.target as HTMLElement).style.background = colors[index % 3];
                  }}
                />
                <InstagramIcon
                  className="instagram-icon"
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    fontSize: 48,
                    color: 'white',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    zIndex: 2,
                  }}
                />
              </Box>
            </Box>
          ))}
        </Box>

        {/* CTA Bottom */}
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          sx={{
            mt: 5,
            p: 4,
            bgcolor: 'rgba(255, 107, 0, 0.1)',
            borderRadius: 3,
            border: '2px solid rgba(255, 107, 0, 0.3)',
            textAlign: 'center',
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
            🎁 Exclusive VIP Offers!
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
            Enter on Whatsapp group and get access to exclusive deals, promotions, and giveaways!
            Tag us in your burger photos for a chance to be featured.
          </Typography>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            startIcon={<InstagramIcon />}
            href="https://instagram.com/brazzagrill"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Our Community
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default InstagramSection;
