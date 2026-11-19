/**
 * Server JavaScript (Node.js) untuk GeoTB-Sultra Dashboard
 * 
 * Menggunakan modul bawaan Node.js (http, fs, path) - Zero external dependencies!
 * Menjalankan server lokal:
 *   node server.js
 *   atau
 *   npm start
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const BASE_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'text/javascript; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.csv': 'text/csv; charset=UTF-8',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf'
};

const server = http.createServer((req, res) => {
  // Parsing URL dan sanitasi path
  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
  let pathname = decodeURIComponent(parsedUrl.pathname);

  // Default route mengarah ke index.html atau dashboard_geotb.html
  if (pathname === '/' || pathname === '') {
    pathname = '/index.html';
  } else if (pathname === '/dashboard') {
    pathname = '/dashboard_geotb.html';
  }

  const filePath = path.join(BASE_DIR, pathname);

  // Mencegah directory traversal security issue
  if (!filePath.startsWith(BASE_DIR)) {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=UTF-8' });
    res.end('403 Forbidden: Akses ditolak.');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
      res.end(`
        <!DOCTYPE html>
        <html lang="id">
        <head><title>404 - Halaman Tidak Ditemukan</title></head>
        <body style="font-family: sans-serif; text-align: center; padding: 50px;">
          <h1 style="color: #dc2626;">404 - Halaman Tidak Ditemukan</h1>
          <p>File <code>${pathname}</code> tidak ditemukan di server.</p>
          <a href="/" style="color: #0284c7; text-decoration: none; font-weight: bold;">&larr; Kembali ke Dashboard Utama</a>
        </body>
        </html>
      `);
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'public, max-age=3600'
    });

    const readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
  });
});

server.listen(PORT, () => {
  console.log('========================================================');
  console.log('  🚀 GeoTB-Sultra Dashboard Server Berhasil Berjalan!   ');
  console.log('========================================================');
  console.log(`  > Akses Lokal : http://localhost:${PORT}`);
  console.log(`  > File Utama  : ${path.join(BASE_DIR, 'index.html')}`);
  console.log('  > Tekan Ctrl+C untuk menghentikan server.');
  console.log('========================================================');
});
