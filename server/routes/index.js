const testController = require("../controllers").test

const createRoutes = app => {
  app.get("/api/test", testController.get)
}

module.exports = createRoutes
