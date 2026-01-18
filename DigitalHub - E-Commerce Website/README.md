# 🚀 DigitalHub - E-Commerce Website

> A modern, full-stack digital products e-commerce platform built with HTML5, CSS3, JavaScript, and Node.js

[![Node.js](https://img.shields.io/badge/Node.js-14+-green.svg)](https://nodejs.org/)
[![Status](https://img.shields.io/badge/Status-Production%20Ready-brightgreen.svg)](#)

## ✨ Features

### 🎯 Core Features
- **Responsive Design** - Mobile-first approach, works on all devices
- **Dark Theme** - Modern dark purple and black gradient design
- **Product Browsing** - Grid-based product display with hover effects
- **Advanced Search** - Real-time search functionality
- **Category Filtering** - Filter products by type (Courses, Templates, Assets, E-Books)
- **Product Details** - Comprehensive product information pages
- **RESTful API** - Backend API for dynamic content
- **Zero Dependencies** - Only uses Node.js built-in modules

### 🎨 Design Features
- **Gradient UI** - Premium dark purple/black theme
  - Primary: `linear-gradient(135deg, #2b1055, #000000)`
  - Secondary: `linear-gradient(135deg, #3a0ca3, #1a1a2e)`
- **Smooth Animations** - Transitions and hover effects
- **Purple Glow Effects** - Enhanced visual feedback
- **Professional Typography** - Clean, readable fonts

### 🛍️ E-Commerce Features
- Product catalog with images and descriptions
- Dynamic pricing display
- Wishlist functionality (UI)
- Cart simulation (UI)
- Product specifications
- Related products recommendation
- Newsletter signup

## 🏗️ Project Structure

```
digital-hub/
├── public/                    # Frontend files
│   ├── index.html            # Home page
│   ├── products.html         # Products listing
│   ├── product-detail.html   # Product details
│   ├── style.css             # Stylesheet (800+ lines)
│   └── script.js             # JavaScript functions
├── data/
│   └── products.json         # 10 sample digital products
├── server.js                 # Node.js HTTP server
├── package.json              # Project metadata
├── README.md                 # Full documentation
└── .gitignore               # Git configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14.0.0 or higher)
- npm (comes with Node.js)
- Modern web browser

### Installation

1. **Clone the repository**
```bash
git clone https://ruchik353.github.io/-DigitalHub---E-Commerce-Website/
cd digital-hub
```

2. **Install dependencies** (optional - no npm packages required)
```bash
npm install
```

### Running the Server

```bash
# Start the server
npm start

# Or directly with Node.js
node server.js
```

The server will start at `http://localhost:3000`

```
╔═══════════════════════════════════════════════════╗
║   DigitalHub E-Commerce Server                   ║
╠═══════════════════════════════════════════════════╣
║   Server running at: http://localhost:3000        ║
║   Home Page: http://localhost:3000/               ║
║   Products: http://localhost:3000/products.html   ║
║   API: http://localhost:3000/api/products         ║
╚═══════════════════════════════════════════════════╝
```

## 📖 Usage

### Browse the Website

- **Home Page** - http://localhost:3000
  - Hero section with gradient background
  - Featured products
  - Category previews
  - Features section
  - Newsletter signup

- **Products Page** - http://localhost:3000/products.html
  - All products in grid layout
  - Search by product name or description
  - Filter by category (Courses, Templates, Assets, E-Books)

- **Product Detail** - http://localhost:3000/product-detail.html?id=1
  - Full product information
  - Product specifications
  - Related products
  - Access/Download button

### API Endpoints

#### Get All Products
```bash
curl http://localhost:3000/api/products
```

Returns array of all products with details.

#### Get Single Product
```bash
curl http://localhost:3000/api/products/1
```

Returns single product object or error message.

#### Response Format
```json
{
  "id": 1,
  "title": "Web Development Masterclass",
  "price": 49.99,
  "category": "Course",
  "image": "https://images.unsplash.com/...",
  "description": "Comprehensive web development course",
  "details": "This masterclass covers 50+ hours...",
  "access": "Instant lifetime access"
}
```

## 📦 Sample Products

The database includes 10 pre-loaded digital products:

| Product | Category | Price |
|---------|----------|-------|
| Web Development Masterclass | Course | $49.99 |
| Premium UI/UX Design Templates | Template | $29.99 |
| React Advanced Patterns | Course | $39.99 |
| Complete Logo Design Pack | Asset | $24.99 |
| Digital Marketing E-Book | E-Book | $19.99 |
| WordPress Development Course | Course | $44.99 |
| Mobile App UI Kit | Template | $34.99 |
| SEO Optimization Guide | E-Book | $29.99 |
| Python Programming Essentials | Course | $54.99 |
| Brand Identity Templates | Template | $39.99 |

## 🎨 Design System

### Color Palette
```css
Primary Gradient:    linear-gradient(135deg, #2b1055, #000000)
Secondary Gradient:  linear-gradient(135deg, #3a0ca3, #1a1a2e)
Background:          #0b0d17
Card Background:     #14162b
Accent Color:        #7c3aed
Heading Text:        #f8fafc
Body Text:           #cbd5f5
Muted Text:          #9aa3d1
```

### Responsive Breakpoints
- **Desktop**: Full layout (768px+)
- **Tablet**: 2-3 column grid (480px - 768px)
- **Mobile**: Single column (480px and below)

## 🛠️ Technology Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Gradients, flexbox, grid, animations
- **JavaScript** - Vanilla JS (ES6+), Fetch API

### Backend
- **Node.js** - Runtime environment
- **Built-in HTTP Module** - Web server
- **File System API** - Data storage
- **URL Module** - Routing

### Data
- **JSON** - Data storage format
- **UTF-8** - Character encoding

### Images
- **Unsplash** - Royalty-free images

## 📊 Code Statistics

| Component | Lines | Type |
|-----------|-------|------|
| HTML (3 pages) | 700+ | Markup |
| CSS | 800+ | Styling |
| JavaScript | 400+ | Frontend Logic |
| Node.js Server | 170+ | Backend |
| **Total** | **3,500+** | **Code** |

## 🔧 Configuration

### Change Port
Edit `server.js` line 8:
```javascript
const PORT = process.env.PORT || 3000;
```

### Add New Product
Edit `data/products.json`:
```json
{
  "id": 11,
  "title": "Your Product Name",
  "price": 29.99,
  "category": "Course",
  "image": "https://images.unsplash.com/...",
  "description": "Short description",
  "details": "Detailed description",
  "access": "Access method"
}
```

### Customize Colors
Edit `public/style.css` CSS variables:
```css
:root {
  --primary-gradient: linear-gradient(135deg, #2b1055, #000000);
  --accent-color: #7c3aed;
  /* ... more variables ... */
}
```

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Find process using port 3000
netstat -ano | findstr :3000

# Kill the process (Windows)
taskkill /PID <PID> /F

# macOS/Linux
lsof -ti:3000 | xargs kill -9
```

### Products Not Loading
- Verify `data/products.json` exists and is valid
- Check browser console for errors
- Ensure server is running on port 3000

### Images Not Showing
- Check internet connection (Unsplash images)
- Browser will use fallback placeholder if offline
- All images have fallback handling

## 📚 Documentation

- **[README.md](README.md)** - Complete project documentation

## 🚀 Deployment

### Deploy to Heroku
```bash
heroku create your-app-name
git push heroku main
heroku open
```

### Deploy to DigitalOcean
```bash
# Create droplet, SSH in, and run:
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs
git clone <your-repo>
cd digital-hub
node server.js
```

### Deploy to AWS
1. Create EC2 instance
2. Install Node.js
3. Deploy application files
4. Start with PM2: `pm2 start server.js`

## 🎯 Features Roadmap

- [ ] User authentication
- [ ] Shopping cart (fully functional)
- [ ] Payment integration
- [ ] Email notifications
- [ ] Product reviews and ratings
- [ ] Admin dashboard
- [ ] Database integration (MongoDB)
- [ ] Image upload functionality
- [ ] Multi-language support
- [ ] Analytics tracking

## 🔒 Security

### Implemented
- ✅ Path traversal prevention
- ✅ MIME type validation
- ✅ Error handling without exposing system details
- ✅ CORS headers (development)
- ✅ No sensitive data in frontend

### Recommendations
- Use HTTPS in production
- Add rate limiting
- Validate all user input
- Use environment variables for config
- Add authentication
- Implement CSRF protection

## � Author

Created by Ruchita Kadam

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support, email support@digitalhub.com or open an issue on GitHub.

## 🌟 Show Your Support

Give a ⭐️ if you found this project helpful!

---

### Key Highlights

- ⚡ **Zero Dependencies** - Only uses Node.js built-in modules
- 🎨 **Modern Design** - Dark purple theme with gradient accents
- 📱 **Fully Responsive** - Works on mobile, tablet, and desktop
- 🔧 **Easy to Customize** - Well-organized, documented code
- 🚀 **Production Ready** - Secure, scalable, and maintainable
- 📚 **Well Documented** - Complete guides and API docs

### Quick Links

- [Documentation](README.md)
- [Report Issues](https://github.com/RuchiK353/digital-hub/issues)

---

**Version**: 1.0.0  
**Status**: ✅ Production Ready  
**Last Updated**: January 2025

Made with ❤️ by [Ruchita Kadam]

