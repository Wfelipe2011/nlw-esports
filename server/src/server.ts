import express from "express";

const app = express();

app.get("/", (request, response) => {
  return response.json(
    [{ id: 1, name: "John Doe" },
    { id: 2, name: "Doe John" },
    { id: 3, name: "Test test" }]
  );
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
