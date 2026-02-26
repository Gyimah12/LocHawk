const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = 3000;
const DATA_FILE = path.join(__dirname, 'data.txt');

app.use(express.json());
app.use(express.static('template'));

app.post('/transmit', async (req, res) => {
    try {
        const { type, data } = req.body;
        const timestamp = new Date().toISOString();
        const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
        
        const logEntry = {
            ts: timestamp,
            ip: clientIp,
            type: type,
            data: data
        };

        const logLine = JSON.stringify(logEntry) + '\n';
        await fs.appendFile(DATA_FILE, logLine, 'utf8');

        res.json({ status: 'ok' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ status: 'error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
