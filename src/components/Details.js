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
                                   <img src={img} className="img-fluid" alt="product" />
                               </div>
                               {/* product text */}
                               <div className="col-10 mx-auto col-md-6 my-3 text-capitalize text-right">
                                   <h2>عنوان : {title}  </h2>
                                   <h5 className="text-title text-uppercase text-muted text-capitalize font-weight-bold mt-3 mb-2">
                                       شرکت: <span className="text-uppercase"> {company} </span>
                                   </h5>
                                   <h5 className="text-blue text-capitalize font-weight-bold">
                                       قیمت :{price}<strong>تومان</strong>
                                   </h5>
                                   <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                       اطلاعاتی درباره محصول :
                                   </p>
                                   <p className="text-muted text-custom">
                                       {info}
                                   </p>
                                   {/* button */}
                                   <div>
                                       <Link to="/">
                                           <ButtonContainer>بازگشت به محصولات</ButtonContainer>
                                       </Link>
                                       <ButtonContainer cart disabled={inCart ? true : false}
                                       onClick={()=>{
                                           value.addToCart(id)
                                           value.openModal(id)
                                       }}
                                       >
                                           {inCart ? 'افزوه شده به کارت' : 'افزودن به کارت'}
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
