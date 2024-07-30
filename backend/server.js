import express from 'express';
import mysql from 'mysql2/promise';

const app = express();
const port = 3000;
app.use(express.json());

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'password123',
  database: process.env.DB_NAME || 'ecsdb'
};
app.get('/', (req, res) => {
  res.send('Hello phidelist!');
});
app.post('/users', async (req, res) => {
  const { name, age } = req.body;

  if (!name || !age) {
    return res.status(400).json({ error: 'Name and age are required' });
  }

  try {
    const connection = await mysql.createConnection(dbConfig);

    const [result] = await connection.execute(
      'INSERT INTO users (name, age) VALUES (?, ?)',
      [name, age]
    );
    await connection.end();

    res.status(201).json({ id: result.insertId, name, age });
  } catch (error) {
    console.error('Error inserting user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});
