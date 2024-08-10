"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PORT = 5000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
const users = [
    { id: 1, name: "Alexn", email: "alex@gmail.com" },
    { id: 2, name: "Petro", email: "petro@gmail.com" },
    { id: 3, name: "Vasya", email: "vasya@gmail.com" },
    { id: 4, name: "Danil", email: "danil@gmail.com" },
];
app.get("/users", (req, res) => {
    if (!req.query.title) {
        res.json(users);
    }
    else {
        const found_courses = users.filter((user) => user.name.indexOf(req.query.title) > -1);
        res.json(found_courses);
    }
});
app.get("/users/:id", (req, res) => {
    const id = +req.params.id;
    const user = users.find((user) => user.id === id);
    if (user) {
        res.send(user);
    }
    else {
        res.sendStatus(404);
    }
});
app.post("/users", (req, res) => {
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
