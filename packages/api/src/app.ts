import express from "express";

export const app = express();

app.use(express.json());

app.post("/echo", (req, res) => {
  const body: unknown = req.body;

  if (
    typeof body !== "object" ||
    body === null ||
    !("message" in body) ||
    typeof body.message !== "string"
  ) {
    res.status(400).json({ error: "message debe ser una cadena de texto" });
    return;
  }

  res.json({ message: body.message });
});
