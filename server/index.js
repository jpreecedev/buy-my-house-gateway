import express from "express"
import { json, urlencoded } from "body-parser"
import cors from "cors"
import graphqlHTTP from "express-graphql"
import { buildSchema } from "graphql"
import { schema } from "./schema"

const app = express()

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: false }))

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Credentials", "true")
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT")
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  )
  next()
})

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return "Hello world!"
  }
}

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return "Hello world!"
  }
}

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
)

require("./routes")(app)

app.set("port", process.env.PORT || 3002)
app.listen(app.get("port"))

export default app
