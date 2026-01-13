import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import { motion } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  badges?: ('popular' | 'new' | 'spicy')[];
  link?: string;
}

const menuItems: MenuItem[] = [
  // SMASH
  {
    id: 1,
    name: 'Kids',
    description: 'Pão brioche selado na manteiga, burger smash de 80g, queijo mussarela e molho Brazza + Kinder Ovo',
    price: 10.00,
    image: 'https://speedzapp.com/userfiles/sp-us/imagens/estabelecimentos/83/produtos/J7U14D43Y9A0.png',
    category: 'Smash',
    link: 'https://speedzapp.com/brazzagrill?lang=pt-br',
  },
  {
    id: 2,
    name: 'Smash',
    description: 'Pão brioche selado na manteiga, burger smash de 80g, queijo cheddar, cebola roxa, salada e molho Brazza',
    price: 12.00,
    image: 'https://speedzapp.com/userfiles/sp-us/imagens/estabelecimentos/83/produtos/66NFOTT2G384.png',
    category: 'Smash',
    badges: ['popular'],
    link: 'https://speedzapp.com/brazzagrill?lang=pt-br',
  },
  {
    id: 3,
    name: 'Brazzinha',
    description: 'Pão brioche selado na manteiga, burger smash de 80g, queijo mussarela, cebola crispy, salada e molho Brazza',
    price: 12.00,
    image: 'https://speedzapp.com/userfiles/sp-us/imagens/estabelecimentos/83/produtos/JF223038YITH.png',
    category: 'Smash',
    link: 'https://speedzapp.com/brazzagrill?lang=pt-br',
  },
  {
    id: 4,
    name: 'Supremo',
    description: 'Pão brioche selado na manteiga, dois burger smash de 80g cada, dupla camada de queijo cheddar, bacon fatia, salada e molho Brazza',
    price: 16.00,
    image: 'https://speedzapp.com/userfiles/sp-us/imagens/estabelecimentos/83/produtos/Q306C55T4VN8.png',
    category: 'Smash',
    badges: ['popular'],
    link: 'https://speedzapp.com/brazzagrill?lang=pt-br',
  },
  
  // GOURMET
  {
    id: 5,
    name: 'Cheese Burger',
    description: 'Pão brioche selado na manteiga, burger de 140g, queijo mussarela, salada e molho Brazza',
    price: 12.00,
    image: 'https://speedzapp.com/userfiles/sp-us/imagens/estabelecimentos/83/produtos/2M85VHMYNX9J.jpg',
    category: 'Gourmet',
    link: 'https://speedzapp.com/brazzagrill?lang=pt-br',
  },
  {
    id: 6,
    name: 'Big Brazza',
    description: 'Pão brioche selado na manteiga, burger de 140g, queijo mussarela em dobro, bacon fatia, molho BBQ, salada e molho Brazza',
    price: 16.00,
    image: 'https://speedzapp.com/userfiles/sp-us/imagens/estabelecimentos/83/produtos/99P5T570AVPE.jpg',
    category: 'Gourmet',
    badges: ['popular'],
    link: 'https://speedzapp.com/brazzagrill?lang=pt-br',
  },
  {
    id: 7,
    name: 'Brazzeiro',
    description: 'Pão brioche selado na manteiga, burger de 140g, cebola roxa e tomate chapeado com cobertura de cheddar fatia, bacon fatia, creme de alho da casa e molho Brazza',
    price: 17.00,
    image: 'https://speedzapp.com/userfiles/sp-us/imagens/estabelecimentos/83/produtos/VBAK35S8697V.jpg',
    category: 'Gourmet',
    link: 'https://speedzapp.com/brazzagrill?lang=pt-br',
  },
  {
    id: 8,
    name: 'Ember',
    description: 'Pão brioche selado na manteiga, burger de 140g, três queijos, cebola caramelizada, bacon fatia, molho BBQ, ovo, salada e molho Brazza',
    price: 19.00,
    image: 'https://speedzapp.com/userfiles/sp-us/imagens/estabelecimentos/83/produtos/34D317W1DETN.jpg',
    category: 'Gourmet',
    badges: ['new'],
    link: 'https://speedzapp.com/brazzagrill?lang=pt-br',
  },
  {
    id: 9,
    name: 'Sheriff',
    description: 'Pão brioche selado na manteiga, três burger de 140g, três camadas de cheddar, tres camadas de bacon fatia, cebola caramelizada, molho BBQ, ovo, salada e molho Brazza',
    price: 28.00,
    image: 'https://speedzapp.com/userfiles/sp-us/imagens/estabelecimentos/83/produtos/S5MZ0SYOL1OJ.jpg',
    category: 'Gourmet',
    badges: ['popular'],
    link: 'https://speedzapp.com/brazzagrill?lang=pt-br',
  },
  
  // TRADICIONAL
  {
    id: 10,
    name: 'Simples',
    description: 'Pão Brioche, burger 110g bovino, Milho, Batata e Salada',
    price: 10.00,
    image: '',
    category: 'Tradicional',
    link: 'https://speedzapp.com/brazzagrill?lang=pt-br',
  },
  {
    id: 11,
    name: 'X-Burger',
    description: 'Pão Brioche, burger 110g bovino, Queijo Mussarela em dobro, Milho, Batata e Salada',
    price: 12.00,
    image: '',
    category: 'Tradicional',
    link: 'https://speedzapp.com/brazzagrill?lang=pt-br',
  },
  {
    id: 12,
    name: 'X-Egg Burger',
    description: 'Pão Brioche, burger 110g bovino, Queijo Mussarela em dobro, Ovo, Milho, Batata e Salada',
    price: 15.00,
    image: '',
    category: 'Tradicional',
    link: 'https://speedzapp.com/brazzagrill?lang=pt-br',
  },
  {
    id: 13,
    name: 'X-Bacon Burger',
    description: 'Pão Brioche, burger 110g bovino, Queijo Mussarela em dobro, Bacon Cubinho, Milho, Batata e Salada',
    price: 17.00,
    image: '',
    category: 'Tradicional',
    link: 'https://speedzapp.com/brazzagrill?lang=pt-br',
  },
  {
    id: 14,
    name: 'X-Tudo',
    description: 'Pão Brioche, burger 110g bovino, Queijo Mussarela em dobro, Bacon Cubinho, Ovo, Presunto Defumado, Milho, Batata e Salada',
    price: 20.00,
    image: '',
    category: 'Tradicional',
    badges: ['popular'],
    link: 'https://speedzapp.com/brazzagrill?lang=pt-br',
  },
  
  // BEBIDAS
  {
    id: 15,
    name: 'Coca Lata',
    description: 'Coca-Cola em lata',
    price: 2.00,
    image: 'https://speedzapp.com/userfiles/sp-us/imagens/estabelecimentos/83/produtos/CY97UT94XNS0.jpg',
    category: 'Drinks',
    link: 'https://speedzapp.com/brazzagrill?lang=pt-br',
  },
  {
    id: 16,
    name: 'Coca Lata ZERO',
    description: 'Coca-Cola Zero em lata',
    price: 2.00,
    image: 'https://speedzapp.com/userfiles/sp-us/imagens/estabelecimentos/83/produtos/3P8KUA3018QD.jpeg',
    category: 'Drinks',
    link: 'https://speedzapp.com/brazzagrill?lang=pt-br',
  },
  {
    id: 17,
    name: 'Guaraná Lata',
    description: 'Guaraná em lata',
    price: 3.00,
    image: 'https://speedzapp.com/userfiles/sp-us/imagens/estabelecimentos/83/produtos/09IF524M0TWI.jpg',
    category: 'Drinks',
    link: 'https://speedzapp.com/brazzagrill?lang=pt-br',
  },
  {
    id: 18,
    name: 'Coca KS',
    description: 'Coca-Cola garrafa',
    price: 3.00,
    image: 'https://speedzapp.com/userfiles/sp-us/imagens/estabelecimentos/83/produtos/8JWJL06ES2LH.png',
    category: 'Drinks',
    link: 'https://speedzapp.com/brazzagrill?lang=pt-br',
  },
  {
    id: 19,
    name: 'Suco de Goiaba',
    description: 'Suco natural de goiaba',
    price: 3.00,
    image: 'https://speedzapp.com/userfiles/sp-us/imagens/estabelecimentos/83/produtos/6X5M6P2I340M.png',
    category: 'Drinks',
    link: 'https://speedzapp.com/brazzagrill?lang=pt-br',
  },
  {
    id: 20,
    name: 'Suco de Manga',
    description: 'Suco natural de manga',
    price: 3.00,
    image: 'https://speedzapp.com/userfiles/sp-us/imagens/estabelecimentos/83/produtos/OA8029R7E64Z.jpeg',
    category: 'Drinks',
    link: 'https://speedzapp.com/brazzagrill?lang=pt-br',
  },
];

