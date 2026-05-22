# CONCES ATBU R&D Institutional Portfolio

A modern, responsive website showcasing the research and development initiatives of the CONCES ATBU Chapter.

## Features

- **Modern Design**: Deep navy and innovation gold color scheme with high-end technical aesthetics
- **Project Showcase**: Display 36 projects with filtering capabilities (15 finalists + 21 others)
- **Team Directory**: Organized team members by role (Leadership, R&D Fellows, Contributors)
- **Interactive Components**: 
  - Infinite-scrolling ticker with key metrics
  - Spotlight carousel for featured projects
  - Dynamic filtering system
  - Responsive mobile navigation
- **CMS Integration**: Decap CMS for easy content management
- **GitHub Pages Ready**: Optimized for static deployment

## Project Structure

```
├── public/
│   └── admin/
│       ├── config.yml          # Decap CMS configuration
│       └── index.html          # CMS interface
├── src/
│   ├── components/
│   │   ├── Navbar.astro        # Navigation bar
│   │   ├── Footer.astro        # Footer with links
│   │   ├── ProjectCard.astro   # Reusable project card
│   │   └── Ticker.astro        # Scrolling ticker
│   ├── content/
│   │   ├── projects/
│   │   │   └── 2026.json       # Project data (36 projects)
│   │   └── team/
│   │       └── members.json    # Team member data
│   ├── layouts/
│   │   └── MainLayout.astro    # Main page layout
│   └── pages/
│       ├── index.astro         # Home page
│       ├── archive.astro       # Project archive
│       ├── team.astro          # Team directory
│       └── contact.astro       # Contact form
├── astro.config.mjs            # Astro configuration
├── tailwind.config.mjs         # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Project dependencies
└── README.md                   # This file
```

## Installation

1. **Clone or extract the project**
   ```bash
   cd conces-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:3000`

## Building for Production

```bash
npm run build
```

This generates a static site in the `dist/` directory, ready for deployment to GitHub Pages.

## Deployment to GitHub Pages

1. **Update astro.config.mjs** with your repository details:
   ```javascript
   site: 'https://yourusername.github.io',
   base: '/conces-portfolio', // or your repo name
   ```

2. **Build the project**
   ```bash
   npm run build
   ```

3. **Deploy to GitHub Pages**
   - Push the `dist/` folder to your GitHub Pages repository
   - Or use GitHub Actions for automated deployment

## Content Management

### Adding/Editing Projects

1. Navigate to `/admin` on your deployed site
2. Login with your GitHub credentials
3. Go to "Projects" collection
4. Create or edit project entries with:
   - Title, Lead Researcher, Category
   - Status (Finalist, Prototype, Active Research)
   - Spotlight flag for featured projects
   - Description and images

### Managing Team Members

1. In the CMS, go to "Team Members" collection
2. Add or edit team members with:
   - Name, Role, Batch Year
   - Type (Leadership, R&D Fellow, Contributor)
   - Initials for avatar display

## Data Schema

### Projects (36 total)
- **15 Finalists** with `isSpotlight: true` and `status: "Finalist"`
- **21 Others** with various statuses (Prototype, Active Research)

### Team Members
- **Leadership**: Directors and heads of initiatives
- **R&D Fellows**: Senior researchers and engineers
- **Contributors**: Supporting team members

## Customization

### Colors
Edit `tailwind.config.mjs` to modify the brand colors:
- Primary Navy: `#002060`
- Accent Gold: `#FFC000`
- Light Gray: `#F3F4F6`

### Fonts
Google Fonts are loaded in `src/layouts/MainLayout.astro`:
- Display: Poppins (bold headings)
- Body: Inter (regular text)

### Site Configuration
Update `astro.config.mjs` for your deployment URL and base path.

## Technologies Used

- **Astro 4.14+**: Static site generation
- **Tailwind CSS 4.1+**: Utility-first CSS framework
- **Decap CMS 3.1+**: Headless CMS for content management
- **TypeScript**: Type-safe development

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT License - Feel free to use this template for your projects.

## Support

For issues or questions, please refer to the documentation or contact the development team.

---

**Built with Astro** - A modern static site generator for the modern web.
