import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import pkg from 'pg';
const { Pool } = pkg;

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// PostgreSQL connection
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Users_DB',
  password: 'admin',
  port: 5432,
});

// Login endpoint
app.post('/login', async (req, res) => {
  const { userType, userName, password } = req.body;

  try {
    console.log(userType, userName, password);
    const result = await pool.query(
      'SELECT * FROM users WHERE user_type = $1 AND user_name = $2 AND password = $3',
      [userType, userName, password]
    );
    console.log(result);
    if (result.rows.length > 0) {
      res.json({ success: true, message: 'Login successful' });
    } else {
      res.json({ success: false, message: 'Invalid credentials' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
