# 🚀 QUICK START - BRAZZA GRILL

## ⚡ Início Rápido (5 minutos)

### 1. Instalar Dependências
```powershell
yarn install
```

### 2. Rodar o Projeto
```powershell
yarn dev
```

Abra: http://localhost:3000

---

## 📝 Checklist Essencial

### ANTES DE COMEÇAR:
- [ ] Node.js instalado? (rode `node -v`)
- [ ] Yarn instalado? (rode `yarn -v`)

### CONFIGURAÇÃO MÍNIMA (10 min):
- [ ] Adicionar logo em `public/logo.png`
- [ ] Adicionar imagens de hambúrgueres em `public/menu/`
- [ ] Atualizar links de delivery em `QuickOrderSection.tsx`
- [ ] Atualizar telefone/email em `ContactSection.tsx`

### PARA IR AO AR:
```powershell
yarn build
```

Depois suba a pasta `dist` para:
- Vercel.com (recomendado)
- Netlify.com
- Ou seu hosting

---

## 🎯 Links Importantes

**Documentação Completa:** `README.md`
**Instruções Detalhadas:** `INSTRUCOES.md`
**Variáveis de Ambiente:** `.env.example`

---

## 📞 Precisa de Ajuda?

1. Leia `INSTRUCOES.md` primeiro
2. Verifique `README.md` para troubleshooting
3. Procure erros no console do navegador (F12)

---

## 🎨 Principais Arquivos

```
src/
├── App.tsx              ← Componente principal
├── theme.ts             ← Cores e estilos
├── components/
│   ├── Navbar.tsx       ← Menu de navegação
│   ├── HeroSection.tsx  ← Seção inicial
│   ├── MenuSection.tsx  ← Cardápio (EDITE AQUI!)
│   └── ...              ← Outros componentes
```

---

## ✨ Comandos Úteis

```powershell
# Desenvolvimento
yarn dev

# Build produção
yarn build

# Preview do build
yarn preview

# Limpar cache
Remove-Item -Recurse -Force node_modules, yarn.lock, dist
yarn install
```

---

**Pronto para começar! 🍔🔥**
