import React from 'react'

const ProductInfo = () => {
    const product = {
        name: "laptop",
        price: "$1200",
        availability: "In Stock"
    }
  return (
    <div>
      <p>name: {product.name}</p>
      <p>price: {product.price}</p>
      <p>availability: {product.availability}</p>
    </div>
  )
}

export default ProductInfo
