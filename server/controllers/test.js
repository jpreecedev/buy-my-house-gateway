var get = function(req, res) {
  return res.status(200).send({
    message: "Hello from the API"
  })
}

module.exports = {
  get
}
