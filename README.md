# Harsh Kumar Singh - Portfolio

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. This portfolio showcases my projects, skills, and provides an easy way for potential clients and employers to get in touch.

## 🚀 Live Demo

[View Live Portfolio](https://your-portfolio-url.vercel.app) <!-- Update with your actual deployment URL -->

## ✨ Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Interactive Contact Form** - Integrated with Formspree for reliable message delivery
- **Project Showcase** - Highlighting key projects and technologies
- **Direct Contact Options** - Calendly integration for easy meeting scheduling
- **Social Links** - Direct links to GitHub, LinkedIn, and email
- **Resume Download** - Easy access to downloadable resume

## 🛠️ Tech Stack

- **Frontend**: React 19, JavaScript (ES6+)
- **Styling**: Tailwind CSS 4.x
- **Build Tool**: Vite 6.x
- **Icons**: Lucide React, React Icons
- **Form Handling**: Formspree integration
- **Deployment**: Vercel-ready configuration

## 📁 Project Structure

```
src/
├── Components/
│   ├── Hero.jsx          # Landing section with typewriter effect
│   ├── Navbar.jsx        # Navigation with smooth scrolling
│   ├── Projects.jsx      # Project showcase section
│   ├── Contact.jsx       # Contact form and social links
│   └── Footer.jsx        # Footer with additional links
├── App.jsx               # Main application component
├── main.jsx              # Application entry point
└── index.css             # Global styles and Tailwind imports
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Mickey3970/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## 🔧 Configuration

### Contact Form Setup

1. Create a [Formspree](https://formspree.io) account
2. Create a new form and get your form ID
3. Update the form endpoint in `src/Components/Contact.jsx`

### Calendly Integration

1. Set up your [Calendly](https://calendly.com) account
2. Update the Calendly URL in `src/Components/Contact.jsx`

### Customization

- **Personal Information**: Update details in `src/Components/Hero.jsx`
- **Projects**: Modify project data in `src/Components/Projects.jsx`
- **Styling**: Customize colors and themes in Tailwind classes
- **Content**: Update text content across all components

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- **Desktop** (1024px+)
- **Tablet** (768px - 1023px)
- **Mobile** (320px - 767px)

## 🚀 Deployment

### Deploy to Vercel

1. **Connect your GitHub repository to Vercel**
2. **Import your project** in Vercel dashboard
3. **Deploy automatically** - Vercel will detect Vite configuration

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy the 'dist' folder to your hosting service
```

## 📞 Contact

- **Email**: harsh2004mckv@gmail.com
- **GitHub**: [@Mickey3970](https://github.com/Mickey3970)
- **LinkedIn**: [Harsh Kumar Singh](https://www.linkedin.com/in/harsh-kumar-singh-57392b27a)
- **Schedule Meeting**: [Calendly](https://calendly.com/harsh2004mckv)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

⭐ **Star this repository if you found it helpful!**
