const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./react-materialui/data/db.json");
const middlewares = jsonServer.defaults({
  static: "./react-materialui/dist",
});
const port = process.env.POST || 3000;
server.use(middlewares);
server.use(
  jsonServer.rewriter({
    "/api/": "/$1",
  })
);

server.use(router);
server.listen(port, () => {
  console.log(`server is running on ${port}`);
});
