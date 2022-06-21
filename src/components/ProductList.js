import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../context";
import Search from "./Search";

export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-1">
          <div className="row mx-0">
            <Search />
          </div>
          <div className="container">
            <Title name="محصولات" title="ما" />
            <div className="row">
              <ProductConsumer>
                {(value) => {
                  console.log(value);
                  return value.products.map((product) => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
