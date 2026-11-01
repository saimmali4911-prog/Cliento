const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, 'data', 'leads.json');
const CLIENT_DIST = path.join(__dirname, '..', 'client', 'dist');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ensure data file exists
if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, JSON.stringify([], null, 2), 'utf8');
}

function readLeads() {
  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(raw) || [];
  } catch (err) {
    console.error('Error reading leads:', err);
    return [];
  }
}

function writeLeads(leads) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(leads, null, 2), 'utf8');
    return true;
  } catch (err) {
    console.error('Error writing leads:', err);
    return false;
  }
}

// ---- API Routes ----

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    uptime: Math.round(process.uptime()),
    timestamp: new Date().toISOString(),
    backend: 'Node.js Express'
  });
});

// Get leads
app.get('/api/leads', (req, res) => {
  const leads = readLeads();
  res.json({
    success: true,
    count: leads.length,
    leads: leads.slice().reverse()
  });
});

// Submit lead / contact form
app.post('/api/leads', (req, res) => {
  const { name, email, phone, service, message, source } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      success: false,
      error: 'Name and email are required.'
    });
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      error: 'Please provide a valid email address.'
    });
  }

  const leads = readLeads();
  const newLead = {
    id: 'lead_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
    name: name.trim(),
    email: email.trim(),
    phone: phone ? phone.trim() : '',
    service: service || 'General Inquiry',
    message: message ? message.trim() : '',
    source: source || 'Walkthrough Form',
    createdAt: new Date().toISOString()
  };

  leads.push(newLead);
  writeLeads(leads);

  console.log(`[Lead Received] ${newLead.name} (${newLead.email}) - Service: ${newLead.service}`);

  return res.status(201).json({
    success: true,
    message: "Thanks! We've received your request and will be in touch shortly.",
    lead: newLead
  });
});

// Alias for /api/contact
app.post('/api/contact', (req, res) => {
  req.url = '/api/leads';
  app.handle(req, res);
});

// Serve frontend assets
if (fs.existsSync(CLIENT_DIST)) {
  console.log('Serving built React frontend from:', CLIENT_DIST);
  app.use(express.static(CLIENT_DIST));
  app.get('*', (req, res) => {
    if (req.url.startsWith('/api')) {
      return res.status(404).json({ error: 'API route not found' });
    }
    res.sendFile(path.join(CLIENT_DIST, 'index.html'));
  });
} else {
  console.warn('[Warning] React build not found in client/dist. Run "npm run build" to compile frontend.');
  app.get('*', (req, res) => {
    if (req.url.startsWith('/api')) {
      return res.status(404).json({ error: 'API route not found' });
    }
    res.status(503).send('React frontend not built. Please run: npm run build');
  });
}

app.listen(PORT, () => {
  console.log(`Backend server running at http://localhost:${PORT}`);
});

