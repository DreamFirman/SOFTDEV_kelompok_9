
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const db = require('./config/database');

const app = express();

app.use(cors());
app.use(express.json());

// Halaman utama API
app.get('/', (req, res) => {
    res.json({
        message: 'Backend KasirKita berhasil berjalan!'
    });
});

// Tes koneksi database
app.get('/api/test-db', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT DATABASE() AS database_name');

        res.json({
            message: 'Database berhasil terhubung!',
            database: rows[0].database_name
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: 'Koneksi database gagal.'
        });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server KasirKita berjalan di http://localhost:${PORT}`);
});
