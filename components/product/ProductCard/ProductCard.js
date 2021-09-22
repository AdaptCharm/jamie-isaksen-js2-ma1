import { render } from "../../render.js"

const ProductCard = (title, price) => {
  return (
    render(
      `
        <div class="flex p-6 rounded-md transition shadow-small hover:shadow-medium">
            <div class="flex-1">
              <div>
                <p class="text-xl font-bold">${title}</p>
              </div>
              <div class="mt-6">
                <div class="flex items-center gap-x-3">
                  <p class="text-sm font-medium text-gray-900">Price:</p>
                  <p class="text-sm font-medium text-gray-900">$${price}</p>
                </div>
              </div>
            </div>
        </div>
      `, `#result`, { appendContent: true }
    )
  )
}

export default ProductCard