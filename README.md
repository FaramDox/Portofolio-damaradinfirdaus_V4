# Portfolio Damar Adin Firdaus

[![Netlify Status](https://api.netlify.com/api/v1/badges/your-badge-id/deploy-status)](https://damaradinfirdaus.netlify.app/)

Portfolio website pribadi dibangun dengan React + Vite. Modern, responsif, dan interaktif.

🌐 **Live Demo**: [damaradinfirdaus.netlify.app](https://damaradinfirdaus.netlify.app/)

---

## 🚀 Tech Stack

- **React 18** - Library UI
- **Vite** - Build tool & dev server
- **Vanilla CSS** - Custom animations & styling
- **Web3Forms** - Contact form service

## ✨ Features

- ⚡ Fast loading dengan Vite HMR
- 🎨 Modern UI dengan animasi smooth
- 📱 Fully responsive design (mobile-first)
- 🎯 Interactive components:
  - Typing effect animation
  - Scroll reveal animations
  - Animated skill progress bars
- 📧 Contact form integration
- 🖼️ Certificate modal viewer
- 🎭 Smooth page transitions

## 📦 Installation

```bash
# Clone repository
git clone https://github.com/username/portfolio-react.git
cd portfolio-react

# Install dependencies
npm install

# Run development server
npm run dev
```

Development server berjalan di `http://localhost:5173`

## 🛠️ Build & Deploy

### Build Production

```bash
# Build untuk production
npm run build

# Preview production build
npm run preview
```

### Deploy ke Netlify

1. Build project: `npm run build`
2. Drag folder `dist` ke [Netlify Drop](https://app.netlify.com/drop)
3. Atau gunakan Netlify CLI:
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod
   ```

### Deploy ke GitHub Pages

```bash
# Install gh-pages
npm install -D gh-pages

# Tambahkan script di package.json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}

# Deploy
npm run deploy
```

## 📁 Project Structure

```
portfolio-react/
├── public/             # Static assets
├── src/
│   ├── components/     # React components
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Certificates.jsx
│   │   └── Contact.jsx
│   ├── hooks/          # Custom React hooks
│   ├── App.jsx         # Main app component
│   ├── App.css         # Global styles
│   └── main.jsx        # Entry point
├── index.html          # HTML template
├── vite.config.js      # Vite configuration
└── package.json        # Dependencies
```

## 🧰 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build untuk production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 📝 License

© 2026 Damar Adin Firdaus. All rights reserved.

---

**Built with ❤️ using React & Vite**
