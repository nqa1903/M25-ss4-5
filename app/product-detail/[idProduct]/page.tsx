import React from 'react'

interface IdProduct{
    idProduct : string;
}

interface Props {
    params : IdProduct;
}

export default function ProductDetail(props:Props) {
    const {params} = props;
  return (
    <div>
      Product id : {params.idProduct}
    </div>
  )
}
