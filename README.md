# Rahul Kumar - Developer Portfolio

A modern, responsive developer portfolio website built with React and Tailwind CSS.

## Features

- **Fully Responsive**: Mobile-first design that works well on all device sizes
- **Modern UI**: Clean, professional design with Tailwind CSS
- **Dark/Light Mode**: Toggle between light and dark themes
- **Animations**: Smooth animations and transitions with Framer Motion
- **Sections**:
  - Home/Hero
  - About Me
  - Skills
  - Projects
  - Contact
  - Footer

## Technologies Used

- **React**: Frontend library for building user interfaces
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for React
- **Vite**: Next-generation frontend tooling

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository

   ```
   git clone https://github.com/yourusername/portfolio.git
   ```

2. Navigate to the project directory

   ```
   cd portfolio
   ```

3. Install dependencies

   ```
   npm install
   ```

4. Start the development server

   ```
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

## Deployment

### Deploy to GitHub Pages

1. Update the `vite.config.js` file:

   ```js
   export default defineConfig({
     plugins: [react()],
     base: "/portfolio/", // Replace with your repository name
   });
   ```

2. Install gh-pages:

   ```
   npm install --save-dev gh-pages
   ```

3. Add these scripts to your package.json:

   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

4. Deploy to GitHub Pages:
   ```
   npm run deploy
   ```

### Deploy to Netlify

1. Create a `netlify.toml` file in the root directory:

   ```toml
   [build]
     command = "npm run build"
     publish = "dist"
   ```

2. Push your code to GitHub and connect the repository to Netlify.

## Customization

- Replace placeholder content with your own in the component files
- Add your own images in the `assets` folder
- Modify the color scheme in `tailwind.config.js`

## License

MIT License

---

Built with ❤️ by Rahul Kumar
