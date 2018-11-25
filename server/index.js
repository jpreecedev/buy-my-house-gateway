const express = require("express")
const { json, urlencoded } = require("body-parser")
const cors = require("cors")
const graphqlHTTP = require("express-graphql")
const { schema, resolvers } = require("./schema")

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

app.use("/test", (req, res) => {
  res.send("testing testing!!")
})

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true
  })
)

app.set("port", process.env.PORT || 3002)
app.listen(app.get("port"))

export default app
