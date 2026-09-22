const express = require("express");

function createApp() {
  const app = express();
  const tasks = [];
  let nextId = 1;

  app.use(express.json());

  app.get("/health", (request, response) => {
    response.json({ status: "ok" });
  });

  app.get("/tasks", (request, response) => {
    response.json(tasks);
  });

  app.post("/tasks", (request, response) => {
    const { title } = request.body;

    if (typeof title !== "string" || title.trim() === "") {
      return response.status(400).json({ error: "title is required" });
    }

    const task = { id: nextId++, title: title.trim(), completed: false };
    tasks.push(task);
    return response.status(201).json(task);
  });

  app.patch("/tasks/:id", (request, response) => {
    const task = tasks.find((item) => item.id === Number(request.params.id));

    if (!task) {
      return response.status(404).json({ error: "task not found" });
    }

    if (typeof request.body.completed !== "boolean") {
      return response.status(400).json({ error: "completed must be a boolean" });
    }

    task.completed = request.body.completed;
    return response.json(task);
  });

  app.delete("/tasks/:id", (request, response) => {
    const taskIndex = tasks.findIndex(
      (item) => item.id === Number(request.params.id),
    );

    if (taskIndex === -1) {
      return response.status(404).json({ error: "task not found" });
    }

    tasks.splice(taskIndex, 1);
    return response.status(204).send();
  });

  app.use((request, response) => {
    response.status(404).json({ error: "route not found" });
  });

  return app;
}

module.exports = { createApp };
