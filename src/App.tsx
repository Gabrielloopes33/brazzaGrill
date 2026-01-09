import { useEffect, useState } from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import theme from './theme';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import QuickOrderSection from './components/QuickOrderSection';
import MenuSection from './components/MenuSection';
import LocationSection from './components/LocationSection';
import ReviewsSection from './components/ReviewsSection';
import OurStorySection from './components/OurStorySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    // Check if restaurant is open based on current time
    const checkIfOpen = () => {
      const now = new Date();
      const day = now.getDay();
      const hour = now.getHours();

      if (day === 0) {
        // Sunday: 12 PM - 8 PM
        setIsOpen(hour >= 12 && hour < 20);
      } else if (day === 6) {
        // Saturday: 12 PM - 10 PM
        setIsOpen(hour >= 12 && hour < 22);
      } else if (day === 5) {
        // Friday: 11 AM - 10 PM
        setIsOpen(hour >= 11 && hour < 22);
      } else {
        // Monday-Thursday: 11 AM - 9 PM
        setIsOpen(hour >= 11 && hour < 21);
      }
    };

    checkIfOpen();
    const interval = setInterval(checkIfOpen, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        
        {/* SEO Meta Tags */}
        <Helmet>
          <title>Brazza Grill - Authentic Brazilian Burgers in Miami, Florida</title>
          <meta 
            name="description" 
            content="Experience authentic Brazilian burgers in Miami! Brazza Grill brings 6 years of passion and excellence to every bite. Order now via Speedzapp, UberEats, or DoorDash." 
          />
          <meta 
            name="keywords" 
            content="Brazilian burgers Miami, food truck Miami, Brazza Grill, best burgers Florida, gourmet burgers, Miami food delivery, Brazilian food, burgers near me" 
          />
          
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.brazzagrill.com/" />
          <meta property="og:title" content="Brazza Grill - Authentic Brazilian Burgers in Miami" />
          <meta 
            property="og:description" 
            content="6 years of passion. Now bringing excellence to Miami. Order authentic Brazilian burgers from our food truck!" 
          />
          <meta property="og:image" content="https://www.brazzagrill.com/og-image.jpg" />
          
          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://www.brazzagrill.com/" />
          <meta property="twitter:title" content="Brazza Grill - Authentic Brazilian Burgers in Miami" />
          <meta 
            property="twitter:description" 
            content="6 years of passion. Now bringing excellence to Miami. Order authentic Brazilian burgers from our food truck!" 
          />
          <meta property="twitter:image" content="https://www.brazzagrill.com/twitter-image.jpg" />
          
          {/* Additional Meta Tags */}
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="theme-color" content="#FF6B00" />
          <meta name="author" content="Brazza Grill" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://www.brazzagrill.com/" />
          
          {/* Structured Data for Local Business */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              "name": "Brazza Grill",
              "image": "https://www.brazzagrill.com/logo.png",
              "description": "Authentic Brazilian burgers in Miami, Florida",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Miami",
                "addressLocality": "Miami",
                "addressRegion": "FL",
                "postalCode": "33101",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 25.7617,
                "longitude": -80.1918
              },
              "url": "https://www.brazzagrill.com",
              "telephone": "+1-305-123-4567",
              "servesCuisine": ["Brazilian", "American", "Burgers"],
              "priceRange": "$$",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
                  "opens": "11:00",
                  "closes": "21:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Friday",
                  "opens": "11:00",
                  "closes": "22:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "12:00",
                  "closes": "22:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Sunday",
                  "opens": "12:00",
                  "closes": "20:00"
                }
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "150"
              },
              "sameAs": [
                "https://www.instagram.com/brazzagrill",
                "https://www.facebook.com/brazzagrill"
              ]
            })}
          </script>
        </Helmet>

        <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
          <Navbar isOpen={isOpen} />
          <HeroSection />
          <QuickOrderSection />
          <MenuSection />
          <LocationSection />
          <ReviewsSection />
          <OurStorySection />
          <ContactSection />
          <Footer />
        </Box>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
