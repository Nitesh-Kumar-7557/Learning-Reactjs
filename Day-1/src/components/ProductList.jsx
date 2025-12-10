import React from 'react'

const ProductList = () => {

    const products = [
        { id: 1, name: "Asus Tuf A17", price: "80,000"},
        { id: 2, name: "Macbook Pro", price: "1,60,000"},
        { id: 3, name: "IPhone", price: "60,000"},
    ]

  return (
    <div>
      {
        products.map(({id,name,price})=>(
            <div key={id}>
                <h1>{name}</h1>
                <p>{price}</p>
            </div>
        ))
      }
    </div>
  )
}

export default ProductList
