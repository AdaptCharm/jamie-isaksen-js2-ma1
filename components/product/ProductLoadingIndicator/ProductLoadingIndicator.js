import { render } from "../../render.js"

const ProductLoadingIndicator = () => {
  return (
    render(null, `#loading`, { removeElement: true })
  )
}

export default ProductLoadingIndicator