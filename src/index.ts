import express from "express";
import { IUser } from "./interfaces/IUser";
const PORT = 5000;
const app = express();
const users: Array<IUser> = [
  { id: 1, name: "Alex", email: "alex@gmail.com" },
  { id: 2, name: "Petro", email: "petro@gmail.com" },
  { id: 3, name: "Vasya", email: "vasya@gmail.com" },
  { id: 4, name: "Danil", email: "danil@gmail.com" },
];

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  const id: number = +req.params.id;
  const user = users.find((user) => user.id === id);
  if (user) {
    res.send(user);
  } else {
    res.send("user not found");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT}`);
});
