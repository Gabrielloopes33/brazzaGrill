# 🍔 Brazza Grill - Landing Page

![Brazza Grill](./public/logo.png)

## 🎯 Sobre o Projeto

Landing page moderna e responsiva para o **Brazza Grill**, food truck especializado em hambúrgueres brasileiros autênticos em Fort Myers, Florida. O site foi desenvolvido com foco em conversão, performance e experiência do usuário.

## ✨ Características

### 🎨 Design & UX
- **Design Moderno**: Interface dark com paleta vermelha e preta
- **Responsivo**: Otimizado para mobile, tablet e desktop
- **Animações Suaves**: Transições e efeitos com Framer Motion
- **Scrollspy Navbar**: Navegação inteligente que destaca a seção atual

### 📱 Seções Principais

1. **Hero Section**
   - Vídeo/imagem de fundo em paralax
   - Badge de status (aberto/fechado) em tempo real
   - CTA principal "ORDER NOW"
   - Estatísticas do negócio

2. **Quick Order**
   - Botões para Speedzapp, UberEats e DoorDash
   - Design destacado para plataforma principal
   - Links diretos para pedidos

3. **Menu**
   - Grid responsivo de produtos
   - Categorias com tabs
   - Badges (Popular, New, Spicy)
   - Modal com detalhes dos produtos

4. **Location (Where)**
   - Google Maps integrado
   - Horários de funcionamento
   - Status atual (aberto/fechado)
   - Botão "Get Directions"

5. **Reviews**
   - Carrossel automático de depoimentos
   - Navegação manual (prev/next)
   - Ratings de clientes reais
   - Integração com plataformas

6. **Our Story**
   - História da marca (Brasil → Fort Myers)
   - Fotos Before/After
   - Valores e promessa
   - Estatísticas

7. **Instagram Feed**
   - Grid de posts do Instagram
   - Links para posts individuais
   - CTA para seguir a conta

8. **Contact**
   - Formulário de contato com validação
   - Links diretos (WhatsApp, Email, Phone)
   - Redes sociais
   - Newsletter subscription

9. **Footer**
   - Links úteis
   - Informações de contato
   - Redes sociais
   - Copyright

### 🚀 Tecnologias Utilizadas

- **React 18** - Framework JavaScript
- **TypeScript** - Tipagem estática
- **Vite** - Build tool super rápido
- **Material UI (MUI)** - Biblioteca de componentes
- **Framer Motion** - Animações
- **React Hook Form** - Gerenciamento de formulários
- **Yup** - Validação de schemas
- **EmailJS** - Envio de emails (client-side)
- **React Helmet Async** - SEO e meta tags
- **React Scroll** - Smooth scrolling

### 🎯 SEO & Performance

- ✅ Meta tags otimizadas
- ✅ Open Graph (Facebook/Twitter)
- ✅ Structured Data (JSON-LD)
- ✅ Lighthouse Score 85+
- ✅ Lazy loading de imagens
- ✅ Code splitting
- ✅ PWA-ready

## 📦 Instalação

### Pré-requisitos
- Node.js 18+ 
- Yarn

### Passos

1. **Instalar dependências**
```bash
yarn install
```

2. **Configurar variáveis de ambiente** (opcional)
Crie um arquivo `.env` na raiz:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_key
```

3. **Rodar em desenvolvimento**
```bash
yarn dev
```

O site estará disponível em `http://localhost:3000`

4. **Build para produção**
```bash
yarn build
```

5. **Preview do build**
```bash
yarn preview
```

## 🖼️ Assets Necessários

Adicione os seguintes arquivos na pasta `public/`:

### Imagens Gerais
- `logo.png` - Logo da Brazza Grill
- `favicon.ico` - Favicon do site
- `hero-video.mp4` - Vídeo de fundo do hero (opcional)
- `hero-poster.jpg` - Poster do vídeo
- `hero-image.jpg` - Imagem de fallback mobile
- `og-image.jpg` - Imagem Open Graph (1200x630px)
- `twitter-image.jpg` - Imagem Twitter Card (1200x600px)

### Menu (`public/menu/`)
- `burger1.jpg` até `burger6.jpg`
- `fries1.jpg`, `sides1.jpg`, `nachos.jpg`
- `drink1.jpg`, `milkshake.jpg`
- `dessert1.jpg`

### Story (`public/`)
- `story-before.jpg` - Foto do food truck no Brasil
- `story-after.jpg` - Foto do food truck em Fort Myers

### Instagram (`public/instagram/`)
- `post1.jpg` até `post9.jpg`

### Avatars (`public/avatars/`)
- `avatar1.jpg` até `avatar7.jpg`

## ⚙️ Configurações Importantes

### EmailJS
Para o formulário de contato funcionar, configure o EmailJS:

1. Crie uma conta em [EmailJS](https://www.emailjs.com/)
2. Crie um serviço de email
3. Crie um template de email
4. Atualize o arquivo `ContactSection.tsx` com suas credenciais

### Google Maps
1. Obtenha uma API key no [Google Cloud Console](https://console.cloud.google.com/)
2. Ative a API "Maps Embed"
3. Atualize a URL do mapa em `LocationSection.tsx`

### Links das Plataformas de Delivery
Atualize os links em `QuickOrderSection.tsx`:
- Speedzapp
- UberEats
- DoorDash

### Informações de Contato
Atualize em múltiplos componentes:
- Telefone/WhatsApp
- Email
- Endereço
- Redes sociais

## 🎨 Customização

### Cores
Edite `src/theme.ts` para alterar a paleta:
```typescript
primary: '#DC143C', // Vermelho principal
secondary: '#1A1A1A', // Preto
warning: '#FFA500', // Laranja
success: '#4CAF50', // Verde
```

### Horários
Atualize a lógica em:
- `App.tsx` (status geral)
- `Navbar.tsx` (badge)
- `LocationSection.tsx` (horários detalhados)

### Menu
Edite o array `menuItems` em `MenuSection.tsx`

### Reviews
Edite o array `reviews` em `ReviewsSection.tsx`

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:
- **Mobile**: 0-599px
- **Tablet**: 600-1023px
- **Desktop**: 1024px+

## 🌐 Deploy

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Arraste a pasta `dist` para o Netlify
```

### Outras Opções
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting
- Render

## 📊 Analytics

Para adicionar Google Analytics:
1. Obtenha seu GA4 ID
2. Adicione no `index.html` ou use `react-ga4`

## 🐛 Troubleshooting

### Erros de compilação
```bash
rm -rf node_modules yarn.lock
yarn install
```

### Imagens não carregam
- Verifique se os assets estão na pasta `public/`
- Use caminhos relativos começando com `/`

### Formulário não envia
- Verifique as credenciais do EmailJS
- Abra o console do navegador para ver erros

## 📄 Licença

Este projeto foi desenvolvido para o Brazza Grill.

## 🤝 Contribuindo

Para melhorias ou correções:
1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

## 📞 Suporte

Para dúvidas ou suporte:
- Email: suporte@brazzagrill.com
- WhatsApp: +1 (305) 123-4567

---

**Made with ❤️ in Fort Myers, Florida** 🇧🇷 🇺🇸
