const { buildSchema } = require("graphql")

const fetch = require("node-fetch")

const schema = buildSchema(`
  type Query {
    results: Results
  }

  type Listing {
    listing_id: String
    category: String
    property_type: String
    image_url: String
    num_bedrooms: String
    short_description: String
    description: String
    price: Int
    displayable_address: String
  }

  type Results {
    country: String
    result_count: Int
    area_name: String
    listing: [Listing]
  }
`)

const resolvers = {
  results: (
    _,
    {
      body: {
        variables: { listingId }
      }
    }
  ) => {
    const data = JSON.parse(JSON.stringify(require("./data.json")))

    if (listingId) {
      data.listing = [
        data.listing.find(
          listing => listing.listing_id.toString() === listingId.toString()
        )
      ]
    }

    return data

    // TODO: Fix
    // return await fetch("http://localhost:5001/api/listings").then(res =>
    //   res.json()
    // )
  }
}

module.exports = { schema, resolvers }
