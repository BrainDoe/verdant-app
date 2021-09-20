import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Row } from 'react-bootstrap'
import Loader from '../../products/groceries/Loader'
import Message from '../../products/groceries/Message'
import GroceryProduct from '../../products/groceries/GroceryProduct'
import { listProducts } from '../../../actions/productActions'

const LatestProducts = () => {

  const dispatch = useDispatch()

  const productList = useSelector(state => state.productList)
  const {loading, error, products} = productList 
  

  useEffect(() => {

    dispatch(listProducts())

  }, [dispatch])

  return (
    <div>
      {loading ? <Loader /> : error ? <Message variant="danger">{error}</Message> : (
        <Row>
          {products.map(product => (
            <Col sm={12} md={4} key={product.id} className="mb-3 mx-auto">
              <GroceryProduct product={product} key={product.id} />
            </Col>
          ))}             
        </Row>
      )}
    </div>
  )
}

export default LatestProducts
