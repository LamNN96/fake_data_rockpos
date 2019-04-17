import express from "express";
import allProducts from "./db";

const app = express();

app.get("/api/v1/all", (req, res) => {
  res.status(200).send({
    success: "true",
    message: "todos retrieved successfully",
    data: allProducts
  });
});
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
