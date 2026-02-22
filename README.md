# Programming Shots

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-cyan)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

Free programming courses, tutorials, and resources for beginners in English and Nepali.

</div>

## 🌟 Features

- **Bilingual Content** - Available in both English and Nepali
- **Free Courses** - All courses are completely free
- **Interactive Learning** - Code examples, quizzes, and practice exercises
- **Learning Roadmap** - Structured path from beginner to advanced
- **Progress Tracking** - Track your learning journey
- **Responsive Design** - Learn on any device
- **PWA Support** - Install as a native app

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/programming-shots.git

# Navigate to the project directory
cd programming-shots

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
programming-shots/
├── app/                    # Next.js app directory
│   ├── [locale]/          # Locale-specific routes
│   │   ├── courses/       # Courses pages
│   │   ├── roadmap/       # Learning roadmap
│   │   ├── glossary/      # Programming terms
│   │   ├── cheatsheets/  # Quick references
│   │   ├── resources/    # External links
│   │   ├── progress/     # Progress tracking
│   │   └── about/        # About page
│   └── globals.css       # Global styles
├── components/            # React components
│   ├── layout/           # Layout components
│   └── ui/               # UI components
├── context/              # React contexts
│   ├── LanguageContext   # i18n support
│   ├── ThemeContext      # Dark/light mode
│   └── ProgressContext   # Progress tracking
├── data/                 # Static data
│   ├── courses.ts        # Course data
│   ├── roadmap.ts       # Roadmap data
│   ├── glossary.ts      # Terms glossary
│   ├── cheatsheets.ts  # Quick references
│   └── resources.ts     # External resources
├── locales/             # Translation files
│   ├── en/              # English
│   └── ne/              # Nepali
├── public/               # Static assets
│   ├── manifest.json    # PWA manifest
│   ├── sitemap.xml      # SEO sitemap
│   └── robots.txt       # Robots.txt
└── styles/              # Style configurations
```

## 🛠️ Technologies

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State:** React Context API
- **i18n:** next-intl
- **Deployment:** Vercel / GitHub Pages

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [freeCodeCamp](https://www.freecodecamp.org) for inspiration
- [MDN Web Docs](https://developer.mozilla.org) for documentation
- All contributors and supporters

---

Made with ❤️ for aspiring programmers in Nepal and beyond.
