const { buildSchema } = require("graphql")

const fetch = require("node-fetch")

const schema = buildSchema(`
type Query {
  results: Results
}

type Listing {
  category: String
  property_type: String
}

  type Results {
    country: String
    result_count: Int
    area_name: String
  listing: [Listing]
  }
`)

const resolvers = {
  results: async () => {
    return await fetch("http://localhost:5000/api/listings").then(res =>
      res.json()
    )
  }
}

module.exports = { schema, resolvers }
