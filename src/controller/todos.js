const { todos, user } = require("../../models");

exports.getTodos = async (request, response) => {
  try {
    let data = await todos.findAll();
    response.send({
      status: "success",
      data,
    });
  } catch (error) {
    console.log(error);
    response.send({
      message: "server error",
    });
  }
};

exports.addTodo = async (request, response) => {
  try {
    let todosData = await todos.create({
      title: request.body.title,
      status: "active",
      idUser: request.body.idUser,
    });

    response.send({
      status: "success",
      message: todosData,
    });
  } catch (error) {
    console.log(error);
    response.send({
      message: "server error",
    });
  }
};

exports.editTodo = async (request, response) => {
  try {
    const { id } = request.params;
    const newTodo = {
      title: request.body.title,
      status: "active",
      idUser: request.body.idUser,
    };
    await todos.update(newTodo, {
      where: {
        id,
      },
    });

    response.send({
      status: "success",
      message: newTodo,
    });
  } catch (error) {
    console.log(error);
    response.send({
      message: "server error",
    });
  }
};

exports.deleteTodo = async (request, response) => {
  try {
    let { id } = request.params;
    await todos.destroy({
      where: { id },
    });
    response.send({
      status: "success",
    });
  } catch (error) {
    console.log(error);
    response.send({
      message: "server error",
    });
  }
};

exports.getTodoById = async (request, response) => {
  try {
    let { id } = request.params;
    let detail = await todos.findOne({
      where: { id },
    });

    detail = JSON.parse(JSON.stringify(detail));
    response.send({
      status: "success",
      data: detail,
    });
  } catch (error) {
    console.log(error);
    response.send({
      message: "server error",
    });
  }
};
