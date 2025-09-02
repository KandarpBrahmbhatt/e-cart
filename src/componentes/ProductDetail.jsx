import React from 'react'
import { useParams } from 'react-router-dom' // id thi value mokalva mate useparams no use thay 6e.
import { items } from './Data'
import { useState, useEffect } from 'react'

const ProductDetail = () => {
    const { id } = useParams()

    const [product, setProduct] = useState(0)
    const [reletedProduct, setReletedProduct] = useState([])

    useEffect(() => {
        const filterProduct = items.filter((product) => // value ne filter kari ne aapase.
            product.id == id
        )
        setProduct(filterProduct[0]);

        const reletedProduct = items.filter((product) => product.category === product.category)
    }, [id])

    return (
        <div className="container">
            <div className="img">
                <img src={product.imgSrc} alt="" />
            </div>

            <div className="text-center">
                <h1 className="card-title">{product.title}</h1>
                <p className="card-text">{product.description}</p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                <button className='btn btn-primary'>{product.price}</button>
                <button className='btn btn-warning mx-3'>Add To Card</button>
            </div>
        </div>
    )
}

export default ProductDetail
