const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = 3000;

const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  port: 5432,
  database: "postgres",
  user: "postgres",
  password: "pass",
});

app.post("/messages", async (req, res) => {
  const { message } = req.body;

  try {
    const client = await pool.connect();

    const insertQuery = `
      INSERT INTO messages (message)
      VALUES ($1)
      RETURNING id;
    `;
    const values = [message];

    const result = await client.query(insertQuery, values);
    const insertedId = result.rows[0].id;

    client.release();

    res
      .status(201)
      .json({ id: insertedId, message: "Data added successfully" });
  } catch (error) {
    console.error("Error adding row to table:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/messages", async (req, res) => {
  try {
    const client = await pool.connect();

    const selectQuery = `
      SELECT * FROM messages
      ORDER BY id ASC
    `;

    const result = await client.query(selectQuery);
    const messages = result.rows;

    client.release();

    res.status(200).json(messages);
  } catch (error) {
    console.error("Error retrieving messages:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.delete("/messages/:id", async (req, res) => {
  const messageId = req.params.id;

  try {
    const client = await pool.connect();

    const deleteQuery = `
      DELETE FROM messages
      WHERE id = $1;
    `;
    const values = [messageId];

    await client.query(deleteQuery, values);

    client.release();

    res.status(200).json({ message: "Message deleted successfully" });
  } catch (error) {
    console.error("Error deleting message:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.listen(PORT, () => {});
