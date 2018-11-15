const { buildSchema } = require("graphql")

var schema = buildSchema(`
  type Query {
    hello: String
  }
`)

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || "World"}`
  }
}

module.exports = { schema, resolvers }
