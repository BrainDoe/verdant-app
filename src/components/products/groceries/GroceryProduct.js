import React from 'react'
import { Card } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Heart, HeartFill } from 'react-bootstrap-icons'
import image1 from '../../images/groceries-image/item1.png'

const GroceryProduct = ({product}) => {
  return (
    <>
      <Card className="m-4 bg-white" style={{ width: '207', height: '185', borderRadius: '3px' }}>
        <div className="py-3 px-3 bg-white">
        <LinkContainer to={`/groceries/${product.id}`}>
          <a className="text-decoration-none">
            <img src={image1} alt="Grocery Item"  className="img-thumbnail" alt="Grocery Item" />
          </a>
        </LinkContainer>
          <div className="mt-3">
            <div className="d-flex justify-between">
            <LinkContainer to={`/groceries/${product.id}`}>
              <a className="text-decoration-none">
                <p className="card-title text-dark" style={{ fontSize: '16px', fontWeight: '400' }}>{product.title}</p>
              </a>
            </LinkContainer>
              <span className="ml-auto">
                <Heart size={25} className="text-warning" style={{ cursor: 'pointer' }}></Heart>  
              </span>
            </div>
            <div className="card-text text-dark">
              <h5 style={{ fontSize: '18px', fontWeight: '500' }}>${product.price}</h5>
            </div>
            <button type="submit" className="btn btn-block btn-outline-primary" style={{ fontSize: '14px', fontWeight: '500' }}>Add To Cart</button>
          </div>
        </div>
      </Card>
    </>
  )
}

export default GroceryProduct
