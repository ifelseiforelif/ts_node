import express, { Request, Response } from "express";
import { IUser } from "./interfaces/IUser";
const PORT = 5000;
const app = express();
app.use(express.json());
const users: Array<IUser> = [
  { id: 1, name: "Alexn", email: "alex@gmail.com" },
  { id: 2, name: "Petro", email: "petro@gmail.com" },
  { id: 3, name: "Vasya", email: "vasya@gmail.com" },
  { id: 4, name: "Danil", email: "danil@gmail.com" },
];

app.get("/users", (req: Request, res: Response) => {
  if (!req.query.title) {
    res.json(users);
  } else {
    const found_courses = users.filter(
      (user) => user.name.indexOf(req.query.title as string) > -1
    );
    res.json(found_courses);
  }
});

app.get("/users/:id", (req: Request, res: Response) => {
  const id: number = +req.params.id;
  const user = users.find((user) => user.id === id);
  if (user) {
    res.send(user);
  } else {
    res.sendStatus(404);
  }
});

app.post("/users", (req: Request, res: Response) => {
  const new_user = {
    id: +Date.now(),
    name: req.body.name,
    email: req.body.email,
  };
  users.push(new_user);
  res.json(new_user);
});

app.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT}`);
});
