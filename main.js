import { PRODUCTS_API, PRODUCTS_COUNT } from './config'
import { ProductLoadingIndicator } from './components/product'

try {
  const res = await fetch(`${PRODUCTS_API}/products`)
  const products = await res.json()

  //Remove loading indicator.
  ProductLoadingIndicator();

  //Handle each data.
  products.slice(0, PRODUCTS_COUNT).forEach((product) => {
    // ProductCard();
  })
} catch (e) {
  render(`Oops! Something went wrong... sorry!`, `.loading`)
}
