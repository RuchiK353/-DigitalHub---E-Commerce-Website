const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

// Define the port
const PORT = 3000;

// Read products data
function loadProducts() {
  try {
    const dataPath = path.join(__dirname, 'data', 'products.json');
    const data = fs.readFileSync(dataPath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error loading products:', error);
    return [];
  }
}

// Get MIME type for files
function getMimeType(fileName) {
  const mimeTypes = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.ttf': 'font/ttf',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2'
  };

  const ext = path.extname(fileName).toLowerCase();
  return mimeTypes[ext] || 'application/octet-stream';
}

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Add CORS headers for development
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Charset', 'utf-8');

  const parsedUrl = url.parse(req.url, true);
  let pathname = parsedUrl.pathname;

  // Remove leading slash for routing
  if (pathname === '/') {
    pathname = '/index.html';
  }

  // API Routes
  if (pathname === '/api/products') {
    const products = loadProducts();
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify(products, null, 2));
    return;
  }

  // API Route: Get single product
  if (pathname.startsWith('/api/products/')) {
    const id = parseInt(pathname.split('/')[3]);
    const products = loadProducts();
    const product = products.find(p => p.id === id);

    if (product) {
      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(JSON.stringify(product, null, 2));
    } else {
      res.writeHead(404, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(JSON.stringify({ error: 'Product not found' }, null, 2));
    }
    return;
  }

  // Serve static files
  const filePath = path.join(__dirname, 'public', pathname);

  // Security: Prevent directory traversal
  const realPath = path.resolve(filePath);
  const publicPath = path.resolve(path.join(__dirname, 'public'));

  if (!realPath.startsWith(publicPath)) {
    res.writeHead(403, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<h1>403 Forbidden</h1>');
    return;
  }

  // Check if file exists
  fs.stat(filePath, (err, stats) => {
    if (err) {
      // File not found
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>404 Not Found</h1><p>The requested file could not be found.</p>');
      } else {
        res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>500 Internal Server Error</h1>');
      }
      return;
    }

    // If it's a directory, look for index.html
    if (stats.isDirectory()) {
      const indexPath = path.join(filePath, 'index.html');
      fs.stat(indexPath, (err, stats) => {
        if (err) {
          res.writeHead(403, { 'Content-Type': 'text/html; charset=utf-8' });
          res.end('<h1>403 Forbidden</h1>');
          return;
        }

        const mimeType = getMimeType(indexPath);
        res.writeHead(200, { 'Content-Type': mimeType });
        fs.createReadStream(indexPath).pipe(res);
      });
      return;
    }

    // Serve the file
    const mimeType = getMimeType(filePath);
    res.writeHead(200, { 'Content-Type': mimeType });
    fs.createReadStream(filePath).pipe(res);
  });
});

// Start the server
server.listen(PORT, () => {
  console.log(`
╔═══════════════════════════════════════════════════╗
║   DigitalHub E-Commerce Server                   ║
╠═══════════════════════════════════════════════════╣
║   Server running at: http://localhost:${PORT}      ║
║   Home Page: http://localhost:${PORT}/index.html    ║
║   Products: http://localhost:${PORT}/products.html  ║
║   API: http://localhost:${PORT}/api/products        ║
║                                                   ║
║   Press Ctrl+C to stop the server                ║
╚═══════════════════════════════════════════════════╝
  `);
});

// Handle server errors
server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use. Please choose another port.`);
  } else {
    console.error('Server error:', error);
  }
  process.exit(1);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('\nServer shutting down gracefully...');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});
