import React, { Component } from 'react'
import {ProductConsumer} from '../context'
import {Link} from 'react-router-dom'
import {ButtonContainer} from './Button'

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value=>{
                   const {id,title,img,price,company,info,inCart}=value.detailProduct;
                   return(
                       <div className="container">
                           {/* title */}
                           <div className="row">
                               <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                   <h1> {title} </h1>
                               </div>
                           </div>
                           {/* title end */}
                           {/* product info */}
                           <div className="row">
                               <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                   <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-256.png" className="img-fluid" alt="product" />
                               </div>
                               {/* product text */}
                               <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                   <h2>Model : {title}  </h2>
                                   <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                       made by: <span className="text-uppercase"> {company} </span>
                                   </h4>
                                   <h4 className="text-blue">
                                       price :<strong>&</strong>{price}
                                   </h4>
                                   <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                       some info about the product:
                                   </p>
                                   <p className="text-muted lead">
                                       {info}
                                   </p>
                                   {/* button */}
                                   <div>
                                       <Link to="/">
                                           <ButtonContainer>Back To Product</ButtonContainer>
                                       </Link>
                                       <ButtonContainer cart disabled={inCart ? true : false}
                                       onClick={()=>{
                                           value.addToCart(id)
                                           value.openModal(id)
                                       }}
                                       >
                                           {inCart ? 'in cart' : 'add to cart'}
                                       </ButtonContainer>
                                   </div>

                               </div>
                           </div>
                       </div>
                   )
                }}
            </ProductConsumer>
        )
    }
}
