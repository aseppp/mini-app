const express = require("express");
const router = express.Router();

const { register, login } = require("../controller/auth");
router.post("/register", register);
router.post("/login", login);

const {
  addTodo,
  getTodos,
  deleteTodo,
  editTodo,
  getTodoById,
} = require("../controller/todos");
router.post("/add-todo/", addTodo);
router.get("/todos/", getTodos);
router.delete("/todo/:id", deleteTodo);
router.patch("/todo/:id", editTodo);
router.get("/todo/:id", getTodoById);

module.exports = router;
