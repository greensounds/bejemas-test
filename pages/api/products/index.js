const { products } = require('./data.json')
export default (req, res) => {
  res.status(200).json(products)
}
