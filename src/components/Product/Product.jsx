import React from 'react'
import style from './product.module.css'

const Product = ({urlImage, linkProduct, title, price}) => {
  return (
    <div className={style.product}>
        <img src={urlImage}/>
        <div className={style.title}>{title}</div>
    </div>
  )
}

export default Product