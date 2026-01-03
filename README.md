# Solomon Chilumula - Marvel-Themed Portfolio Website

## 🦸 Overview
A modern, responsive portfolio website featuring a Marvel/Iron Man & Spider-Man theme. Built with cutting-edge web technologies and stunning visual effects.

## ✨ Features

### Design Theme
- **Marvel-inspired Design**: Iron Man & Spider-Man color scheme
- **Dark/Light Mode**: Toggle with smooth transitions and localStorage persistence
- **Glass Morphism Effects**: Modern frosted glass UI elements
- **HUD-Style Frames**: Corner brackets inspired by Iron Man's HUD
- **Arc Reactor Animations**: Glowing effects and pulsing animations

### Color Scheme

**Dark Mode (Default):**
- Primary: `#00BFFF` (Arc Reactor Blue)
- Accent: `#E62429` (Spider-Man Red)
- Background: `#0a0a0f` (Deep Space)
- Cards: `#12121a` (Dark Blue-Gray)
- Text: `#F0F0F0` (Light Gray)
- Gold Accent: `#FFD700` (Premium Gold)

**Light Mode:**
- Primary: `#1565C0` (Deep Blue)
- Accent: `#D32F2F` (Deep Red)
- Background: `#F5F5F5` (Light Gray)
- Cards: `#FFFFFF` (White)
- Text: `#1A1A1A` (Dark Gray)

### Typography
- Primary Font: `Orbitron` (Futuristic headers)
- Secondary Font: `Exo 2` (Subheadings)
- Body Font: `Inter`, `Rajdhani` (Readable content)

## 📁 File Structure

```
portfolio-main/
├── index.htm           # Front page (loading/intro screen)
├── portfolio.html      # Main portfolio page
├── style.css           # Main stylesheet (all portfolio styles)
├── front.css           # Front page specific styles
├── script.js           # Main JavaScript functionality
├── front.js            # Front page animations
├── nexxify-founder.jpg # Profile image
└── README.md           # This file
```

## 🎯 Sections

### Front Page (`index.htm`)
- Full-screen overlay with animated background
- Tony Stark quote: "No amount of money ever bought a second of time"
- Neural network canvas animation
- Arc reactor icon with rotating rings
- Stats preview with animated counters
- CTA button to enter portfolio

### Portfolio Page (`portfolio.html`)
1. **Navbar**: Fixed header with theme toggle, hamburger menu
2. **Hero**: Profile image with HUD frame, roles, social links
3. **Projects**: Horizontal scrollable cards with tech stacks
4. **Experience**: Timeline with company cards and highlights
5. **Skills**: Category cards (Languages, Frameworks, AI/ML, etc.)
6. **Education**: Timeline with degrees and certifications
7. **Contact**: Form with EmailJS integration + contact info
8. **Footer**: Copyright and credits

## 🛠 Technical Features

### Responsive Design
- Mobile-first approach
- Breakpoints: 480px, 768px, 900px
- Hamburger menu for mobile
- Touch-friendly project carousel
- Flexible grid layouts

### JavaScript Features
- Theme toggle with localStorage
- Smooth scroll navigation
- Active section highlighting
- Intersection Observer animations
- Keyboard shortcuts (T for theme, Esc for menu)
- Contact form with EmailJS (configurable)
- Back to top button
- Project carousel with keyboard navigation

### Performance
- CSS custom properties for theming
- Hardware-accelerated animations
- Debounced scroll events
- Reduced motion support
- Optimized images

### Accessibility
- Skip link for keyboard users
- ARIA labels and roles
- Focus management
- Screen reader friendly
- High contrast support

## 🚀 Quick Start

1. **Clone/Download** the repository
2. **Open** `index.htm` in a browser
3. **Customize**:
   - Replace `nexxify-founder.jpg` with your photo
   - Update personal info in HTML files
   - Configure EmailJS in `script.js`
   - Update social links

## 📧 EmailJS Setup

1. Create account at [EmailJS](https://www.emailjs.com/)
2. Get your Public Key, Service ID, and Template ID
3. Update `script.js`:
```javascript
emailjs.init('YOUR_PUBLIC_KEY');
// In form submit handler:
await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {...});
```

## 🎨 Customization

### Colors
Edit CSS variables in `style.css` and `front.css`:
```css
:root {
    --primary-color: #00BFFF;
    --accent-color: #E62429;
    /* ... */
}
```

### Content
Update the HTML files with your:
- Name and title
- Profile photo
- Projects and descriptions
- Work experience
- Skills
- Education
- Contact information
- Social media links

## 📱 Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📄 License
MIT License - Feel free to use and modify!

---

**Built with ❤️ by Solomon Chilumula**

*"No amount of money ever bought a second of time" - Tony Stark*
