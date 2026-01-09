import React, { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  IconButton,
  TextField,
  Typography,
  Alert,
  CircularProgress,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import SendIcon from '@mui/icons-material/Send';
import emailjs from 'emailjs-com';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  subscribe: boolean;
}

const ContactSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS configuration - replace with your actual IDs
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: data.name,
          from_email: data.email,
          phone: data.phone,
          message: data.message,
          subscribe: data.subscribe ? 'Yes' : 'No',
        },
        'YOUR_PUBLIC_KEY'
      );

      setSubmitStatus('success');
      reset();
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <WhatsAppIcon />,
      label: 'WhatsApp',
      value: '+1 (239) 888-9454',
      link: 'https://wa.me/12398889454?text=Hello%20Brazza%20Grill',
      color: '#25D366',
    },
  ];

  const socialLinks = [
    {
      icon: <InstagramIcon />,
      label: 'Instagram',
      link: 'https://instagram.com/brazzagrill',
      color: '#E1306C',
    },
    {
      icon: <FacebookIcon />,
      label: 'Facebook',
      link: 'https://facebook.com/brazzagrill',
      color: '#1877F2',
    },
  ];

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 8, md: 10 },
        background: 'linear-gradient(180deg, #0A0A0A 0%, #1A1A1A 100%)',
      }}
    >
      <Container maxWidth="lg">
        {/* VIP WhatsApp Group Banner */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          sx={{
            mb: 6,
            p: 4,
            bgcolor: 'rgba(37, 211, 102, 0.1)',
            borderRadius: 3,
            border: '2px solid rgba(37, 211, 102, 0.3)',
            textAlign: 'center',
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
            🎁 Exclusive VIP Offers!
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
            Enter our WhatsApp group and get access to exclusive deals, promotions, and giveaways!
            Tag us in your burger photos for a chance to be featured.
          </Typography>
          <Button
            variant="contained"
            size="large"
            startIcon={<WhatsAppIcon />}
            href="https://wa.me/12398889454?text=Hi!%20I%20want%20to%20join%20the%20VIP%20group"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              bgcolor: '#25D366',
              color: 'white',
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              '&:hover': {
                bgcolor: '#128C7E',
              },
            }}
          >
            Join VIP WhatsApp Group
          </Button>
        </Box>

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
            📞 Get in Touch
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: 700,
              mx: 'auto',
            }}
          >
            Have questions or feedback? We'd love to hear from you!
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 5,
          }}
        >
          {/* Contact Info */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
              Contact Information
            </Typography>

            {/* Contact Methods */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mb: 4 }}>
              {contactInfo.map((contact, index) => (
                <Box
                  key={index}
                  component={motion.div}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <Button
                    variant="outlined"
                    fullWidth
                    href={contact.link}
                    target={contact.label === 'WhatsApp' ? '_blank' : undefined}
                    rel={contact.label === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                    startIcon={contact.icon}
                    sx={{
                      justifyContent: 'flex-start',
                      p: 2,
                      borderColor: contact.color,
                      color: 'white',
                      '&:hover': {
                        borderColor: contact.color,
                        bgcolor: `${contact.color}22`,
                      },
                    }}
                  >
                    <Box sx={{ textAlign: 'left', ml: 2 }}>
                      <Typography variant="caption" sx={{ display: 'block', color: 'text.secondary' }}>
                        {contact.label}
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 600 }}>
                        {contact.value}
                      </Typography>
                    </Box>
                  </Button>
                </Box>
              ))}
            </Box>

            {/* Social Media */}
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                Follow Us
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                {socialLinks.map((social, index) => (
                  <Box
                    key={index}
                    component={motion.div}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconButton
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        bgcolor: social.color,
                        color: 'white',
                        width: 56,
                        height: 56,
                        '&:hover': {
                          bgcolor: social.color,
                          opacity: 0.9,
                        },
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Business Hours Quick Reference */}
            <Box
              sx={{
                mt: 4,
                p: 3,
                bgcolor: 'rgba(255, 107, 0, 0.1)',
                borderRadius: 2,
                border: '1px solid rgba(255, 107, 0, 0.3)',
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                ⏰ Quick Hours
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Mon-Thu: 11:00 AM - 9:00 PM<br />
                Fri: 11:00 AM - 10:00 PM<br />
                Sat: 12:00 PM - 10:00 PM<br />
                Sun: 12:00 PM - 8:00 PM
              </Typography>
            </Box>
          </Box>

          {/* Contact Form */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
              Send Us a Message
            </Typography>

            <Box component="form" onSubmit={handleSubmit(onSubmit)}>
              <TextField
                fullWidth
                label="Name"
                {...register('name')}
                error={!!errors.name}
                helperText={errors.name?.message}
                margin="normal"
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Email"
                type="email"
                {...register('email')}
                error={!!errors.email}
                helperText={errors.email?.message}
                margin="normal"
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Phone"
                {...register('phone')}
                error={!!errors.phone}
                helperText={errors.phone?.message}
                margin="normal"
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Message"
                {...register('message')}
                error={!!errors.message}
                helperText={errors.message?.message}
                margin="normal"
                variant="outlined"
                multiline
                rows={4}
              />
              <FormControlLabel
                control={<Checkbox {...register('subscribe')} color="primary" />}
                label="Subscribe to our newsletter for exclusive deals and updates"
                sx={{ mt: 1, mb: 2 }}
              />

              {submitStatus === 'success' && (
                <Alert severity="success" sx={{ mb: 2 }}>
                  Thank you! Your message has been sent successfully. We'll get back to you soon!
                </Alert>
              )}

              {submitStatus === 'error' && (
                <Alert severity="error" sx={{ mb: 2 }}>
                  Oops! Something went wrong. Please try again or contact us directly via WhatsApp.
                </Alert>
              )}

              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                disabled={isSubmitting}
                endIcon={isSubmitting ? <CircularProgress size={20} /> : <SendIcon />}
                sx={{ mt: 2, py: 1.5 }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactSection;
