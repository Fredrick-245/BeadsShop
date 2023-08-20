import React from 'react'

export default function currencyConverter(price) {
    return  new Intl.NumberFormat(() => {}, {
        currency: "KES",
        style: "currency",
      }).format(price)
      
}