const categories = ['All', 'Smash', 'Gourmet', 'Tradicional', 'Drinks'];

const MenuSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [openDialog, setOpenDialog] = useState(false);

  const handleCategoryChange = (_event: React.SyntheticEvent, newValue: string) => {
    setSelectedCategory(newValue);
  };

  const handleItemClick = (item: MenuItem) => {
    setSelectedItem(item);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const filteredItems = selectedCategory === 'All'
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory);

  const getBadgeIcon = (badge: string) => {
    switch (badge) {
      case 'popular':
        return <StarIcon fontSize="small" />;
      case 'new':
        return <WhatshotIcon fontSize="small" />;
      case 'spicy':
        return <LocalFireDepartmentIcon fontSize="small" />;
      default:
        return null;
    }
  };

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'popular':
        return 'error';
      case 'new':
        return 'warning';
      case 'spicy':
        return 'warning';
      default:
        return 'default';
    }
  };

  return (
    <Box
      id="menu"
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
            🍔 Our Menu
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: 700,
              mx: 'auto',
            }}
          >
            Try our signature burgers and sides, crafted with passion and authentic Brazilian flavors
          </Typography>
        </Box>

        {/* Category Tabs */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 5 }}>
          <Tabs
            value={selectedCategory}
            onChange={handleCategoryChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              '& .MuiTabs-indicator': {
                backgroundColor: 'primary.main',
                height: 3,
              },
              '& .MuiTab-root': {
                color: 'text.secondary',
                fontWeight: 600,
                fontSize: '1rem',
                '&.Mui-selected': {
                  color: 'primary.main',
                },
              },
            }}
          >
            {categories.map((category) => (
              <Tab key={category} label={category} value={category} />
            ))}
          </Tabs>
        </Box>

        {/* Menu Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
            gap: 3,
          }}
        >
          {filteredItems.map((item, index) => (
            <Box
              key={item.id}
              component={motion.div}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'visible',
                }}
                onClick={() => handleItemClick(item)}
              >
                {/* Badges */}
                {item.badges && item.badges.length > 0 && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 10,
                      right: 10,
                      zIndex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 0.5,
                    }}
                  >
                    {item.badges.map((badge) => {
                      const icon = getBadgeIcon(badge);
                      return (
                        <Chip
                          key={badge}
                          icon={icon || undefined}
                          label={badge.toUpperCase()}
                          color={getBadgeColor(badge) as any}
                          size="small"
                          sx={{ fontWeight: 700 }}
                        />
                      );
                    })}
                  </Box>
                )}

                <CardMedia
                  component="div"
                  sx={{
                    height: 200,
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: '#2D2D2D',
                  }}
                  onError={(e) => {
                    // Fallback gradient
                    (e.target as HTMLElement).style.backgroundImage =
                      'linear-gradient(135deg, #DC143C 0%, #1A1A1A 100%)';
                  }}
                />
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                    {item.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      mb: 2,
                      flexGrow: 1,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {item.description}
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.main' }}>
                      ${item.price.toFixed(2)}
                    </Typography>
                    <Button variant="outlined" color="primary" size="small">
                      See More
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>

        {/* View Full Menu CTA */}
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          sx={{ textAlign: 'center', mt: 6 }}
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            href="https://speedzapp.com/brazzagrill"
            target="_blank"
            sx={{ px: 4, py: 1.5 }}
          >
            🍔 Order on SpeedZapp
          </Button>
        </Box>
      </Container>

      {/* Item Detail Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            bgcolor: 'background.paper',
            borderRadius: 2,
          },
        }}
      >
        {selectedItem && (
          <>
            <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                {selectedItem.name}
              </Typography>
              <IconButton onClick={handleCloseDialog}>
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              <Box
                sx={{
                  width: '100%',
                  height: 300,
                  backgroundImage: `url(${selectedItem.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundColor: '#2D2D2D',
                  borderRadius: 2,
                  mb: 2,
                }}
              />
              {selectedItem.badges && selectedItem.badges.length > 0 && (
                <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                  {selectedItem.badges.map((badge) => {
                    const icon = getBadgeIcon(badge);
                    return (
                      <Chip
                        key={badge}
                        icon={icon || undefined}
                        label={badge.toUpperCase()}
                        color={getBadgeColor(badge) as any}
                        size="small"
                      />
                    );
                  })}
                </Box>
              )}
              <Typography variant="body1" sx={{ mb: 3 }}>
                {selectedItem.description}
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main', mb: 3 }}>
                ${selectedItem.price.toFixed(2)}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                href={selectedItem.link || 'https://speedzapp.com/brazzagrill?lang=pt-br'}
                target="_blank"
                rel="noopener noreferrer"
              >
                Order on SpeedZapp
              </Button>
            </DialogContent>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default MenuSection;
